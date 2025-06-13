import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { TrendModule } from './trend/trend.module';
import { G2CardModule } from './g2-card/g2-card.module';
import { G2MiniAreaModule } from './g2-mini-area/g2-mini-area.module';
import { G2MiniBarModule } from './g2-mini-bar/g2-mini-bar.module';
import { G2MiniProgressModule } from './g2-mini-progress/g2-mini-progress.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TrendModule,
    G2CardModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
  ],
  exports: [TrendModule, G2CardModule, G2MiniAreaModule, G2MiniBarModule, G2MiniProgressModule],
})
export class ComponentCoreModule {}
