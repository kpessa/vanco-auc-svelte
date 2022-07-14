import { Identifiers } from './Identifiers.js';
import { Characteristics } from './Characteristics.js';

type Diagnosis = {
  diagnosis?: string | undefined;
  provider?: string | undefined;
};

export class Patient {
  id: Identifiers;
  chars: Characteristics;
  diag: Diagnosis;

  constructor() {
    this.diag = {};
    this.id = new Identifiers();
    this.chars = new Characteristics();

    this.diag.diagnosis = 'Cellulitis';
    this.diag.provider = 'Bush, Larry';

    this.id.mrn = '123345';
    this.id.last = 'Pessa';
    this.id.first = 'Kurt';
    this.id.service = '2NS2';
    this.id.room = '278';

    this.chars.age = 65;
    this.chars.ht.inputCm = 185;
    this.chars.wt.inputKg = 93;
    this.chars.gender = 'M';
  }
}
