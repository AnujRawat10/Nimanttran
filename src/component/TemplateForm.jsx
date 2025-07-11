// TemplateForm.jsx
import React, { useState } from "react";
import axios from "axios";
import "./TemplateForm.css";

const TemplateForm = () => {
  const [formData, setFormData] = useState({
    templateType: "template1", // NEW: dropdown value
    groomName: "",
    brideName: "",
    coupleIntro: "",
    weddingDate: "",
    venue: "",
    mapLink: "",
    groomQuote: "",
    brideQuote: "",
    quoteText: "",
    hashtag: "",
    rsvp: [""],
    ceremonies: [{ name: "", date: "", time: "", venue: "" }],
  });

  const [galleryImages, setGalleryImages] = useState([]);
  const [couplePhotos, setCouplePhotos] = useState([]);
  const [musicFile, setMusicFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGalleryUpload = (e) => {
    setGalleryImages([...e.target.files]);
  };

  const handleCoupleUpload = (e) => {
    setCouplePhotos([...e.target.files]);
  };

  const handleMusicUpload = (e) => {
    setMusicFile(e.target.files[0]);
  };

  const handleRSVPChange = (index, value) => {
    const updatedRSVP = [...formData.rsvp];
    updatedRSVP[index] = value;
    setFormData({ ...formData, rsvp: updatedRSVP });
  };

  const addRSVP = () => {
    setFormData({ ...formData, rsvp: [...formData.rsvp, ""] });
  };

  const removeRSVP = (index) => {
    const updatedRSVP = formData.rsvp.filter((_, i) => i !== index);
    setFormData({ ...formData, rsvp: updatedRSVP });
  };

  const handleCeremonyChange = (index, field, value) => {
    const updatedCeremonies = [...formData.ceremonies];
    updatedCeremonies[index][field] = value;
    setFormData({ ...formData, ceremonies: updatedCeremonies });
  };

  const addCeremony = () => {
    setFormData({
      ...formData,
      ceremonies: [...formData.ceremonies, { name: "", date: "", time: "", venue: "" }],
    });
  };

  const removeCeremony = (index) => {
    const updatedCeremonies = formData.ceremonies.filter((_, i) => i !== index);
    setFormData({ ...formData, ceremonies: updatedCeremonies });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.groomName || !formData.brideName || !formData.weddingDate) {
    alert("Please fill all required fields");
    return;
  }

  const submitData = new FormData();
  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      submitData.append(key, JSON.stringify(formData[key]));
    } else {
      submitData.append(key, formData[key]);
    }
  }

  galleryImages.forEach((img) => submitData.append("galleryImages", img));
  couplePhotos.forEach((img) => submitData.append("couplePhotos", img));
  if (musicFile) submitData.append("musicFile", musicFile);

  try {
    const res = await axios.post("http://localhost:5000/api/templates", submitData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // ✅ Redirect using returned slug
    const slug = res.data.slug;
    alert("Submitted successfully! Redirecting to preview...");
    window.location.href = `/preview/${slug}`;
  } catch (error) {
    console.error("Submission failed:", error);
    alert("Failed to submit. Check console for details.");
  }
};


  return (
    <form className="template-form" onSubmit={handleSubmit}>
      <h2>Submit Your Wedding Invitation</h2>

      {/* Template Type Dropdown */}
      <label>Select Template Type</label>
      <select
        name="templateType"
        value={formData.templateType}
        onChange={handleInputChange}
        required
      >
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        <option value="template3">Template 3</option>
      </select>

      <input type="text" name="groomName" placeholder="Groom's Name" value={formData.groomName} onChange={handleInputChange} required />
      <input type="text" name="brideName" placeholder="Bride's Name" value={formData.brideName} onChange={handleInputChange} required />
      <textarea name="coupleIntro" placeholder="Couple's Intro" value={formData.coupleIntro} onChange={handleInputChange} />
      <input type="date" name="weddingDate" value={formData.weddingDate} onChange={handleInputChange} required />
      <input type="text" name="venue" placeholder="Wedding Venue" value={formData.venue} onChange={handleInputChange} />
      <input type="url" name="mapLink" placeholder="Google Map Link" value={formData.mapLink} onChange={handleInputChange} />
      <input type="text" name="groomQuote" placeholder="Groom's Quote" value={formData.groomQuote} onChange={handleInputChange} />
      <input type="text" name="brideQuote" placeholder="Bride's Quote" value={formData.brideQuote} onChange={handleInputChange} />
      <input type="text" name="quoteText" placeholder="Central Quote" value={formData.quoteText} onChange={handleInputChange} />
      <input type="text" name="hashtag" placeholder="Wedding Hashtag" value={formData.hashtag} onChange={handleInputChange} />

      <label>Upload Couple Photos</label>
      <input type="file" multiple onChange={handleCoupleUpload} />

      <label>Upload Gallery Images</label>
      <input type="file" multiple onChange={handleGalleryUpload} />

      <label>Upload Music</label>
      <input type="file" onChange={handleMusicUpload} />

      <div className="dynamic-group">
        <h3>RSVP</h3>
        {formData.rsvp.map((name, index) => (
          <div key={index} className="input-row">
            <input type="text" placeholder={`RSVP ${index + 1}`} value={name} onChange={(e) => handleRSVPChange(index, e.target.value)} />
            <button type="button" className="remove-btn" onClick={() => removeRSVP(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addRSVP}>Add RSVP</button>
      </div>

      <div className="dynamic-group">
        <h3>Ceremonies</h3>
        {formData.ceremonies.map((ceremony, index) => (
          <div key={index} className="input-row">
            <input type="text" placeholder="Event Name" value={ceremony.name} onChange={(e) => handleCeremonyChange(index, "name", e.target.value)} />
            <input type="date" value={ceremony.date} onChange={(e) => handleCeremonyChange(index, "date", e.target.value)} />
            <input type="time" value={ceremony.time} onChange={(e) => handleCeremonyChange(index, "time", e.target.value)} />
            <input type="text" placeholder="Venue" value={ceremony.venue} onChange={(e) => handleCeremonyChange(index, "venue", e.target.value)} />
            <button type="button" className="remove-btn" onClick={() => removeCeremony(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="add-btn" onClick={addCeremony}>Add Ceremony</button>
      </div>

      <button type="submit">Submit Template</button>
    </form>
  );
};

export default TemplateForm;
