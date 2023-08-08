import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  UserOutline,
  ExportOutline,
  CustomerServiceOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
  CheckCircleOutline,
} from '@ant-design/icons-angular/icons';

const icons = [UserOutline, ExportOutline, CustomerServiceOutline, ArrowRightOutline, ArrowLeftOutline, CheckCircleOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
