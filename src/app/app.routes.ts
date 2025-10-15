
import { Routes } from '@angular/router';
import { MmorpgComponent } from '../pages/mmorpg/mmorpg.component';
import { ShooterComponent } from '../pages/shooter/shooter.component';
import { SailingComponent } from '../pages/sailing/sailing.component';
import { PermadeathComponent } from '../pages/permadeath/permadeath.component';
import { SuperheroComponent } from '../pages/superhero/superhero.component';
import { PixelComponent } from '../pages/pixel/pixel.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';
import { GamesdetailsComponent } from '../pages/gamesdetails/gamesdetails.component';






export const routes: Routes = [

  {path:'' , redirectTo:'mmorpg' , pathMatch:"full"},
  {path:"mmorpg" , component:MmorpgComponent, title:"Home"},
  {path:"shooter" , component:ShooterComponent, title:"Home"},
  {path:"sailing" , component:SailingComponent, title:"Home"},
  {path:"permadeath" , component:PermadeathComponent, title:"Home"},
  {path:"superhero" , component:SuperheroComponent, title:"Home"},
  {path:"pixel" , component:PixelComponent, title:"Home"},
  {path:"gamesdetails/:id" , component:GamesdetailsComponent, title:"Gamesdetails"},
  {path:"**" , component:NotfoundComponent, title:"error404"}
 



];
