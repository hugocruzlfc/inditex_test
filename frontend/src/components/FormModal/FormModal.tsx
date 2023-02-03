import React, { useRef } from "react";
import { addTemplate } from "../../services";
import { Template } from "../../types";
import "./FormModal.css";

interface Props {
  title: string;
  templates: Template[];
  setOpenModal: (value: boolean) => void;
  setTemplates: (templatesArray: Template[]) => void
}
export default function FormModal({ title, templates, setOpenModal, setTemplates }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current!.value;
    addTemplate(value).then((response) => setTemplates([...templates, response]))
    inputRef.current!.value = "";
    setOpenModal(false)
  };
  return (
    <div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="body">
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref={inputRef} />
            </div>
          </div>
          <div className="footer">
            <button
              className="bg-red-400 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 
              m-5 border border-gray-200 rounded shadow"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3  border border-gray-200 rounded shadow" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

