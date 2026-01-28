import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { ArrowLeft, Loader2, CheckCircle2, XCircle, Brain } from "lucide-react";

interface MCQ {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export default function MCQsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const topic = searchParams.get("topic") || "";
  const subtopic = searchParams.get("subtopic") || "";

  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1); // Track which batch we're on

  const fetchMCQs = async (pageNumber: number) => {
    try {
      setLoading(true);

      const res = await fetch("https://api.kalpgyanai.com/topic/mcqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          subtopic,
          count: 10,
          page: pageNumber, // send page to API
        }),
      });

      const data = await res.json();

      if (data.mcqs && data.mcqs.length > 0) {
        setMcqs(data.mcqs);
        setSelected(Array(data.mcqs.length).fill(-1));
        setShowAnswer(Array(data.mcqs.length).fill(false));
        setCurrentIndex(0);
      } else {
        alert("No more MCQs available.");
      }
    } catch (err) {
      console.error("MCQ fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMCQs(page);
  }, [topic, subtopic, page]);

  const selectOption = (qIndex: number, oIndex: number) => {
    if (showAnswer[qIndex]) return;

    const newSelected = [...selected];
    newSelected[qIndex] = oIndex;
    setSelected(newSelected);

    const reveal = [...showAnswer];
    reveal[qIndex] = true;
    setShowAnswer(reveal);
  };

  const goNext = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Current batch finished → fetch next batch
      setPage(page + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const mcq = mcqs[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="size-5" />
            Back
          </button>

          <h1 className="text-2xl font-bold text-slate-900">UPSC Prelims MCQs</h1>
          <p className="text-slate-600">
            {topic} {subtopic && `• ${subtopic}`}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {loading && (
          <div className="flex justify-center gap-3 py-24 text-indigo-600">
            <Loader2 className="animate-spin size-6" />
            Generating AI MCQs…
          </div>
        )}

        {!loading && mcqs.length > 0 && (
          <div className="bg-white border rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-start gap-2 mb-4">
              <Brain className="text-indigo-600 mt-1" />
              <h2 className="font-semibold text-slate-900">
                Q{currentIndex + 1} of {mcqs.length} (Page {page})
              </h2>
            </div>
            <p className="mb-4">{mcq.question}</p>

            <div className="space-y-3">
              {mcq.options.map((opt, oIndex) => {
                const isCorrect = mcq.answer === oIndex;
                const isSelected = selected[currentIndex] === oIndex;
                const show = showAnswer[currentIndex];

                return (
                  <button
                    key={oIndex}
                    onClick={() => selectOption(currentIndex, oIndex)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition
                      ${
                        show
                          ? isCorrect
                            ? "bg-green-50 border-green-400 text-green-800"
                            : isSelected
                            ? "bg-red-50 border-red-400 text-red-800"
                            : "border-slate-200"
                          : "hover:bg-indigo-50 border-slate-200"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      {show &&
                        (isCorrect ? (
                          <CheckCircle2 className="text-green-600" />
                        ) : isSelected ? (
                          <XCircle className="text-red-600" />
                        ) : null)}
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showAnswer[currentIndex] && (
              <div className="mt-4 bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                <p className="font-medium text-indigo-900 mb-1">Explanation:</p>
                <p className="text-slate-700">{mcq.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={goPrev}
                disabled={currentIndex === 0 && page === 1}
                className="px-4 py-2 bg-slate-200 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={goNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                {currentIndex < mcqs.length - 1 ? "Next" : "Next 10"}
              </button>
            </div>
          </div>
        )}

        {!loading && mcqs.length === 0 && (
          <p className="text-center text-slate-500 py-24">No MCQs found.</p>
        )}
      </main>
    </div>
  );
}
