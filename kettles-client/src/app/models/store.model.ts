import { Ringer } from './ringer';

export class Store {
  id: number;
  name: string;
  address: string;
  symbol: string;
  index: number;
  ringer?: Ringer;
}
