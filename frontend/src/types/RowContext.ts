import { RowResponse} from "./Row";

  export type RowContextType = {
    allRows: RowResponse[];
    templateParent: string;
    setTemplateParent: (templateId: string) => void;
    setAllRows: (rows: RowResponse[]) => void;
  };