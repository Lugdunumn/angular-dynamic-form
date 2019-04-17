export interface BankFields {
  fields: Field[];
}

export interface Field {
  regex: string;
  name: string;
  required: boolean;
  label: string;
  values: Value[];
  type: string;
}

export interface Value {
  value: string;
  label: string;
}
