import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserDetailsModalComponent } from '../user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  constructor(private modal: NzModalService) {}

  public openModal(): void {
    this.modal.create({
      nzContent: UserDetailsModalComponent,
      nzWidth: window.innerWidth > 768 ? '400px' : '200px',
      nzStyle: { top: '20px' },
    });
  }
}
