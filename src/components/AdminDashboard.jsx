import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("volunteers");
  const [volunteers, setVolunteers] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const fetchData = () => {
    // Fetch volunteers
    fetch("http://localhost:4000/api/volunteer")
      .then(res => res.json())
      .then(setVolunteers)
      .catch(err => console.error("Error fetching volunteers:", err));

    // Fetch referrals
    fetch("http://localhost:4000/api/referral")
      .then(res => res.json())
      .then(setReferrals)
      .catch(err => console.error("Error fetching referrals:", err));

    // Fetch contacts
    fetch("http://localhost:4000/api/contact")
      .then(res => res.json())
      .then(setContacts)
      .catch(err => console.error("Error fetching contacts:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:4000/api/${type}/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      
      if (data.success) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
        fetchData(); // Refresh data
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
      alert(`Failed to delete ${type}. Please try again.`);
    }
  };

  const handleEdit = (item, type) => {
    setEditingId(item._id);
    setEditData({ ...item });
  };

  const handleSave = async (type, id) => {
    try {
      // Remove _id, createdAt, and __v from the data being sent
      const { _id, createdAt, __v, ...dataToSend } = editData;
      
      const res = await fetch(`http://localhost:4000/api/${type}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: `HTTP ${res.status}: ${res.statusText}` }));
        throw new Error(errorData.error || `HTTP ${res.status}: ${res.statusText}`);
      }
      
      const data = await res.json();
      
      if (data.success) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully`);
        setEditingId(null);
        setEditData({});
        fetchData(); // Refresh data
      } else {
        alert(`Error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(`Error updating ${type}:`, err);
      alert(`Failed to update ${type}: ${err.message}`);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* ✅ Sidebar */}
      <aside style={{
        width: "220px",
        background: "#2c3e50",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2 style={{ marginBottom: "2rem" }}>Dashboard</h2>
        <button
          style={{ marginBottom: "1rem", background: activeTab === "volunteers" ? "#34495e" : "transparent", color: "#fff", border: "none", textAlign: "left", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => setActiveTab("volunteers")}
        >
          Volunteers
        </button>
        <button
          style={{ marginBottom: "1rem", background: activeTab === "referrals" ? "#34495e" : "transparent", color: "#fff", border: "none", textAlign: "left", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => setActiveTab("referrals")}
        >
          Referrals
        </button>
        <button
          style={{ marginBottom: "1rem", background: activeTab === "contacts" ? "#34495e" : "transparent", color: "#fff", border: "none", textAlign: "left", padding: "0.5rem", cursor: "pointer" }}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts
        </button>
      </aside>

      {/* ✅ Main Content */}
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Admin Dashboard</h1>

        {activeTab === "volunteers" && (
          <section>
            <h2>Volunteers ({volunteers.length})</h2>
            {volunteers.length === 0 ? (
              <p>No volunteers yet.</p>
            ) : (
              <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Name</th><th>Email</th><th>Interest</th><th>Availability</th><th>Submitted</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map(v => (
                    <tr key={v._id}>
                      {editingId === v._id ? (
                        <>
                          <td><input type="text" value={editData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="email" value={editData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} style={{ width: "100%" }} /></td>
                          <td>
                            <select value={editData.interest || ""} onChange={(e) => handleInputChange("interest", e.target.value)} style={{ width: "100%" }}>
                              <option value="education">Education</option>
                              <option value="healthcare">Healthcare</option>
                              <option value="environment">Environment</option>
                            </select>
                          </td>
                          <td><input type="text" value={editData.availability || ""} onChange={(e) => handleInputChange("availability", e.target.value)} style={{ width: "100%" }} /></td>
                          <td>{v.createdAt ? new Date(v.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleSave("volunteer", v._id)} style={{ marginRight: "5px", padding: "5px 10px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Save</button>
                            <button onClick={handleCancel} style={{ padding: "5px 10px", background: "#6c757d", color: "white", border: "none", cursor: "pointer" }}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{v.name}</td>
                          <td>{v.email}</td>
                          <td>{v.interest}</td>
                          <td>{v.availability || "Not specified"}</td>
                          <td>{v.createdAt ? new Date(v.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleEdit(v, "volunteer")} style={{ marginRight: "5px", padding: "5px 10px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Edit</button>
                            <button onClick={() => handleDelete("volunteer", v._id)} style={{ padding: "5px 10px", background: "#dc3545", color: "white", border: "none", cursor: "pointer" }}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}

        {activeTab === "referrals" && (
          <section>
            <h2>Referrals ({referrals.length})</h2>
            {referrals.length === 0 ? (
              <p>No referrals yet.</p>
            ) : (
              <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Your Name</th><th>Your Email</th><th>Friend's Name</th><th>Friend's Email</th><th>Notes</th><th>Submitted</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map(r => (
                    <tr key={r._id}>
                      {editingId === r._id ? (
                        <>
                          <td><input type="text" value={editData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="email" value={editData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="text" value={editData.referredName || ""} onChange={(e) => handleInputChange("referredName", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="email" value={editData.referredEmail || ""} onChange={(e) => handleInputChange("referredEmail", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><textarea value={editData.notes || ""} onChange={(e) => handleInputChange("notes", e.target.value)} style={{ width: "100%" }} rows="2" /></td>
                          <td>{r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleSave("referral", r._id)} style={{ marginRight: "5px", padding: "5px 10px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Save</button>
                            <button onClick={handleCancel} style={{ padding: "5px 10px", background: "#6c757d", color: "white", border: "none", cursor: "pointer" }}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{r.name}</td>
                          <td>{r.email}</td>
                          <td>{r.referredName}</td>
                          <td>{r.referredEmail}</td>
                          <td>{r.notes || "N/A"}</td>
                          <td>{r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleEdit(r, "referral")} style={{ marginRight: "5px", padding: "5px 10px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Edit</button>
                            <button onClick={() => handleDelete("referral", r._id)} style={{ padding: "5px 10px", background: "#dc3545", color: "white", border: "none", cursor: "pointer" }}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}

        {activeTab === "contacts" && (
          <section>
            <h2>Contacts ({contacts.length})</h2>
            {contacts.length === 0 ? (
              <p>No contacts yet.</p>
            ) : (
              <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Name</th><th>Email</th><th>Telephone</th><th>Subject</th><th>Message</th><th>Submitted</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(c => (
                    <tr key={c._id}>
                      {editingId === c._id ? (
                        <>
                          <td><input type="text" value={editData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="email" value={editData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="text" value={editData.telephone || ""} onChange={(e) => handleInputChange("telephone", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><input type="text" value={editData.subject || ""} onChange={(e) => handleInputChange("subject", e.target.value)} style={{ width: "100%" }} /></td>
                          <td><textarea value={editData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} style={{ width: "100%" }} rows="2" /></td>
                          <td>{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleSave("contact", c._id)} style={{ marginRight: "5px", padding: "5px 10px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Save</button>
                            <button onClick={handleCancel} style={{ padding: "5px 10px", background: "#6c757d", color: "white", border: "none", cursor: "pointer" }}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{c.name}</td>
                          <td>{c.email}</td>
                          <td>{c.telephone || "Not provided"}</td>
                          <td>{c.subject}</td>
                          <td style={{ maxWidth: "300px", wordWrap: "break-word" }}>{c.message}</td>
                          <td>{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "N/A"}</td>
                          <td>
                            <button onClick={() => handleEdit(c, "contact")} style={{ marginRight: "5px", padding: "5px 10px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Edit</button>
                            <button onClick={() => handleDelete("contact", c._id)} style={{ padding: "5px 10px", background: "#dc3545", color: "white", border: "none", cursor: "pointer" }}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
