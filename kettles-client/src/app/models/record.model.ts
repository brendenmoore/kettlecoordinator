import { Ringer } from './ringer';
import { Sheet } from './sheet.model';
import { Store } from './store.model';

export class Record {
  id: number;
  ringerId: number;
  sheetId: number;
  storeId: number;
  clockIn: string;
  clockOut: string;
  cash: string;
  coin: string;
  check: string;
}
