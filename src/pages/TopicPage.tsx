import { useSearchParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ListTree,
  HelpCircle,
  Brain,
  Video,
  CheckCircle2,
} from "lucide-react";

import { syllabusData } from "../data/syllabusData";

export default function TopicPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paperName = searchParams.get("paper") || "";
  const subjectName = searchParams.get("subject") || "";
  const topicName = searchParams.get("topic") || "";

  const handleBack = () => navigate("/dashboard");

  // 🔎 FILTER FROM JSON
  const paper = syllabusData.find(p => p.name === paperName);
  const subject = paper?.subjects.find(s => s.name === subjectName);
  const topic = subject?.topics.find(t => t.name === topicName);

  const subtopics = topic?.subtopics || [];

  const handleAction = (subtopic: string, mode: string) => {
    navigate(
      `/learn?paper=${paperName}&subject=${subjectName}&topic=${topicName}&subtopic=${subtopic}&mode=${mode}`
    );
  };
  const handleMCQAction = (subtopic: string, mode: string) => {
    navigate(
      `/mcqs?paper=${paperName}&subject=${subjectName}&topic=${topicName}&subtopic=${subtopic}&mode=${mode}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="size-5" />
            Back to Dashboard
          </button>

          <div className="flex gap-2 mb-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
              {paperName}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              {subjectName}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">{topicName}</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Overview */}
        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="text-indigo-600" />
            <h2 className="font-semibold">Topic Overview</h2>
          </div>
          <p className="text-slate-600">
            Structured coverage of <strong>{topicName}</strong> with concept
            clarity, MCQs, PYQs, notes, and videos aligned with UPSC.
          </p>
        </div>

        {/* 🔥 SUBTOPICS */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <ListTree className="text-indigo-600" />
            <h2 className="font-semibold">Subtopics</h2>
          </div>

          {subtopics.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No subtopics found. Please update syllabus JSON.
            </p>
          ) : (
            <div className="space-y-4">
              {subtopics.map((sub, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition"
                >
                  <h3 className="font-semibold mb-3">{sub.name}</h3>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <ActionBtn
                      label="Concept"
                      icon={<Brain className="size-4" />}
                      onClick={() => handleAction(sub.name, "theory")}
                    />
                    <ActionBtn
                      label="MCQs"
                      icon={<HelpCircle className="size-4" />}
                      onClick={() => handleMCQAction(sub.name, "mcq")}
                    />
                    <ActionBtn
                      label="Notes"
                      icon={<FileText className="size-4" />}
                      onClick={() => handleAction(sub.name, "notes")}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

/* 🔹 Small reusable button */
function ActionBtn({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 transition"
    >
      {icon}
      {label}
    </button>
  );
}
