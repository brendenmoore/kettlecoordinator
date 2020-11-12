import { Route } from '../models/route.model';
import { stores } from './stores';

export let routes: Route[] =  [
  {
    "id": 1,
    "name": "Blue",
    "color": 1,
    "stores": [stores[0], stores[1]]
  },
  {
    "id": 2,
    "name": "Red",
    "color": 2,
    "stores":[]
  }
];
