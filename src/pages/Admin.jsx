import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Admin.css'; // Aapki CSS file

function Admin() {
    // --- LOGIN STATES ---
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    // --- AAPKI PURANI STATES ---
    const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        location: '',
        description: '',
        image: []
    });
    // testing

    // Aapka Network IP
    const IP = "property-backend-of4t.onrender.com";

  

// --- 1. ADMIN LOGIN FUNCTION ---
const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        // Yahan dhyan de: URL ke aage /admin-login wapas lagana zaroori hai!
        const response = await fetch(`https://property-backend-lypz.onrender.com/admin-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // <--- Ye CORS ke liye bohot zaroori hai
            body: JSON.stringify(loginData)
        });
           
            const result = await response.json();

            if (response.ok && result.success) {
                setIsLoggedIn(true);
                alert("Welcome Back, Admin!");
            } else {
                alert(result.message || "Galat ID ya Password!");
            }
        } catch (err) {
            alert("Backend server se connect nahi ho pa raha!");
        }
    };


    // --- 2. AAPKA PROPERTIES FETCH FUNCTION ---
    const fetchProperties = async () => {
        try {
            const response = await fetch("https://property-backend-of4t.onrender.com/properties");
            const data = await response.json();
            setProperties(data);
        } catch (err) {
            console.error("Error fetching properties:", err);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchProperties();
        }
    }, [isLoggedIn]);

    // --- 3. AAPKA PROPERTY SUBMIT FUNCTION ---
    const handlePropertySubmit = async (e) => {
        e.preventDefault();
        const dataToSend = new FormData();
        dataToSend.append("title", formData.title);
        dataToSend.append("price", formData.price);
        dataToSend.append("location", formData.location);
        dataToSend.append("description", formData.description);
        if (formData.image) {
  for (let i = 0; i < formData.image.length; i++) {
    dataToSend.append("image", formData.image[i]);
  }
}

        try {
            const response = await fetch("https://property-backend-of4t.onrender.com/add-property", {
                method: "POST",
                body: dataToSend,
            });

            if (response.ok) {
                alert("Property and Image uploaded successfully!");
                setFormData({ title: '', price: '', location: '', description: '', image: null });
                fetchProperties(); // List automatic refresh ho jayegi
            } else {
                alert("Upload failed!");
            }
        } catch (error) {
            alert("Server Error!");
        }
    };

    // --- 4. AAPKA DELETE FUNCTION ---
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            try {
                const response = await fetch(`https://property-backend-of4t.onrender.com/delete-property/${id}`,{
                    method: "DELETE"
                });
                if (response.ok) {
                    alert("Property Deleted Successfully!");
                    fetchProperties(); // List refresh
                } else {
                    alert("Delete failed!");
                }
            } catch (err) {
                alert("Server se connect nahi ho paya!");
            }
        }
    };

    // ============================================================
    // CONDITION 1: AGAR LOGGED IN NAHI HAI, TO LOGIN SCREEN DIKHAO
    // ============================================================
    if (!isLoggedIn) {
        return (
            <div className="login-screen" style={{
                padding: '50px 20px',
                textAlign: 'center',
                background: '#111d2c',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}>
                <div style={{ maxWidth: '360px', width: '100%', background: '#1c2d42', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                    <h2 style={{ color: '#f1c40f', marginBottom: '10px', fontSize: '24px' }}>Real Estate</h2>
                    <p style={{ color: '#aaa', marginBottom: '25px', fontSize: '14px' }}>Admin Authorization Required</p>
                    
                    <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={loginData.username}
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white', fontSize: '16px', boxSizing: 'border-box' }}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white', fontSize: '16px', boxSizing: 'border-box' }}
                            required
                        />
            
                        <button type="submit" style={{ padding: '12px', background: '#f1c40f', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', color: '#111', marginTop: '10px' }}>
                            Secure Login
                        </button>
  <Link to="/forget-password" style={{ color: '#f1c40f', marginTop: '15px', display: 'block', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }}>
    Forgot Password?
</Link>
                    </form>
                </div>
            </div>
        );
    }

    // ============================================================
    // CONDITION 2: LOGIN HOTE HI AAPKA PURANA EXACT CODE LAYOUT
    // ============================================================
    return (
        <div className="admin-container">
            <h1 className="admin-title">Add Property</h1>
            <form className="admin-form" onSubmit={handlePropertySubmit}>
                <input 
                    type="text" 
                    placeholder="Property Title" 
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Price" 
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })} 
                    required
                />
                <textarea 
                    placeholder="Property Description" 
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                    required
                />
                <input 
                    type="file" 
                    multiple
                    onChange={(e) => setFormData({ ...formData, image: e.target.files })} 
                    required
                />
                <button type="submit">Add Property</button>
            </form>

            <h2 className="admin-title" style={{ marginTop: '40px' }}>All Properties</h2>
            
            {/* Properties List Containers (Purani CSS Class automatically handle karegi) */}
            <div className="property-list-admin">
                {properties.map((item) => (
                    <div key={item._id} className="property-card">
                        <img src={item.image} alt={item.title} className="property-image" />
                        <h2>{item.title}</h2>
                        <p>{item.location}</p>
                        <h3>{item.price}</h3>
                        <button 
                            onClick={() => handleDelete(item._id)} 
                            className="delete-btn"
                            style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;