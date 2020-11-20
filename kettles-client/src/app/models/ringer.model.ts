export class Ringer {
  id: number;
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
    this.id = Date.now();
    this.notes = '';
    this.active = true;
  }
}
