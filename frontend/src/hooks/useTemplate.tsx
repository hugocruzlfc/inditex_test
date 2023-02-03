import { useState, useEffect } from "react";
import { Template } from "../types";
import { getTemplates } from "../services";

export default function useTemplate() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    setLoading(true)
    handleGetTemplates()
  }, []);

  const handleGetTemplates = () => getTemplates().then((response) => {
    setTemplates(response);
    setLoading(false)
  });



  return { templates, setTemplates, loading };
}
