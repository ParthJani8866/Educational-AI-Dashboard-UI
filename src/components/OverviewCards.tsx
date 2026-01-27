import { Paper } from "../data/syllabusData";
import { FileText, BookOpen, Target } from "lucide-react";

interface OverviewCardsProps {
  syllabus: Paper[];
}

export default function OverviewCards({ syllabus }: OverviewCardsProps) {
  const totalPapers = syllabus.length;
  const totalSubjects = syllabus.reduce(
    (acc, paper) => acc + paper.subjects.length,
    0
  );
  const totalTopics = syllabus.reduce(
    (acc, paper) =>
      acc +
      paper.subjects.reduce(
        (subAcc, subject) => subAcc + (Array.isArray(subject.topics) ? subject.topics.length : 0),
        0
      ),
    0
  );

  const cards = [
    {
      title: "Total Papers",
      value: totalPapers,
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Total Subjects",
      value: totalSubjects,
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      title: "Total Topics",
      value: totalTopics,
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-slate-900 font-semibold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">{card.title}</p>
                  <p className={`font-bold ${card.textColor}`}>{card.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${card.bgColor}`}>
                  <Icon className={`size-6 ${card.textColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
