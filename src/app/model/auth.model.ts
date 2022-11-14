import { IResponse } from './res.model';
export interface IAuth{
  username: string,
  password: string
}

export interface IRoles extends IAuth{
  roles:string[]
}
