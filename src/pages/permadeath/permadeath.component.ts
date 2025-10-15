import { Component, OnInit } from '@angular/core';
import { PermadeathService } from '../servies/permadeath.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-permadeath',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './permadeath.component.html',
  styleUrl: './permadeath.component.css'
})
export class PermadeathComponent implements OnInit{
constructor(private _PermadeathService:PermadeathService){}
permdata:Gamesdata[]=[]

ngOnInit(): void {
  this.getdata()
}

getdata():void{
  this._PermadeathService.permadeath().subscribe({
    next:(data)=>{console.log(data);
      this.permdata=data
    }
  })
}
}
