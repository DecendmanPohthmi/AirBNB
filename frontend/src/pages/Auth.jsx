import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [method, setMethod] = useState('phone'); // 'phone' or 'email'
  const [step, setStep] = useState(1); // 1 = enter contact, 2 = enter OTP

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (method === 'phone' && !phone.trim()) return alert('Enter phone number');
    if (method === 'email' && !email.trim()) return alert('Enter email');

    console.log(`Sending OTP for ${method === 'phone' ? phone : email}`);
    // TODO: Add Firebase or backend call here
    setStep(2);
  };

  const handleVerifyOtp = () => {
    if (!otp.trim()) return alert('Enter OTP');
    console.log(`Verifying OTP for ${method === 'phone' ? phone : email}: ${otp}`);

    if (mode === 'signup') {
      console.log('Creating account for:', name);
    }

    alert(`${mode === 'signup' ? 'Signed up' : 'Logged in'} successfully`);
    navigate('/');
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setStep(1);
    setOtp('');
    setPhone('');
    setEmail('');
    setName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === 'login' ? 'Login' : 'Sign Up'} with {method === 'phone' ? 'Phone' : 'Email'}
        </h2>

        {/* Toggle between phone/email */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => {
              setMethod('phone');
              setStep(1);
              setOtp('');
            }}
            className={`px-4 py-2 rounded-l-lg border ${method === 'phone' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Phone
          </button>
          <button
            onClick={() => {
              setMethod('email');
              setStep(1);
              setOtp('');
            }}
            className={`px-4 py-2 rounded-r-lg border ${method === 'email' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Email
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-4">

            {method === 'phone' ? (
              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            )}

            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Verify & {mode === 'signup' ? 'Sign Up' : 'Login'}
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full text-sm text-blue-600 underline"
            >
              Change {method}
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <>
              Don’t have an account?{' '}
              <button onClick={toggleMode} className="text-blue-600 hover:underline">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={toggleMode} className="text-blue-600 hover:underline">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
