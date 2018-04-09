import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  getShows(){
    return this.http.get('http://api.tvmaze.com/shows');
  }

  getSeasons(showid){
    return this.http.get('http://api.tvmaze.com/shows/' + showid + '/seasons');
  }

  getEpisodes(Seasonid){
    return this.http.get('http://api.tvmaze.com/seasons/' + Seasonid + '/episodes');
  }
}
