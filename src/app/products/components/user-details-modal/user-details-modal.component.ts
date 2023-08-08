import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsModalComponent implements OnInit {
  public userForm: FormGroup = new FormGroup('');

  constructor(private modal: NzModalRef) {}

  public ngOnInit(): void {
    this.userForm = new FormGroup({
      contact: new FormControl(''),
      phoneNumber: new FormControl(),
      homePhone: new FormControl(),
      internalNumber: new FormControl(),
    });
  }

  public saveUserDetails(): void {
    // here should be implemented a method connected with api to save passed by user data
    this.modal.close();
  }

  public closeModal(): void {
    this.modal.close();
  }
}
