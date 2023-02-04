import { RowResponse } from "./Row";

export interface Template {
  id?: string;
  name: string;
  rows: RowResponse[];
}
