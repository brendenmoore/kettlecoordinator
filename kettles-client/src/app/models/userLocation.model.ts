import { Route } from './route.model';

export class UserLocation {
  id: number;
  route: Route;
  storeCode: string;
  averageEarnings: string;
  order: number;
  storeName: string;
  nickName: string;
  address: string;
  locationNotes: string;
  active: boolean;

  constructor(id, route, storeCode, averageEarnings, order, storeName, nickName, address, locationNotes, active){
    this.id = id;
    this.route = route;
    this.storeCode = storeCode;
    this.averageEarnings = averageEarnings;
    this.order = order;
    this.storeName = storeName;
    this.nickName = nickName;
    this.address = address;
    this.locationNotes = locationNotes;
    this.active = active;
  }
}
