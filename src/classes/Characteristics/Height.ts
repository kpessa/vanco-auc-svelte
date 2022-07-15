export class Height {
  inputUnits: string | undefined;
  inputCm: number | undefined;
  inputFt: number | undefined;
  inputIn: number | undefined;

  constructor() { }
  
  fromCmsToInches = cms => cms ? Math.round(cms / 2.54) : undefined
  fromCmsToFt = cms => cms ? Math.floor(this.fromCmsToInches(cms) / 12) : undefined
  fromCmsToRemainingInches = cms => cms ? this.fromCmsToInches(cms) % 12 : undefined

  get heightInMeters(): number | undefined { return this.cms / 100; }
  get cms() { return (this.inputCm) ? this.inputCm : undefined }
  get ft() { return this.fromCmsToFt(this.inputCm) }
  get inches() { return this.fromCmsToRemainingInches(this.inputCm) }
  get heightInFtInches() { return this.inputCm ? (this.ft === 0) ? `${this.inches} inches` : `${this.ft}'${this.inches}"` : undefined }
  get heightInInches() { return this.inputCm ? this.fromCmsToInches(this.inputCm) : undefined }

  toString() {
    return this.heightInFtInches;
  }
}
