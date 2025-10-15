import { Component, OnInit } from '@angular/core';
import { MmorpgService } from '../servies/mmorpg.service';
import { ShooterService } from '../servies/shooter.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shooter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shooter.component.html',
  styleUrl: './shooter.component.css'
})
export class ShooterComponent implements OnInit {
constructor(private _ShooterService:ShooterService){}
shooterdata:Gamesdata[]=[]

ngOnInit(): void {
  this.data()
}


data():void{
  this._ShooterService.getmmorg().subscribe({
    next:(data)=>{console.log(data);
      this.shooterdata=data
    }
  })
}

}
