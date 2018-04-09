import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-episode-detail',
  templateUrl: 'episode-detail.html',
})
export class EpisodeDetailPage {
  episodeunit:any;
  episodeDetails: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider:ApiProvider) {
    this.episodeunit = this.navParams.get('episode');
    this.episodeDetails = apiProvider.getEpisodeDetail(this.episodeunit.id);
  }

  toroot() {
    this.navCtrl.setRoot('SeriesPage');
    this.navCtrl.popToRoot();
  }
}
