import { Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

export default function AIMentorSection() {
  const navigate = useNavigate();

  const handleAskMentor = () => {
    navigate("/ai-mentor");
  };

  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Brain className="size-8" />
            </div>
            <div>
              <h2 className="font-bold">AI Mentor</h2>
              <p className="text-sm text-indigo-100">Get personalized guidance</p>
            </div>
          </div>

          <p className="mb-6 text-indigo-50 max-w-2xl">
            Stuck on a topic? Need clarification? Our AI Mentor is here to help you understand complex concepts, 
            answer your questions, and provide personalized study recommendations.
          </p>

          <button
            onClick={handleAskMentor}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <Sparkles className="size-5" />
            Ask AI Mentor
          </button>
        </div>
      </div>
    </section>
  );
}
