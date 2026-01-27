import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { fetchSyllabus, Paper } from "../data/syllabusData";
import Header from "../components/Header";
import TodaysStudyPlan from "../components/TodaysStudyPlan";
import FullSyllabus from "../components/FullSyllabus";
import AIMentorSection from "../components/AIMentorSection";
import LoadingSpinner from "../components/LoadingSpinner";

interface User {
  name: string;
  email: string;
  picture?: string;
}

export default function Dashboard() {
  const location = useLocation();
  const state = location.state as { user?: User };

  // 🔐 Safety: if user not present (refresh / direct access)
  if (!state?.user) {
    return <Navigate to="/" replace />;
  }

  const { user } = state;

  const [syllabus, setSyllabus] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSyllabus = async () => {
      try {
        const data = await fetchSyllabus();
        setSyllabus(data);
      } catch (error) {
        console.error("Error fetching syllabus:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSyllabus();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header user={user} />

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <FullSyllabus syllabus={syllabus} />
        <AIMentorSection />
      </main>
    </div>
  );
}
