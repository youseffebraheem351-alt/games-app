import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermadeathService {

  constructor(private _HttpClient:HttpClient) { }



  permadeath():Observable<any>{
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath",{
       headers:{
        'x-rapidapi-key': '9b2f0952f3msh2820849937d7f61p1e27f4jsn66d6fa70af7e',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
     }
    })
  }
}
