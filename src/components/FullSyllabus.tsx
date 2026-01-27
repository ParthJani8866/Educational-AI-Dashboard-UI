import { Paper } from "../data/syllabusData";
import { useNavigate } from "react-router";
import { FileText, ChevronRight } from "lucide-react";

interface FullSyllabusProps {
  syllabus: Paper[];
}

export default function FullSyllabus({ syllabus }: FullSyllabusProps) {
  const navigate = useNavigate();

  const handleTopicClick = (paperName: string, subjectName: string, topicName: string) => {
    navigate(`/topic?paper=${encodeURIComponent(paperName)}&subject=${encodeURIComponent(subjectName)}&topic=${encodeURIComponent(topicName)}`);
  };

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="size-5 text-indigo-600" />
        <h2 className="text-slate-900 font-semibold">Full Syllabus</h2>
      </div>

      <div className="space-y-6">
        {syllabus.map((paper, paperIndex) => (
          <div key={paperIndex} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="font-bold text-slate-900">{paper.name}</h3>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                {paper.subjects.length} subjects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paper.subjects.map((subject, subIndex) => {
                const topicCount = Array.isArray(subject.topics) ? subject.topics.length : 0;
                const topics = Array.isArray(subject.topics) ? subject.topics : [];

                return (
                  <div
                    key={subIndex}
                    className="border border-slate-200 rounded-lg p-4 bg-gradient-to-br from-white to-slate-50 hover:shadow-md transition-shadow"
                  >
                    <div className="mb-3">
                      <h4 className="font-semibold text-slate-900 mb-1">{subject.name}</h4>
                      <p className="text-xs text-slate-500">{topicCount} topics</p>
                    </div>

                    <div className="space-y-2">
                      {topics.map((topic, topicIndex) => (
                        <button
                          key={topicIndex}
                          onClick={() =>
                            handleTopicClick(paper.name, subject.name, topic.name)
                          }
                          className="w-full flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all group"
                        >
                          <span className="text-left">{topic.name}</span>
                          <ChevronRight className="size-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
