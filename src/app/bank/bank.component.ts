import {Component, OnDestroy, OnInit} from '@angular/core';
import { Field } from '../model/bank-fields.interface';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit, OnDestroy {
  formFields$: Subject<Field[]> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  updateFormFeilds(fields: Field[]) {
    this.formFields$.next(fields);
  }

  ngOnDestroy(): void {
    this.formFields$.next();
    this.formFields$.complete();
  }

}
