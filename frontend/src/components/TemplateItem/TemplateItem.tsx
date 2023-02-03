import { Template } from "../../types";

interface Props {
  template: Template
}

export default function TemplateItem({ template }: Props) {


  return (
    <div className="m-5 mb-5">
      <div className="flex flex-wrap gap-5">
        <p>{template.name}</p>
      </div>
    </div>
  );
}
