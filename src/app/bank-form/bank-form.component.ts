import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BankService } from '../service/bank.service';
import { Subject } from 'rxjs';
import { Field } from '../model/bank-fields.interface';
import { EnumService } from '../service/enum.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.scss']
})
export class BankFormComponent implements OnInit {
  @Input()formFields$: Subject<Field[]> = new Subject();
  bankForm: FormGroup = this.fb.group({});

  constructor(
    private bankService: BankService,
    private fb: FormBuilder,
    public enumService: EnumService
  ) { }

  ngOnInit() {
    this.bankForm.disable();
    this.formFields$
      .subscribe(
        formFields => {
          this.refreshBankForm(formFields);
          console.log('formFields loaded', formFields);
        }
      );
  }

  refreshBankForm(formFields: Field[]) {
    this.bankForm = this.fb.group({})

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
    if (this.bankForm.disabled) {
      this.bankForm.enable();
    }
    console.log(this.bankForm.controls);
  }

  submitForm() {
    if (this.bankForm.errors) {
      return;
    } else {
      // do stuff
      window.alert('Submit bank form : ' + JSON.stringify(this.bankForm.value));
    }
  }
}
