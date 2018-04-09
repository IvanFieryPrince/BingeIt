import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})

export class EpisodePage {
  season: any;
  episodes:Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, apiProvider:ApiProvider) {
    this.season = this.navParams.get('season');
    this.episodes = apiProvider.getEpisodes(this.season.id);
  }

  openDetails(episode) {
    this.navCtrl.push('EpisodeDetailPage', { episode: episode });
  }
  
  toroot(){
    this.navCtrl.setRoot('SeriesPage');
    this.navCtrl.popToRoot();
  }

}
