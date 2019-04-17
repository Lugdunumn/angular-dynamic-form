import { NgModule } from '@angular/core';
import { BankListComponent } from './bank-list.component';
import { BankFormModule } from '../bank-form/bank-form.module';
import { BankListRoutingModule } from './bank-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BankListComponent],
  imports: [
    SharedModule,
    BankListRoutingModule,
    BankFormModule
  ],
  exports: [
  ]
})
export class BankListModule { }
