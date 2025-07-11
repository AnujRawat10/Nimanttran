import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Template1Layout from "./TemplateLayouts/Template1Layout"; // Adjust the import path as needed

const PreviewTemplate = () => {
  const { slug } = useParams();
  const [templateData, setTemplateData] = useState(null);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/templates/slug/${slug}`);
        setTemplateData(res.data);
      } catch (err) {
        console.error("Error fetching template:", err);
      }
    };
    fetchTemplate();
  }, [slug]);

  if (!templateData) return <div>Loading...</div>;

  return <Template1Layout data={templateData} />;
};

export default PreviewTemplate;
