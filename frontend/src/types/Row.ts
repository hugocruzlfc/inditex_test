import { Product } from "./Products";
import { Template } from "./Template";
export interface Row {
  id?: string;
  name: string;
  aesthetic: string;
  template: string;
  products: Product[]
}
export interface RowResponse {
  id: string;
  name: string;
  aesthetic: string;
  template?: Template;
  products: Product[]
}


export enum Aesthetic{
  LEFT = 'start',
  CENTER = 'center',
  RIGHT = 'end'
}
