import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecideComponent } from './pages/decide/decide.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'decide',
    component: DecideComponent,
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
