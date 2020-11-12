import { Record } from './record.model';
import { Route } from './route.model';

export class Sheet {
  id: number;
  date: string;
  onCall: string;
  isCurrent: boolean;
  routes: Route[];
  records: Record[];
}
