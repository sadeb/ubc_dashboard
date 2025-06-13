import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.less'],
  imports: [CommonModule],
  // host: {
  //   '[class.trend]': 'true',
  //   '[class.trend__grey]': '!colorful',
  //   '[class.trend__reverse]': 'colorful && reverseColor',
  // },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendComponent {

  /** 上升下降标识 */
  @Input() flag: 'up' | 'down';
  /** 是否彩色标记 */
  @Input() colorful: boolean = true;
  /** 颜色反转 */
  @Input() reverseColor: boolean = false;

}
