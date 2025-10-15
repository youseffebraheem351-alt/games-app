import { Component, OnInit } from '@angular/core';
import { PixelService } from '../servies/pixel.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pixel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pixel.component.html',
  styleUrl: './pixel.component.css'
})
export class PixelComponent implements OnInit{
constructor(private _PixelService:PixelService){}
pixel:Gamesdata[]=[]

ngOnInit(): void {
  this.getdat()
}

getdat():void{
  this._PixelService.pixel().subscribe({
    next:(data)=>{console.log(data);
      this.pixel=data

    }
  })
}

}
