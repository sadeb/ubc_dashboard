import { NgModule } from '@angular/core';
import { TrendComponent } from './trend.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NzIconModule, TrendComponent]
})
export class TrendModule { }
