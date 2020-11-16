import { Ringer } from './ringer.model';
import { UserLocation } from './userLocation.model'

export class SheetLocation extends UserLocation {
  ringerType: string = '';
  ringer: Ringer = null;
  clockIn?: string;
  clockOut?: string;
  earnings?: string;
  sheetNotes: string ='';

  constructor(userLocation: UserLocation){
    super(userLocation.id, userLocation.route, userLocation.storeCode, userLocation.averageEarnings, userLocation.order, userLocation.storeName, userLocation.nickName, userLocation.address, userLocation.locationNotes, userLocation.active, );
  }
}
