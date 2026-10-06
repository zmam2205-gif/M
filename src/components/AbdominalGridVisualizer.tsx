import React, { useState } from 'react';
import { ABDOMINAL_REGIONS } from '../data/lectureData';
import { AbdominalRegionInfo } from '../types/quiz';
import { FeedbackBanner } from './FeedbackBanner';
import { soundManager } from '../utils/audio';
import { Layers, Crosshair, Sparkles } from 'lucide-react';

export const AbdominalGridVisualizer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<AbdominalRegionInfo>(ABDOMINAL_REGIONS[0]);
  const [showTranspyloric, setShowTranspyloric] = useState(true);
  const [showPoints, setShowPoints] = useState(true);

  // Quick interactive test state
  const [testTarget, setTestTarget] = useState<{
    organNameAr: string;
    organNameEn: string;
    targetRegionId: number;
    explanationAr: string;
    explanationEn: string;
  } | null>(null);

  const [testFeedback, setTestFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const testChallenges = [
    {
      organNameAr: 'الكبد (Liver - Major part)',
      organNameEn: 'Liver (Slide 15)',
      targetRegionId: 1, // Right hypochondrium
      explanationAr: 'يقع معظم الكبد في المراق الأيمن (Right Hypochondrium) ويمتد قليلاً للشرسوف والمراق الأيسر.',
      explanationEn: 'The liver lies mainly in the Right Hypochondrium.'
    },
    {
      organNameAr: 'الزائدة الدودية (Appendix)',
      organNameEn: 'Appendix (Slide 17)',
      targetRegionId: 8, // Right iliac
      explanationAr: 'الزائدة الدودية وقاعدة الأعور تقع في الحفرة الحرقفية اليمنى (Right Iliac / Right Iliac Fossa).',
      explanationEn: 'The appendix lies in the Right Iliac Fossa.'
    },
    {
      organNameAr: 'الطحال (Spleen)',
      organNameEn: 'Spleen (Slide 16)',
      targetRegionId: 2, // Left hypochondrium
      explanationAr: 'الطحال يقع في المراق الأيسر (Left Hypochondrium) تحت حماية الأضلاع السفلية.',
      explanationEn: 'The spleen lies in the Left Hypochondrium.'
    },
    {
      organNameAr: 'المثانة البولية الممتلئة (Urinary Bladder)',
      organNameEn: 'Urinary Bladder (Slide 17)',
      targetRegionId: 6, // Suprapubic / Hypogastrium
      explanationAr: 'المثانة البولية تقع في المنطقة فوق العانة (Suprapubic / Hypogastrium).',
      explanationEn: 'The urinary bladder lies in the Suprapubic / Hypogastric region.'
    },
    {
      organNameAr: 'الكلية اليسرى (Left Kidney)',
      organNameEn: 'Left Kidney (Slide 17)',
      targetRegionId: 3, // Left lumbar
      explanationAr: 'الكلية اليسرى مصنفة في أسئلة المحاضرة في المنطقة القطنية اليسرى (Left lumbar).',
      explanationEn: 'The left kidney is positioned in the Left Lumbar region.'
    }
  ];

  const startRandomChallenge = () => {
    soundManager.playClick();
    const random = testChallenges[Math.floor(Math.random() * testChallenges.length)];
    setTestTarget(random);
    setTestFeedback(null);
  };

  const handleRegionClick = (region: AbdominalRegionInfo) => {
    soundManager.playClick();
    setSelectedRegion(region);

    if (testTarget) {
      if (region.id === testTarget.targetRegionId) {
        setTestFeedback('correct');
      } else {
        setTestFeedback('incorrect');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            المناطق التشريحية التسعة لجدار البطن
          </h3>
          <p className="text-sm text-slate-300">
            انقر على أي منطقة لاستعراض حدودها وأعضاءها، أو اختبر مهاراتك التشريحية بالأسفل!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setShowTranspyloric(!showTranspyloric)}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              showTranspyloric
                ? 'bg-blue-600/30 border-blue-500 text-blue-200'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            المستوى عبر البواب Transpyloric (L1) {showTranspyloric ? '✓' : ''}
          </button>

          <button
            type="button"
            onClick={() => setShowPoints(!showPoints)}
            className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
              showPoints
                ? 'bg-amber-600/30 border-amber-500 text-amber-200'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            نقاط المغبن Midinguinal {showPoints ? '✓' : ''}
          </button>

          <button
            type="button"
            onClick={startRandomChallenge}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold border border-emerald-400 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            تحدي سريع: حدد العضو!
          </button>
        </div>
      </div>

      {/* Interactive Challenge Prompter */}
      {testTarget && (
        <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-emerald-500/50 shadow-lg text-center">
          <div className="text-xs font-semibold text-emerald-400 mb-1">
            سؤال التحدي السريع:
          </div>
          <div className="text-lg sm:text-xl font-black text-white">
            اضغط على المنطقة التي يوجد بها:{' '}
            <span className="text-emerald-300 underline underline-offset-4">
              {testTarget.organNameAr}
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-1">
            (Target: {testTarget.organNameEn})
          </div>
        </div>
      )}

      {/* Feedback Banner if tested */}
      {testFeedback && testTarget && (
        <FeedbackBanner
          status={testFeedback}
          explanationAr={testTarget.explanationAr}
          explanationEn={testTarget.explanationEn}
          nextButtonText="تحدي آخر ⬅️"
          onNext={startRandomChallenge}
          onRetry={() => setTestFeedback(null)}
        />
      )}

      {/* Main Grid & Anatomical Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Interactive Anatomical Visualizer (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
            <span>اليمين التشريحي (Right of Patient)</span>
            <span className="font-semibold text-slate-200">المنظر الأمامي لجدار البطن Anterior View</span>
            <span>اليسار التشريحي (Left of Patient)</span>
          </div>

          {/* Abdominal Silhouette Container */}
          <div className="relative mx-auto max-w-[480px] bg-slate-900/90 rounded-3xl border-2 border-slate-700/80 p-3 sm:p-5 shadow-inner">
            {/* The 3x3 Regions Grid */}
            <div className="grid grid-cols-3 gap-2 relative z-10">
              {/* Row 1: Right Hypochondrium, Epigastrium, Left Hypochondrium */}
              {ABDOMINAL_REGIONS.map((reg) => {
                const isSelected = selectedRegion.id === reg.id;
                return (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => handleRegionClick(reg)}
                    className={`relative p-3 min-h-[95px] sm:min-h-[115px] rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-200 group ${
                      isSelected
                        ? 'border-emerald-400 bg-slate-800 ring-2 ring-emerald-500/50 shadow-md scale-[1.02]'
                        : 'border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-500'
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-bold text-slate-100 group-hover:text-emerald-300">
                      {reg.nameEn}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {reg.nameAr.split('(')[0]}
                    </span>

                    {/* Small organ snippet */}
                    <span className="text-[9px] text-slate-400/80 mt-1 truncate max-w-full">
                      {reg.organsAr[0]}
                    </span>

                    {isSelected && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dividing Planes Overlay Annotations */}
            {/* Horizontal 1: Subcostal Plane (L3) */}
            <div className="absolute left-1 right-1 top-[36%] border-t-2 border-dashed border-red-400/70 pointer-events-none z-20">
              <span className="absolute right-2 -top-4 text-[10px] font-mono text-red-300 bg-slate-950/90 px-1.5 py-0.5 rounded border border-red-500/40">
                Subcostal Plane (L.3)
              </span>
            </div>

            {/* Horizontal 2: Inter-tubercular Plane (L5) */}
            <div className="absolute left-1 right-1 top-[68%] border-t-2 border-dashed border-red-400/70 pointer-events-none z-20">
              <span className="absolute right-2 -top-4 text-[10px] font-mono text-red-300 bg-slate-950/90 px-1.5 py-0.5 rounded border border-red-500/40">
                Inter-tubercular Plane (L.5)
              </span>
            </div>

            {/* Transpyloric Plane (L1) */}
            {showTranspyloric && (
              <div className="absolute left-0 right-0 top-[20%] border-t-2 border-cyan-400/90 pointer-events-none z-20">
                <span className="absolute left-2 -top-4 text-[10px] font-mono text-cyan-300 bg-slate-950/90 px-1.5 py-0.5 rounded border border-cyan-500/40">
                  Transpyloric Plane (L.1)
                </span>
              </div>
            )}

            {/* Vertical Lines */}
            <div className="absolute top-3 bottom-3 left-[34%] border-l-2 border-dashed border-blue-400/60 pointer-events-none z-20"></div>
            <div className="absolute top-3 bottom-3 right-[34%] border-r-2 border-dashed border-blue-400/60 pointer-events-none z-20"></div>
          </div>

          {/* Planes Legend */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-blue-400 inline-block"></span>
              <span>
                <strong>الخطوط العمودية:</strong> Mid-inguinal lines (من منتصف المغبن إلى منتصف الترقوة).
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-red-400 border-dashed border-t inline-block"></span>
              <span>
                <strong>المستويات الأفقية:</strong> Subcostal (L3) و Inter-tubercular (L5).
              </span>
            </div>
          </div>

          {/* Landmark Distinction Callout */}
          {showPoints && (
            <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 text-xs text-slate-200">
              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <Crosshair className="w-4 h-4 text-amber-400" />
                مقارنة هامة من المحاضرة (Slide 13 & 14):
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>
                  <strong className="text-white">Midinguinal point:</strong> في منتصف المسافة بين الشوكة الحرقفية الأمامية العلوية (ASIS) و{' '}
                  <span className="text-emerald-300 font-semibold">الارتفاق العاني (Symphysis pubis)</span>.
                </li>
                <li>
                  <strong className="text-white">Midpoint of inguinal ligament:</strong> في منتصف المسافة بين (ASIS) و{' '}
                  <span className="text-amber-300 font-semibold">الحديبة العانية (Pubic tubercle)</span>.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Right/Selected Region Details Deck (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-xl text-right">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              المنطقة المحددة
            </div>
            <h4 className="text-2xl font-black text-white mb-1">
              {selectedRegion.nameEn}
            </h4>
            <div className="text-base font-bold text-emerald-300 mb-4">
              {selectedRegion.nameAr}
            </div>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
              {selectedRegion.descriptionAr}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300 flex items-center gap-1">
                <span>الأعضاء التشريحية الموجودة هنا (Organs):</span>
              </div>
              <ul className="space-y-1.5">
                {selectedRegion.organsAr.map((org, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700/60 text-slate-200"
                  >
                    <span className="font-medium">{org}</span>
                    <span className="text-slate-400 font-sans text-xs" dir="ltr">
                      {selectedRegion.organsEn[idx] || ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Transpyloric Highlights if upper row */}
            {selectedRegion.gridRow === 0 && (
              <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-700/40 text-xs text-cyan-200">
                <span className="font-bold">المستوى عبر البواب (Transpyloric plane L1):</span>
                <p className="mt-1 text-slate-300">
                  يمر بقاع المرارة (Fundus of gallbladder)، بواب المعدة (Pylorus)، سرة الكلية اليسرى (Hilum of left kidney)، ومنشأ الـ Coeliac trunk والـ SMA!
                </p>
              </div>
            )}

            {/* Special Appendix Highlight if Right Iliac */}
            {selectedRegion.id === 8 && (
              <div className="mt-4 p-3 rounded-xl bg-rose-950/40 border border-rose-700/40 text-xs text-rose-200">
                <span className="font-bold">أهمية سريرية (Slide 18):</span>
                <p className="mt-1 text-slate-300">
                  تحتوي على الزائدة الدودية، وهي أشهر موضع للمغص الحاد (Severe colicky pain) بسبب التهاب الزائدة أو حصوات الحالب أو مشاكل المبيض.
                </p>
              </div>
            )}
          </div>

          {/* Anatomical Reference Illustration */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-md">
            <div className="relative aspect-video">
              <img
                src="/src/assets/images/abdominal_wall_anatomy_banner_1791068853644.jpg"
                alt="Abdominal Wall Anatomy Illustration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs text-slate-200 font-semibold">
                  مخطط جدار البطن التشريحي (Subdivisions Reference)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
