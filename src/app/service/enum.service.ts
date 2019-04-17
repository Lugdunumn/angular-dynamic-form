import { Injectable } from '@angular/core';
import { AuthMeChanism } from '../enum/auth_mechanism.enum';
import { FormType } from '../enum/form-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EnumService {
  public AuthMechanism = AuthMeChanism;
  public FormType = FormType;
}
