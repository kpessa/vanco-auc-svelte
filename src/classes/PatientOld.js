export class Patient {
  constructor(){
    this.MRN = "12345"
    this.lastName = "Pessa"
    this.firstName = "Kurt"
    this.service = '2NS'
    this.room = '278'
    this._height = '175'
    this._heightUnits = 'cm'
    this._weight = '70'
    this._weightUnit = 'kg'
  }
  
  get name() {
    if (this.lastName === '' && this.firstName === '') return ''
    if (this.lastName === '') return this.firstName
    if (this.firstName === '') return this.lastName
    return this.lastName + ", " + this.firstName
  }
  
  get location() {
    if (this.service === '') return this.room
    return this.service + "-" + this.room
  }

  get heightInFtAndInches() {
    if (this._height === '') return ''
    let ft = Math.floor(this.heightInInches / 12)
    let inches = Math.round(this.heightInInches % 12)
    return `${ft}'${inches}"`
  }

  get heightInInches() {
    if (this._heightUnit === 'in') return this._height;
    return this._height / 2.54;
  }

  get heightInCms() {
    if (this._heightUnit === 'cm') return this._height;
    return this._height * 2.54;
  }
}
