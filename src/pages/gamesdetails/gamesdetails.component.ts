import { Component, OnInit } from '@angular/core';
import { MmorpgService } from '../servies/mmorpg.service';
import { ActivatedRoute } from '@angular/router';
import { Gamesdata } from '../interface/gamesdata';

@Component({
  selector: 'app-gamesdetails',
  standalone: true,
  imports: [],
  templateUrl: './gamesdetails.component.html',
  styleUrl: './gamesdetails.component.css'
})
export class GamesdetailsComponent implements OnInit{
  constructor(private _MmorpgService:MmorpgService, private _ActivatedRoute:ActivatedRoute){}

  games!: Gamesdata;

  ngOnInit(): void {
    const gamesId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this._MmorpgService.gamesdetails(gamesId).subscribe({
      next: (data) => {
        console.log(data);
        this.games = data;
      }
    });
  }

  openGame(url: string): void {
    window.open(url, '_self');
  }
}
