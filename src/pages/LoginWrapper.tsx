import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Dashboard from "./Dashboard";

interface User {
  name: string;
  email: string;
  picture?: string;
}

export default function LoginWrapper() {
  const [user, setUser] = useState<User | null>(null);

  const handleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      const decoded: any = jwt_decode(credentialResponse.credential);
      const userData: User = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };
      setUser(userData);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Welcome to KalpGyanAI</h1>
        <p className="text-slate-600 mb-6 text-center max-w-md">
          Personalized UPSC preparation with syllabus, AI explanations, and practice questions.
        </p>
        <div className="space-y-4">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => alert("Login Failed")}
          />
          <button
            onClick={() => setUser({ name: "Guest", email: "" })}
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Started as Guest
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header with user info and logout */}
      <div className="bg-white shadow-md border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {user.picture && <img src={user.picture} className="w-10 h-10 rounded-full" />}
          <span className="font-semibold text-slate-900">{user.name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}
