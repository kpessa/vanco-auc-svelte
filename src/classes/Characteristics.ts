import { Height } from './Characteristics/Height.js';
import { Weight } from './Characteristics/Weight.js';

export class Characteristics {
  age: number | undefined;
  ht: Height;
  wt: Weight;
  gender: string | undefined;
  constructor() {
    this.ht = new Height();
    this.wt = new Weight();
  }

  get bmi() {
    if (!this.tbw) return undefined;
    let bmi = this.tbw / this.ht.heightInMeters ** 2;
    return bmi % 1 ? +bmi.toFixed(1) : bmi;
  }

  get tbw() {
    return this.wt.kg;
  }

  get tbw_ibw() {
    if (!this.ibw) return undefined;
    return +(this.tbw / this.ibw).toFixed(2);
  }

  get abw() {
    if (!this.wt.kg) return undefined;
    let abw = this.ibw + 0.4 * (this.tbw - this.ibw);
    return abw % 1 ? +abw.toFixed(1) : abw;
  }

  get ibw() {
    if (this.gender === undefined) return undefined;
    let heightOver5ft = this.ht.heightInInches - 60;
    let ibw =
      this.gender === 'M'
        ? 50 + 2.3 * heightOver5ft
        : this.gender === 'F'
        ? 45.5 + 2.3 * heightOver5ft
        : undefined;
    return ibw % 1 ? +ibw.toFixed(1) : ibw;
  }

  get ageGender() {
    return this.age && this.gender
      ? `${this.age} ${this.gender}`
      : this.age
      ? this.age
      : this.gender
      ? this.gender
      : '';
  }
}
