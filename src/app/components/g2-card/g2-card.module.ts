import { NgModule } from '@angular/core';
import { G2CardComponent } from './g2-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NzCardModule, NzSpinModule, G2CardComponent]
})
export class G2CardModule { }
