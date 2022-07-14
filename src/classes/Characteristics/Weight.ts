export class Weight {
  inputUnits: string | undefined;
  inputKg: number | undefined;
  inputLbs: number | undefined;

  constructor() {}

  get kg() {
    return this.inputKg;
  }

  get weightInLbs() {
    return this.inputLbs
      ? this.inputLbs
      : this.inputKg
      ? Math.round(+(this.inputKg * 2.2))
      : undefined;
  }
}
