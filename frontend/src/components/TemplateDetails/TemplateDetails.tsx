import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTemplate } from "../../hooks";
import { Loader } from "../Loader";
import { addRow } from "../../services";
import {
  Row,
  Aesthetic,
  Template,
  RowContextType,
  RowResponse,
} from "../../types";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RowContext } from "../../context";
import { reorder } from "../../utils";
import { ProductItem } from "../ProductItem";

export default function TemplateDetails() {
  const { id } = useParams();
  const { allRows, setAllRows, setTemplateParent } = useContext(
    RowContext
  ) as RowContextType;
  const { templates, loading } = useTemplate();
  const [inputOpen, setInputOpen] = useState(false);
  const [rows, setRows] = useState<RowResponse[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<Template>();
  const inputRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const templateFiltered = templates.filter((template) => template.id === id);
    if (templateFiltered[0]) {
      setCurrentTemplate(templateFiltered[0]);
      const renderRows = allRows.filter(
        (itemRow) => itemRow.template?.id === templateFiltered[0].id
      );
      setRows(renderRows);
      setTemplateParent(templateFiltered[0].id!);
    }
  }, [id, templates, allRows,setTemplateParent]);

  if (templates === null || rows === null) {
    return <></>;
  }

  const handleAddRow = () => {
    console.log(allRows)
    const newRow: Row = {
      name: `${currentTemplate?.name}_${rows.length +1}`,
      template: id!,
      aesthetic: inputRef.current!.value,
      products: [],
    };
    addRow(newRow).then((response) => {
      setRows(rows =>[...rows, response])
    });
    setInputOpen(false);
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setRows((prevRows) =>
          reorder(prevRows, source.index, destination.index)
        );
      }}
    >
      <div className="container md mx-auto">
        <div className="grid place-items-center grid-cols-1 pl-5 rounded overflow-hidden shadow-lg">
          {!loading ? (
            <>
              <h2>{currentTemplate?.name}</h2>
              <button
                onClick={() => setInputOpen(true)}
                className="w-32 bg-white m-5 hover:bg-gray-100 text-gray-800 font-semibold  rounded shadow"
              >
                Add row
              </button>
              {inputOpen && (
                <div className="inline-block relative w-64 mb-5">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-100 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    ref={inputRef}
                    onChange={handleAddRow}
                  >
                    <option>Select aesthetic</option>
                    <option value={Aesthetic.LEFT}>Start</option>
                    <option value={Aesthetic.CENTER}>Center</option>
                    <option value={Aesthetic.RIGHT}>End</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* <TransformWrapper
                initialScale={1}
                initialPositionX={10}
							  initialPositionY={10}
							  
              >
                {({ zoomIn, zoomOut, resetTransform }: any) => (
                  <>
                    <div className="flex gap-3 justify-end">
                      <span>Zoom</span>
                      <button
                        className="hover:bg-gray-100 rounded"
                        onClick={() => zoomIn()}
                      >
                        <svg
                          fill="#000000"
                          width="20px"
                          height="20px"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.64 4.33H7.39v3.05H4.34v1.25h3.05v3.05h1.25V8.63h3.05V7.38H8.64V4.33z" />
                          <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z" />
                        </svg>
                      </button>
                      <button
                        className="hover:bg-gray-100 rounded"
                        onClick={() => zoomOut()}
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z"
                            fill="#000000"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                            fill="#000000"
                          />
                        </svg>
                      </button>
                      <button
                        className="hover:bg-gray-100 rounded"
                        onClick={() => resetTransform()}
                      >
                        <svg
                          fill="#000000"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,23A11,11,0,1,0,1,12,11.013,11.013,0,0,0,12,23ZM12,3a9,9,0,1,1-9,9A9.01,9.01,0,0,1,12,3ZM8.293,14.293,10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12l2.293,2.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414Z" />
                        </svg>
                      </button>
                    </div>
                    <TransformComponent> */}
              {rows.length > 0 ? (
                <Droppable droppableId="rows">
                  {(droppableProvider) => (
                    <ul
                      className="w-11/12  m-2 p-2 grid"
                      {...droppableProvider.droppableProps}
                      ref={droppableProvider.innerRef}
                    >
                      {rows.map((row, index) => (
                        <Draggable
                          key={row.id}
                          draggableId={row.id!}
                          index={index}
                        >
                          {(draggableProvided) => (
                            <>
                              <p className="pl-2 pt-4">Row: {row.name} &nbsp;
                                aesthetic: {row.aesthetic}</p>
                            <li
                              {...draggableProvided.draggableProps}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.dragHandleProps}
                                className={`justify-${row.aesthetic} border-blue-300 w-11/12 h-52 shadow flex gap-80 pl-10"`}
                                onClick={() => navigate(`/dnd/${row.id}`)}
                              
                            >
                                {row.products?.map((product) => (
                                
                                    <ProductItem
                                      key={product.id}
                                    product={product}
                                    />
                                ))}
                              </li>
                              </>
                          )}
                        </Draggable>
                      ))}
                      {droppableProvider.placeholder}
                    </ul>
                  )}
                </Droppable>
              ) : null}
              {/* </TransformComponent>
                  </>
                )}
              </TransformWrapper> */}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </DragDropContext>
  );
}
