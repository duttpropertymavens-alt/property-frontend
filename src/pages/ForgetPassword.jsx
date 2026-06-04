import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
    const [step, setStep] = useState(1); // 1 = Phone Input, 2 = OTP + New Password Input
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const IP = "property-backend-of4t.onrender.com";
    const navigate = useNavigate();

    // STEP 1: Phone number bhej kar OTP mangwane ke liye
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setStatusMessage('Sending OTP...');
        try {
            const serverURL = "https://property-frontend-xi.vercel.app/"; // https://${IP}
            
            const response = await fetch(`${serverURL}/admin-forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: phone }) // Backend me username ke naam se phone number jayega
            });
            const result = await response.json();

            if (response.ok && result.success) {
                setStatusMessage('');
                alert(result.message);
                setStep(2); // Card ke andar hi doosra step khul jayega
            } else {
                setStatusMessage(result.message || "Number not found!");
            }
        } catch (err) {
            setStatusMessage("Server error aa gaya bhai! Code ya network check karo.");
        }
    };

    // STEP 2: OTP aur naya password verify karne ke liye
    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const serverURL = "https://property-frontend-xi.vercel.app/"; // https://${IP}
            const response = await fetch(`${serverURL}/admin-reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp, newPassword, username: phone })
            });
            const result = await response.json();

            if (response.ok && result.success) {
                alert(result.message);
                navigate('/admin'); // Login page par wapas bhej do
            } else {
                alert(result.message || "Galat OTP!");
            }
        } catch (err) {
            alert("Password change karne me error aya!");
        }
    };

    return (
        <div style={{
            background: '#111d2c', height: '100vh', display: 'flex', 
            justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif'
        }}>
            <div style={{ maxWidth: '360px', width: '100%', background: '#1c2d42', padding: '30px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                <h2 style={{ color: '#f1c40f', marginBottom: '20px', fontSize: '24px' }}>Reset Admin Password</h2>
                
                {statusMessage && <p style={{ color: '#e74c3c', fontSize: '14px', marginBottom: '15px' }}>{statusMessage}</p>}

                {/* 🔁 STEP 1: CARD ME SIRF PHONE NUMBER INPUT */}
                {step === 1 && (
                    <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input 
                            type="tel" 
                            placeholder="Enter 10-Digit WhatsApp Number" 
                            value={phone} 
                            maxLength="13"
                            required 
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white' }}
                        />
                        <button type="submit" style={{ padding: '12px', background: '#f1c40f', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px', color: '#111d2c' }}>
                            Send OTP
                        </button>
                    </form>
                )}

                {/* 🔁 STEP 2: WHATSAPP NUMBER SUBMIT HOTE HI ISI CARD ME OTP AUR NEW PASSWORD INPUT */}
                {step === 2 && (
                    <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ color: '#2ecc71', fontSize: '13px', margin: 0 }}>✔️ OTP aapke WhatsApp number par bhej diya h</p>
                       
                       <input 
                            type="tel" 
                            placeholder="Enter 10-Digit WhatsApp Number" 
                            value={phone} 
                            maxLength="13"
                            required 
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white' }}
                        />
                        <input 
                            type="text" 
                            placeholder="Enter 4-Digit OTP" 
                            value={otp} 
                            required 
                            onChange={(e) => setOtp(e.target.value)}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white' }}
                        />
                        <input 
                            type="password" 
                            placeholder="Enter New Password" 
                            value={newPassword} 
                            required 
                            onChange={(e) => setNewPassword(e.target.value)}
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #34495e', background: '#111d2c', color: 'white' }}
                        />
                        <button type="submit" style={{ padding: '12px', background: '#2ecc71', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: '5px', color: 'white' }}>
                            Update Password
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ForgotPasswordPage;