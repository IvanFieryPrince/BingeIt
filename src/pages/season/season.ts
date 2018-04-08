import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-season',
  templateUrl: 'season.html',
})
export class SeasonPage {
  show:any;
  seasons:Observable<any>;
  url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient) {
    this.show = this.navParams.get('show');
    this.url = 'http://api.tvmaze.com/shows/' + this.show.id + '/seasons';
    this.seasons = this.httpClient.get('http://api.tvmaze.com/shows/' + this.show.id + '/seasons');
    this.seasons
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }

  openDetails(season) {
    this.navCtrl.push('EpisodePage', { season: season });
  }

}
