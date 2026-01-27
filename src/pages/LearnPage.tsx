import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Brain,
  Loader2,
  AlertTriangle,
} from "lucide-react";

export default function LearnPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paper = searchParams.get("paper") || "";
  const subject = searchParams.get("subject") || "";
  const topic = searchParams.get("topic") || "";
  const subtopic = searchParams.get("subtopic") || "";
  const mode = searchParams.get("mode") || "theory";

  const explainTopic = subtopic || topic;

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "http://127.0.0.1:8010/topic/explain",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ topic: explainTopic }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setContent(data.content);
      } catch (err) {
        console.error(err);
        setError("AI explanation could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [explainTopic]);

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

          <div className="flex flex-wrap gap-2 mb-2">
            <Badge label={paper} />
            <Badge label={subject} />
            <Badge label={topic} />
            {subtopic && <Badge label={subtopic} color="indigo" />}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            {explainTopic}
          </h1>
          <p className="text-slate-600 mt-1">
            AI Conceptual Explanation • UPSC Focused
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {loading && (
          <div className="flex justify-center items-center gap-3 py-24 text-indigo-600">
            <Loader2 className="animate-spin size-6" />
            <span className="font-medium">
              Generating AI explanation…
            </span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
            <AlertTriangle />
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white border shadow-sm rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-8">
              <Brain className="text-indigo-600" />
              <h2 className="text-xl font-semibold">
                Conceptual Learning
              </h2>
            </div>

            <article className="max-w-none text-slate-800 leading-relaxed space-y-4">
              {renderContent(content)}
            </article>
          </div>
        )}
      </main>
    </div>
  );
}

/* ---------- Content Renderer ---------- */
function renderContent(text: string) {
  const lines = text.split("\n");

  return lines.map((line, i) => {
    // Section headings ###
    if (line.startsWith("###")) {
      return (
        <h3
          key={i}
          className="text-xl font-bold text-slate-900 mt-8 mb-3"
        >
          {line.replace("###", "").trim()}
        </h3>
      );
    }

    // Numbered lists
    if (/^\d+\./.test(line)) {
      return (
        <li
          key={i}
          className="ml-6 list-decimal text-slate-700"
        >
          {line.replace(/^\d+\.\s*/, "")}
        </li>
      );
    }

    // Bullet points
    if (line.startsWith("-")) {
      return (
        <li
          key={i}
          className="ml-6 list-disc text-slate-700"
        >
          {line.replace("-", "").trim()}
        </li>
      );
    }

    // Empty line
    if (line.trim() === "") {
      return <div key={i} className="h-2" />;
    }

    // Normal paragraph
    return (
      <p key={i} className="text-slate-700">
        {line}
      </p>
    );
  });
}

/* ---------- Badge ---------- */
function Badge({
  label,
  color = "purple",
}: {
  label: string;
  color?: "purple" | "indigo";
}) {
  const styles =
    color === "indigo"
      ? "bg-indigo-100 text-indigo-700"
      : "bg-purple-100 text-purple-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles}`}
    >
      {label}
    </span>
  );
}
