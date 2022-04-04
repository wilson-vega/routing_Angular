import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SinopsisListComponent } from './sinopsis/sinopsis-list/sinopsis-list.component'

const routes: Routes = [

  {
    path: 'seriesList',
    component:SeriesListComponent
  },
  {
    path:'sinopsisList',
    component:SinopsisListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
