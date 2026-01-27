import { Brain, BookOpen, Target, Zap, FileText, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Concept Understanding",
      description: "Our advanced AI mentor breaks down complex topics into simple, digestible concepts. Get personalized explanations tailored to your learning style.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      icon: Target,
      title: "100,000+ Practice MCQs",
      description: "Master every topic with our extensive question bank covering all UPSC papers. Track your progress and identify weak areas with intelligent analytics.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: BookOpen,
      title: "500+ Free eBooks",
      description: "Access comprehensive study materials, current affairs compilations, and expert-curated notes—all in digital format for learning on the go.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: Zap,
      title: "Smart Study Plans",
      description: "AI-powered personalized study schedules based on your strengths, weaknesses, and available time. Stay on track with daily goals and reminders.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      icon: FileText,
      title: "Previous Year Papers",
      description: "Comprehensive collection of previous year questions with detailed solutions and answer writing techniques for better exam preparation.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Detailed insights into your preparation journey. Track progress, identify patterns, and make data-driven decisions to improve your scores.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Crack UPSC</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our comprehensive platform combines traditional study methods with cutting-edge AI technology 
            to give you an unmatched preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-200"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                  <Icon className={`size-6 ${feature.textColor}`} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
