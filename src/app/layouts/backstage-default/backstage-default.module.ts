import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackstageDefaultComponent } from './backstage-default.component';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { SidebarComponent } from './sidebar/sidebar.component'
import { ReuseTabComponent } from './reuse-tab/reuse-tab.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    BackstageDefaultComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ReuseTabComponent
  ],
  exports: [BackstageDefaultComponent]
})
export class BackstageDefaultModule { }
