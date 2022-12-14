import { IShared } from './shared.model';
export interface IData extends IShared{
  smartphone:{
    year:string,
    hour:string
  },
  laptop:{
    year:string,
    house:string
  },
  desktop:{
    year:string,
    house:string
  },
  tablet:{
    year:string,
    house:string
  },
  year:{
    hour:string,
    min:string,
    second:string
  }
}
