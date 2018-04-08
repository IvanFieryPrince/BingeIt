import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  shows: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.shows = this.httpClient.get('http://api.tvmaze.com/shows');
    this.shows
      .subscribe(data => {
        console.log('my data: ', data);
      })
  }
  
  openDetails(show) {
    this.navCtrl.push('SeasonPage', { show: show });
  }

}
