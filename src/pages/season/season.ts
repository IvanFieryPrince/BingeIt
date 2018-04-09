import { ApiProvider } from './../../providers/api/api';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider:ApiProvider) {
    this.show = this.navParams.get('show');
    this.seasons = apiProvider.getSeasons(this.show.id);
  }

  openDetails(season) {
    this.navCtrl.push('EpisodePage', { season: season });
  }

}
