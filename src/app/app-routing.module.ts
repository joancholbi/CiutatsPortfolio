import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AboutComponent } from './components/pages/about/about.component'
import { BusquedaComponent } from './components/pages/busqueda/busqueda.component';
import { ItemComponent } from './components/pages/item/item.component'
import { PorfolioComponent } from './components/pages/porfolio/porfolio.component'

const routes: Routes = [
  {path:'porfolio', component: PorfolioComponent},
  {path:'about', component: AboutComponent},
  {path:'item/:cod', component: ItemComponent},
  {path:'buscar/:textoBusq', component: BusquedaComponent},
  {path:'**', component: PorfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
