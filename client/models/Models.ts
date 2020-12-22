export enum TransportationType {
  CarRider = -1,
  Walker,
  Bus1,
  Bus2,
  Bus3,
}


export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  imageURL: string;
  AM_Route: TransportationType;
  PM_Route: TransportationType;
}

