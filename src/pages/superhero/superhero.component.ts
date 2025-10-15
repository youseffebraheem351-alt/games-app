import { Component, OnInit } from '@angular/core';
import { SuberheroService } from '../servies/suberhero.service';
import { Gamesdata } from '../interface/gamesdata';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-superhero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './superhero.component.html',
  styleUrl: './superhero.component.css'
})
export class SuperheroComponent implements OnInit{
constructor(private _SuberheroService:SuberheroService){}
superhero:Gamesdata[]=[]
ngOnInit(): void {
  this.getdata()
}

getdata():void{
  this._SuberheroService.subehero().subscribe({
    next:(data)=>{console.log(data);
      this.superhero=data

    }
  })
}

}
