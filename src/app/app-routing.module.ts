import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail',      component: DetailComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
