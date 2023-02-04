import React from 'react'
import { Link } from 'react-router-dom'
import { Template } from '../../types'
import { TemplateItem } from '../TemplateItem'

interface Props {
    templates: Template[]
}

export default function TemplateList({ templates }: Props) {

    const renderInformation = () => (
        <div className="flex  justify-center  m-10">
            <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className='pl-2'>Information!</span>
                    </p>

                    <div className="text-gray-900 font-bold text-xl mb-2 mt-2">There are no templates!</div>
                    <p className="text-gray-700 text-base">You must create the templates. You can use the 'New Template' button.</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="grid  rounded shadow-lg pl-5">
            {templates.length > 0 ?
                <div className='grid grid-cols-4 gap-4'>
                    {templates.map((template) => (
                        <div key={template.id} >
                            <Link to={`/template/${template.id}`}>
                                <TemplateItem template={template} />
                            </Link>
                        </div>
                    ))}
                </div>

                : renderInformation()}
        </div>
    )
}
