export interface Row {
  id?: string;
  name: string;
  aesthetic: string;
  template: string;
}


export enum Aesthetic{
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}
