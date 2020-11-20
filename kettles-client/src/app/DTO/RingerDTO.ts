export class RingerDTO {
  firstName: string;
  lastName: string;
  phoneNumber: string;

  constructor(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
