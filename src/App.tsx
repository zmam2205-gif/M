import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LectureQuiz } from './components/LectureQuiz';
import { MatchingGame } from './components/MatchingGame';
import { AbdominalGridVisualizer } from './components/AbdominalGridVisualizer';
import { TranspyloricChallenge } from './components/TranspyloricChallenge';
import { ClinicalCase } from './components/ClinicalCase';
import { soundManager } from './utils/audio';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'quiz' | 'matching' | 'explorer' | 'transpyloric' | 'clinical'>('quiz');
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    soundManager.enabled = !soundManager.enabled;
    setIsMuted(!soundManager.enabled);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 3-Zone Top Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl p-6 sm:p-8">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Right: Text & Title */}
            <div className="flex-1 text-right space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="text-emerald-400">برنامج: عازمون على القمه 🫡</span>
                <span aria-hidden="true">·</span>
                <span>تشريح جدار البطن (25 سؤال MCQ)</span>
                <span aria-hidden="true">·</span>
                <span>د. أيمن خنفور Dr. Ayman Khanfour</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                عازمون على القمه 🫡
              </h1>
              <p className="text-emerald-400 text-lg sm:text-xl font-bold">
                تحدي الـ 25 سؤال MCQ لتشريح جدار البطن ومناطقه التسعة
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                تدرب على 25 سؤالاً شاملاً لكل تفاصيل المحاضرة: المستويات الفقرية (L1 Transpyloric, L3 Subcostal, L5 Intertubercular)، نقاط المغبن، ومواضع الأعضاء.
              </p>

              {/* Academic Highlights */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>25 سؤال MCQ تشريحي متدرج</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>المستويات الفقرية: L.1 و L.3 و L.5</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>توصيل الأعضاء وحالة سريرية</span>
                </div>
              </div>
            </div>

            {/* Left: Doctor Mascot / Visual Asset */}
            <div className="shrink-0 flex items-center gap-4">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-800">
                <img
                  src="/src/assets/images/doctor_avatar_mascot_1791068864260.jpg"
                  alt="Doctor Mascot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-1.5 inset-x-0 text-center text-[10px] font-bold text-emerald-300 bg-slate-950/80 mx-1 py-0.5 rounded">
                  د. خنفور ستايل 🫡
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section View Routing */}
        <section aria-label="محتوى الاختبار">
          {currentTab === 'quiz' && <LectureQuiz />}
          {currentTab === 'matching' && <MatchingGame />}
          {currentTab === 'explorer' && <AbdominalGridVisualizer />}
          {currentTab === 'transpyloric' && <TranspyloricChallenge />}
          {currentTab === 'clinical' && <ClinicalCase />}
        </section>

        {/* Quick Study Review Box */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-white mb-3 text-base">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>ملخص مفاتيح الحل السريعة من محاضرة د. أيمن خنفور:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <strong className="text-emerald-300 block mb-1">المستويات الفقرية الأساسية:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-slate-200">L.1:</strong> Transpyloric plane (عبر البواب).</li>
                <li><strong className="text-slate-200">L.3:</strong> Subcostal plane (تحت الضلعي).</li>
                <li><strong className="text-slate-200">L.5:</strong> Inter-tubercular plane (بين الحديبتين).</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <strong className="text-cyan-300 block mb-1">مقارنة نقاط المغبن:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-slate-200">Midinguinal point:</strong> بين ASIS و الارتفاق العاني Symphysis pubis.</li>
                <li><strong className="text-slate-200">Midpoint of ligament:</strong> بين ASIS و الحديبة العانية Pubic tubercle.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <strong className="text-amber-300 block mb-1">أعضاء مميزة (Slide 16-17):</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-slate-200">Liver:</strong> Right hypochondrium (المراق الأيمن).</li>
                <li><strong className="text-slate-200">Spleen & Stomach:</strong> Left hypochondrium.</li>
                <li><strong className="text-slate-200">Appendix:</strong> Right iliac fossa (الحفرة الحرقفية).</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-1 text-slate-400">
          <span className="font-bold text-slate-300">عازمون على القمه 🫡</span>
          <span>·</span>
          <span>كويز تشريح جدار البطن (25 سؤال MCQ) — د. أيمن خنفور</span>
        </div>
        <p className="text-slate-500 text-[11px]">
          تطبيق تعليمي تفاعلي لطلاب الطب البشري والجراحة
        </p>
      </footer>
    </div>
  );
}
