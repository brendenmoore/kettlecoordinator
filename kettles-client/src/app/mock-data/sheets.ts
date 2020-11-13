import { Sheet } from '../models/sheet.model';
import { mockRecords } from './records';
import { mockRoutes } from './routes';

export let sheets: Sheet[] = [
  {
    id: 1,
    date: "November 11th, 2020",
    onCall: "Brenden",
    isCurrent: true,
    routes: [mockRoutes[0]],
    records: [mockRecords[0]]
  }
]
