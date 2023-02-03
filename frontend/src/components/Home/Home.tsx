import React, { useState } from "react";
import { useTemplate } from "../../hooks";
import { FormModal } from "../FormModal";
import { Loader } from '../Loader'
import { TemplateList } from '../TemplateList'

//const TemplateList = React.lazy(() => import('../TemplateList/TemplateList'))

export default function Home() {
  const { templates, setTemplates, loading } = useTemplate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container md mx-auto">
      {
        !loading ? (<>
          <TemplateList templates={templates} />
          <div className="grid place-items-center">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 m-5 border border-gray-200 rounded shadow"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              New Template
            </button>
            {modalOpen && <FormModal title={'Insert name'} setOpenModal={setModalOpen} templates={templates} setTemplates={setTemplates} />}
          </div>
        </>
        ) : <Loader />
      }

    </div>
  );
}


