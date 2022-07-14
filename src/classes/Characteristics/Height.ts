export class Height {
  inputUnits: string | undefined;
  inputCm: number | undefined;
  inputFt: number | undefined;
  inputIn: number | undefined;

  constructor() {}

  get heightInMeters() {
    return this.heightInCm / 100;
  }

  get heightInCm() {
    if (this.inputUnits === 'cm') return +this.inputCm;
    return +this.inputCm * 2.54;
  }

  get heightInInches() {
    if (this.inputFt === undefined || this.inputIn === undefined)
      return undefined;
    return this.inputFt * 12 + this.inputIn;
  }

  get cms() {
    if (this.inputCm !== undefined) return this.inputCm;
    return undefined;
  }

  get ft() {
    if (this.inputFt !== undefined) return +this.inputFt;
    return undefined;
  }

  get inches() {
    if (this.inputIn !== undefined) return +this.inputIn;
    return undefined;
  }

  get heightInFtInches() {
    // case1 - ft & inches not empty
    if (this.inches === undefined) return undefined;
    if (this.ft === 0) return `${this.inches} inches`;
    return `${this.ft}'${this.inches}"`;
  }

  toString() {
    return this.heightInFtInches;
  }
}
