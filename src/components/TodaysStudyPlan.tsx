import { Paper } from "../data/syllabusData";
import { Calendar, BookOpen, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

interface TodaysStudyPlanProps {
  syllabus: Paper[];
}

export default function TodaysStudyPlan({ syllabus }: TodaysStudyPlanProps) {
  const navigate = useNavigate();

  // Auto-select first paper and first 3 subjects
  const selectedPaper = syllabus[0];
  const selectedSubjects = selectedPaper?.subjects.slice(0, 3) || [];

  const handleTopicClick = (paperName: string, subjectName: string, topicName: string) => {
    navigate(`/topic?paper=${encodeURIComponent(paperName)}&subject=${encodeURIComponent(subjectName)}&topic=${encodeURIComponent(topicName)}`);
  };

  if (!selectedPaper || selectedSubjects.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="size-5 text-indigo-600" />
        <h2 className="text-slate-900 font-semibold">Today's Study Plan</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {selectedPaper.name}
          </span>
          <span className="text-sm text-slate-600">
            · {selectedSubjects.length} subjects selected
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedSubjects.map((subject, subIndex) => {
            // Show first 2 topics for each subject
            const topicsToShow = Array.isArray(subject.topics)
              ? subject.topics.slice(0, 2)
              : [];

            return (
              <div
                key={subIndex}
                className="border border-slate-200 rounded-lg p-4 bg-slate-50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="size-4 text-slate-600" />
                  <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                </div>

                <div className="space-y-2">
                  {topicsToShow.map((topic, topicIndex) => (
                    <button
                      key={topicIndex}
                      onClick={() =>
                        handleTopicClick(selectedPaper.name, subject.name, topic.name)
                      }
                      className="w-full flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all group"
                    >
                      {topic.name}
                      <ChevronRight className="size-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
