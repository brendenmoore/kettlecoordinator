import { MOCK_USER_DATA } from '../mock-data/mock';
import { SheetLocation } from './sheetLocation.model';
import { SignIn } from './signIn.model';

export class Sheet {
  id: number;
  date: string;
  onCall: string = '';
  active: boolean;
  signIns: SignIn[] = [];
  sheetLocations: SheetLocation[];

  constructor(id: number, date: string) {
    this.id = id;
    this.date = date;
    this.active = true;
    this.sheetLocations = MOCK_USER_DATA.userLocations.map(location => {
      return new SheetLocation(location);
    });
  }
}
