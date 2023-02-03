import { Row } from "./Row";

export interface Template {
  id?: string;
  name: string;
  rows: Row[];
}
