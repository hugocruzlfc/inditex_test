import React, { createContext, useState, useEffect } from "react";
import {  RowResponse } from "../types";
import { getRows } from "../services";
import { RowContextType } from "../types";


const INITIAL_ROW= [{
  id: '1',
  name: 'Row_1',
  aesthetic: 'center',
  products:[]
  }]




export const RowContext = createContext<RowContextType | null>(null);


interface Props{
    children: React.ReactNode
}



export const RowContextProvider = ({ children }: Props) => {
    const [allRows, setAllRows] = useState<RowResponse[]>(INITIAL_ROW);
    const [templateParent, setTemplateParent] = useState<string>('');

  useEffect(() => {
    getRows().then((response) => {
      setAllRows(response);
      });
  }, []);


  return (
    <RowContext.Provider
      value={{allRows, setAllRows,templateParent, setTemplateParent}}
    >
      {children}
    </RowContext.Provider>
  );
};
