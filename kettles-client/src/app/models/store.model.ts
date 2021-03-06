import { Ringer } from './ringer.model';

export class Store {
  id: number;
  name: string;
  address: string;
  symbol: string;
  index: number;
  ringer?: Ringer;
}
