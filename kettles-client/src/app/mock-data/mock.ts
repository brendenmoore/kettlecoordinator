import { Ringer } from '../models/ringer.model';
import { Route } from '../models/route.model';
import { Sheet } from '../models/sheet.model';
import { UserLocation } from '../models/userLocation.model';
import { mockRingers } from './ringers';

class MockData {
  ringers: Ringer[] = [...mockRingers];
  routes: Route[] = [
    {
      id: 1,
      name: "Blue route",
      color: 1,
      active: true
    }
  ]
  userLocations: UserLocation[] = [
    {
      id: 1,
      storeName: "Walmart",
      address: "123 Cherry Tree Lane",
      storeCode: "B1",
      order: 1,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "New Walmart",
      locationNotes: 'here are some other notes',
      active: true
    },
    {
      id: 2,
      storeName: "Publix",
      address: "Another Address",
      storeCode: "B2",
      order: 2,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "Old Publix",
      locationNotes: 'here are some notes',
      active: true
    },
    {
      id: 3,
      storeName: "Walmart",
      address: "address test here",
      storeCode: "B3",
      order: 3,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "New Walmart",
      locationNotes: '',
      active: true

    },
    {
      id: 4,
      storeName: "Walmart",
      address: "address test here",
      storeCode: "B4",
      order: 3,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "New Walmart",
      locationNotes: '',
      active: true

    },
    {
      id: 5,
      storeName: "Walmart",
      address: "address test here",
      storeCode: "B5",
      order: 3,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "New Walmart",
      locationNotes: '',
      active: true

    },
    {
      id: 6,
      storeName: "Walmart",
      address: "address test here",
      storeCode: "B6",
      order: 3,
      route: this.routes[0],
      averageEarnings: '',
      nickName: "New Walmart",
      locationNotes: '',
      active: true
    },
  ];
  sheets: Sheet[] = [
    {
      id: 1,
      date: "November 21st",
      active: true,
      signIns: [],
      sheetLocations: [
        {
          id: 1,
          storeName: "Walmart",
          address: "123 Cherry Tree Lane",
          storeCode: "B1",
          order: 1,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "New Walmart",
          locationNotes: 'here are some other notes',
          active: false,
          ringerType: '',
          signIn: null,
          sheetNotes: ''
        },
        {
          id: 2,
          storeName: "Publix",
          address: "Another Address",
          storeCode: "B2",
          order: 2,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "Old Publix",
          locationNotes: 'here are some notes',
          active: true,
          ringerType: '',
          signIn: null,
          sheetNotes: ''
        },
        {
          id: 3,
          storeName: "Walmart",
          address: "address test here",
          storeCode: "B3",
          order: 3,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "New Walmart",
          locationNotes: '',
          active: true,
          ringerType: '',
          signIn: null,
          sheetNotes: ''

        },
        {
          id: 4,
          storeName: "Walmart",
          address: "address test here",
          storeCode: "B4",
          order: 3,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "New Walmart",
          locationNotes: '',
          active: true,
          ringerType: '',
          signIn: null,
          sheetNotes: ''

        },
        {
          id: 5,
          storeName: "Walmart",
          address: "address test here",
          storeCode: "B5",
          order: 3,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "New Walmart",
          locationNotes: '',
          active: true,
          ringerType: '',
          signIn: null,
          sheetNotes: ''

        },
        {
          id: 6,
          storeName: "Walmart",
          address: "address test here",
          storeCode: "B6",
          order: 3,
          route: this.routes[0],
          averageEarnings: '',
          nickName: "New Walmart",
          locationNotes: '',
          active: true,
          ringerType: '',
          signIn: null,
          sheetNotes: ''
        },
      ],
      onCall: 'brenden'
    }
  ]
}

export const MOCK_USER_DATA = new MockData();
