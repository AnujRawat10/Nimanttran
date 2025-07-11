import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await axios.get("http://localhost:5000/api/templates/all");
    setEntries(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/templates/${id}`);
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Submitted Templates</h2>
      <table>
        <thead>
          <tr>
            <th>Template</th>
            <th>Slug</th>
            <th>Created</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.templateType}</td>
              <td>{entry.slug}</td>
              <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
              <td>
                <a href={`/preview/${entry.slug}`} target="_blank" rel="noreferrer">View</a>
              </td>
              <td>
                <button onClick={() => handleDelete(entry._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
