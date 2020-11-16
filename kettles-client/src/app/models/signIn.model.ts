import { Ringer } from './ringer.model';

export class SignIn {
  ringer: Ringer;
  isSignedIn: boolean = true;
  isAssigned: boolean = false;
  notes: string = '';

  constructor(ringer: Ringer) {
    this.ringer = ringer;
  }
}
