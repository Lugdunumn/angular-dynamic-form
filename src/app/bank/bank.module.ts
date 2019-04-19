import { NgModule } from '@angular/core';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { SharedModule } from '../shared/shared.module';
import {BankFormModule} from '../bank-form/bank-form.module';
import {BankListModule} from '../bank-list/bank-list.module';

@NgModule({
  declarations: [BankComponent],
  imports: [
    SharedModule,
    BankRoutingModule,
    BankFormModule,
    BankListModule
  ]
})
export class BankModule { }
