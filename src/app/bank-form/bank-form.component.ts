import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BankService } from '../service/bank.service';
import { Bank } from '../model/banks.interface';
import { Subject } from 'rxjs';
import { Field } from '../model/bank-fields.interface';
import { EnumService } from '../service/enum.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.scss']
})
export class BankFormComponent implements OnInit {
  bankForm: FormGroup = this.fb.group({});
  bankId: number = null;

  banksList$: Subject<Bank[]> = new Subject();
  formFields$: Subject<Field[]> = new Subject();

  constructor(
    private bankService: BankService,
    private fb: FormBuilder,
    public enumService: EnumService
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

    this.formFields$
      .subscribe(
        formFields => {
          this.refreshBankForm(formFields);
          console.log('formFields loaded', formFields);
        }
      );
  }

  refreshBankForm(formFields: Field[]) {
    this.bankForm.reset();
    for (const ff of formFields) {
      const validatorsFns: ValidatorFn[] = [];
      if (ff.regex) {
        validatorsFns.push(Validators.pattern(ff.regex));
      }
      if (ff.required) {
        validatorsFns.push(Validators.required);
      }
      this.bankForm.addControl(
        ff.name,
        this.fb.control(
          null,
          {validators: validatorsFns}
        )
      );
    }
    console.log(this.bankForm.controls);
  }

  getBankFieldsById(id: number) {
    this.bankService.getBankFieldsById(id)
      .pipe()
      .subscribe(
        fieldsList => {
          this.formFields$.next(fieldsList.fields);
        },
        err => {
          console.error('Erreur de récupération de données de la banque.');
        },
        () => {
        }
      );
  }

  onUserChangeBank() {
    console.log(this.bankId);
    this.getBankFieldsById(this.bankId);
  }

}
