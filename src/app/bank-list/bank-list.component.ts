import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Bank } from '../model/banks.interface';
import { BankService } from '../service/bank.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Field} from '../model/bank-fields.interface';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  bankListForm: FormGroup = this.fb.group({
    bankId: null
  });
  banksList$: Subject<Bank[]> = new Subject();
  @Output() sendFormFeildsEvt = new EventEmitter();

  constructor(
    private bankService: BankService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bankService.getBanks()
      .pipe()
      .subscribe(
        banksList => {
          this.banksList$.next(banksList.banks);
        },
        err => {
          console.error('Erreur de récupération des banques.');
        },
        () => {
        }
      );

    this.banksList$
      .subscribe(
        banksList => {
          console.log('banksList loaded');
        }
      );
  }

  getBankFieldsById(id: number) {
    this.bankService.getBankFieldsById(id)
      .pipe()
      .subscribe(
        fieldsList => {
          this.sendFormFields(fieldsList.fields);
        },
        err => {
          console.error('Erreur de récupération de données de la banque.');
        },
        () => {
        }
      );
  }

  sendFormFields(fields: Field[]) {
    this.sendFormFeildsEvt.emit(fields);
  }

  onUserChangeBank() {
    console.log(this.bankListForm.get('bankId').value);
    this.getBankFieldsById(this.bankListForm.get('bankId').value);
  }

}
