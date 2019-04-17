import { NgModule } from '@angular/core';
import { BankFormComponent } from './bank-form.component';
import { BankService } from '../service/bank.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [BankFormComponent],
  imports: [
    SharedModule
  ],
  exports: [
    BankFormComponent,
  ],
  providers: [
    BankService
  ]
})
export class BankFormModule { }
