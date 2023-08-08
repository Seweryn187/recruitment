import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

export const MODULES = [
  NzLayoutModule,
  NzButtonModule,
  NzCollapseModule,
  NzResultModule,
  NzIconModule,
  NzGridModule,
  NzMenuModule,
  NzBadgeModule,
  NzCardModule,
  NzModalModule,
  NzRadioModule,
  NzInputModule,
  NzInputNumberModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [],
  exports: [...MODULES],
})
export class AntDesignModule {}
