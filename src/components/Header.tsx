import { GraduationCap } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";

interface User {
  name: string;
  email: string;
  picture?: string;
}

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  const currentYear = new Date().getFullYear();

  return (

    <header className="bg-white border-b border-slate-200 shadow-sm">

      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900">KalpGyanAI</h1>
              <p className="text-sm text-slate-600">
                Your AI UPSC Companion
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
              UPSC {currentYear}
            </span>
            <GoogleTranslate />
            <div className="text-right">
              <p className="text-sm text-slate-600">Welcome back,</p>
              <p className="font-semibold text-slate-900">
                {user.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
