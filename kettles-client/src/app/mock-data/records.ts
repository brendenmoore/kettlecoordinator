import { Record } from '../models/record.model';
import { sheets } from './sheets';
import { stores } from './stores';

export let records: Record[] = [
  {
    id: 1,
    ringerId: 1,
    sheetId: 1,
    storeId: 1,
    clockIn: "",
    clockOut: "",
    cash: "",
    coin: "",
    check: ""
  }
]
