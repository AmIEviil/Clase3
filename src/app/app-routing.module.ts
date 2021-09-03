import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejemplo1',
    loadChildren: () => import('./pages/ejemplo1/ejemplo1.module').then( m => m.Ejemplo1PageModule)
  },
  {
    path: 'ejemplo2/:valor',
    loadChildren: () => import('./pages/ejemplo2/ejemplo2.module').then( m => m.Ejemplo2PageModule)
  },
  {
    path: 'ejemplo3',
    loadChildren: () => import('./pages/ejemplo3/ejemplo3.module').then( m => m.Ejemplo3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
