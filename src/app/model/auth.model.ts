import { IShared } from './shared.model';
import { IResponse } from './res.model';
export interface IAuth extends IShared{
  username: string,
  password: string,
  token:string
}

export interface IRoles extends IAuth{
  roles:string[]
}
