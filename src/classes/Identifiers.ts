export class Identifiers {
  mrn: string | undefined;
  last: string | undefined;
  first: string | undefined;
  service: string | undefined;
  room: string | undefined;
  constructor() {}

  get name() {
    return !this.last && !this.first
      ? ''
      : !this.last
      ? this.first
      : !this.first
      ? this.last
      : this.last + ', ' + this.first;
  }

  get location() {
    return !this.service ? this.room : this.service + '-' + this.room;
  }
}
