import { Injectable } from '@angular/core';
import {HttpRequestService} from './http-request.service';
import {environment} from '../../environments/environment';
import {Banks} from '../model/banks.interface';
import {BankFields} from '../model/bank-fields.interface';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private http: HttpRequestService
  ) { }

  getBanks() {
    return this.http.get<Banks>(environment.rootUrl + environment.version + '/' + environment.banksUri);
  }

  getBankFieldsById(id: number) {
    return this.http.get<BankFields>(environment.rootUrl + environment.version + '/' + environment.banksUri + `/${id}/fields`);
  }
}
