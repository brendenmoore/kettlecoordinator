import { User } from './user';

export class Ringer {
  id: number;
  userId: number;
  name: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  applicationUser: User;
  notes: string;

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
