// DynamicTemplate.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Template1Layout from "../pages/TemplateLayouts/Template1Layout";
// import Template2Layout from "../pages/TemplateLayouts/Template2Layout";
// import Template3Layout from "../pages/TemplateLayouts/Template3Layout";

const DynamicTemplate = () => {
  const { slug } = useParams();
  const [templateData, setTemplateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/templates/slug/${slug}`); // ✅ fixed double slash
        setTemplateData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Unable to load template.");
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error || !templateData) return <div>{error || "Template not found"}</div>;

  //  Render layout by templateType
  switch (templateData.templateType) {
    case "template1":
      return <Template1Layout data={templateData} />;
    // case "template2":
    //   return <Template2Layout data={templateData} />;
    // case "template3":
    //   return <Template3Layout data={templateData} />;
    default:
      return <div>No matching template type found</div>;
  }
};

export default DynamicTemplate;
