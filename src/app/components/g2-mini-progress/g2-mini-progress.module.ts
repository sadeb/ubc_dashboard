import { NgModule } from '@angular/core';
import { G2MiniProgressComponent } from './g2-mini-progress.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NzToolTipModule, G2MiniProgressComponent]
})
export class G2MiniProgressModule { }
