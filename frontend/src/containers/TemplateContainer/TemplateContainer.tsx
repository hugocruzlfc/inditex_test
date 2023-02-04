import React, { useState } from "react";
import { useTemplate } from "../../hooks";
import { FormModal } from "../../components/FormModal";
import { Loader } from '../../components/Loader'
import { TemplateList } from '../../components/TemplateList'

//const TemplateList = React.lazy(() => import('../TemplateList/TemplateList'))

export default function TemplateContainer() {
  const { templates, setTemplates, loading } = useTemplate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container md mx-auto">
      {
        !loading ? (<>
         
          <div className="grid place-items-center">
            <button
              id="add-template"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 m-5 border border-gray-200 rounded shadow"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              New Template
            </button>
            {modalOpen && <FormModal title={'Insert name'} setOpenModal={setModalOpen} templates={templates} setTemplates={setTemplates} />}
          </div>
          <TemplateList templates={templates} />
        </>
        ) : <Loader />
      }

    </div>
  );
}


