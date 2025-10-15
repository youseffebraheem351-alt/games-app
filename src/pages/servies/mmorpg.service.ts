import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class MmorpgService {

  constructor(private _HttpClient:HttpClient) { }

  getmmorg():Observable<any>{

    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games? category=mmorpg",{
      headers:{
         'x-rapidapi-key': '9b2f0952f3msh2820849937d7f61p1e27f4jsn66d6fa70af7e',
         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
  }




  gamesdetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game? id=${id}`,{

        headers: {
    'x-rapidapi-key': '9b2f0952f3msh2820849937d7f61p1e27f4jsn66d6fa70af7e',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
    })

  }





}
