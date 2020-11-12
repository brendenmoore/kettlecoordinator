import { Sheet } from '../models/sheet.model';
import { records } from './records';
import { routes } from './routes';

export let sheets: Sheet[] = [
  {
    id: 1,
    date: "November 11th, 2020",
    onCall: "Brenden",
    isCurrent: true,
    routes: [routes[0]],
    records: [records[0]]
  }
]
