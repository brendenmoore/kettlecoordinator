export class Ringer {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  notes: string;
  active: boolean;

  constructor(firstName: string, lastName: string, phoneNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.phoneNumber = phoneNumber;
    this.id = null;
    this.notes = '';
    this.active = true;
  }
}
