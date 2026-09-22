import { ICustomer } from './ICustomer';

export interface ICustomerType {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: ICustomer[];
}