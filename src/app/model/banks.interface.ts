import {AuthMeChanism} from '../enum/auth_mechanism.enum';

export interface Banks {
  banks: Bank[];
}

export interface Bank {
  sync_frequency?: number;
  code: string;
  available_auth_mechanisms: string[];
  name: string;
  auth_mechanism: AuthMeChanism;
  account_types: string[];
  color: string;
  id_weboob: string;
  capabilities: string[];
  slug: string;
  beta: boolean;
  months_to_fetch?: number;
  urls: string[];
  siret: string;
  hidden: boolean;
  id: number;
  categories: string[];
  charged: boolean;
}
