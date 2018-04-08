import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Component, Directive, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
@Directive({
    selector: 'img[src]',
    host: {
      '[src]': 'checkPath(src)',
      '(error)': 'onError()'
    }
})
export class EpisodePage {
  season: any;
  show:any;
  episodes:Observable<any>;
  url: string;
  @Input() src:string;
  public defaultImg: string = './app/assets/imgs/notfound.png';

  public onError() {
    return this.defaultImg;
  }
  public checkPath(src) {
    return src ? src : this.defaultImg;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.season = this.navParams.get('season');
    this.url = 'http://api.tvmaze.com/seasons/' + this.season.id + '/episodes';
    this.episodes = this.httpClient.get('http://api.tvmaze.com/seasons/' + this.season.id + '/episodes');
    this.episodes
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  openDetails(episode) {
    this.navCtrl.push('PlayerPage', { episode: episode });
  }

}
