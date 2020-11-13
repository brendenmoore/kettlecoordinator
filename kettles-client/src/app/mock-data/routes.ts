import { Route } from '../models/route.model';
import { mockStores } from './stores';

export let mockRoutes: Route[] =  [
  {
    "id": 1,
    "name": "Blue",
    "color": 1,
    "stores": mockStores
  },
  {
    "id": 2,
    "name": "Red",
    "color": 2,
    "stores":[]
  }
];
