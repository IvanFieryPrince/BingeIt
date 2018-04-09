import { ApiProvider } from './../../providers/api/api';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, apiProvider:ApiProvider) {
    this.season = this.navParams.get('season');
    this.episodes = apiProvider.getEpisodes(this.season.id);
  }

  openDetails(episode) {
    this.navCtrl.push('PlayerPage', { episode: episode });
  }
  home(){
    this.navCtrl.setRoot('SeriesPage');
    this.navCtrl.popToRoot();
  }

}
