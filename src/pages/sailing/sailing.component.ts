import { Component, OnInit } from '@angular/core';
import { SailingService } from '../servies/sailing.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sailing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sailing.component.html',
  styleUrl: './sailing.component.css'
})
export class SailingComponent {
constructor(private _SailingService:SailingService){}
sailingdata:Gamesdata[]=[]
ngOnInit(): void {
  this.sailindData()
}


sailindData():void{
  this._SailingService.getdata().subscribe({
    next:(data)=>{console.log(data);
      this.sailingdata=data

    }
  })
}
}
