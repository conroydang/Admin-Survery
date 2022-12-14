import { IShared } from './shared.model';
export interface IUsers extends IShared{
  readonly username: string ,
  readonly password:string,
  readonly name:string,
  readonly email:string,
}
