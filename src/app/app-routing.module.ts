import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterGuardService } from './services/core/router-guard.service';
// Choose layout component
// import { BackstageTopbannerComponent as BackstageLayoutComponent} from './layouts/backstage-topbanner/backstage-topbanner.component';
import { BackstageDefaultComponent as BackstageLayoutComponent } from './layouts/backstage-default/backstage-default.component';

const routes: Routes = [
  // Frontend module
  {
    path: 'frontstage',
    loadChildren: () => import('./pages/frontstage/frontstage.module').then(m => m.FrontStageModule),
  },
  // Account login, registration, password recovery, etc. pages
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
  },
  // Backend module
  {
    path: '',
    component: BackstageLayoutComponent,
    canActivate: [RouterGuardService],
    children: [
      { path: '', redirectTo: 'system/home', pathMatch: 'full' },
      {
        path: 'examples',
        loadChildren: () => import('./pages/backstage/examples/examples.module').then(m => m.ExamplesModule)
      },
      {
        path: 'system',
        loadChildren: () => import('./pages/backstage/system/system.module').then(m => m.SystemModule)
      },
      { path: 'exception', loadChildren: () => import('./pages/commons/exception/exception.module').then(m => m.ExceptionModule) },
    ]
  },
  // Exception
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
