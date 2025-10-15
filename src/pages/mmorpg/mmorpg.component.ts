import { Component, OnInit } from '@angular/core';
import { MmorpgService } from '../servies/mmorpg.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mmorpg',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mmorpg.component.html',
  styleUrl: './mmorpg.component.css'
})
export class MmorpgComponent implements OnInit{
constructor(private _MmorpgService:MmorpgService){}
gamesdata:Gamesdata[]=[]
ngOnInit(): void {
  this.getdata()
}



getdata():void{
this._MmorpgService.getmmorg().subscribe({
  next:(data:any)=>{
    console.log(data);
    this.gamesdata=data

    
  }
})
}
}
