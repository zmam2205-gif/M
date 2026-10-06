import React, { useState } from 'react';
import { MATCHING_ITEMS } from '../data/lectureData';
import { FeedbackBanner } from './FeedbackBanner';
import { soundManager } from '../utils/audio';
import { Check, Shuffle, Award, BookOpen } from 'lucide-react';

const REGION_OPTIONS = [
  { id: 1, nameEn: 'Left hypochondrium', nameAr: 'المراق الأيسر (Left hypochondrium)' },
  { id: 2, nameEn: 'Right hypochondrium', nameAr: 'المراق الأيمن (Right hypochondrium)' },
  { id: 3, nameEn: 'Left lumbar', nameAr: 'القطنية اليسرى (Left lumbar)' },
  { id: 4, nameEn: 'Right lumbar', nameAr: 'القطنية اليمنى (Right lumbar)' },
  { id: 5, nameEn: 'Epigastrium', nameAr: 'الشرسوفية (Epigastrium)' },
  { id: 6, nameEn: 'Suprapubic', nameAr: 'فوق العانة (Suprapubic)' },
  { id: 7, nameEn: 'Left iliac', nameAr: 'الحرقفية اليسرى (Left iliac)' },
  { id: 8, nameEn: 'Right iliac', nameAr: 'الحرقفية اليمنى (Right iliac)' }
];

export const MatchingGame: React.FC = () => {
  const [userMatches, setUserMatches] = useState<Record<string, number | null>>({
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null
  });

  const [activeItem, setActiveItem] = useState<string | null>('A');
  const [feedbackState, setFeedbackState] = useState<{
    status: 'correct' | 'incorrect' | null;
    explanationAr: string;
    explanationEn: string;
  } | null>(null);

  const [completedCount, setCompletedCount] = useState(0);

  const handleSelectRegion = (regionId: number) => {
    if (!activeItem) return;

    soundManager.playClick();
    const item = MATCHING_ITEMS.find((it) => it.id === activeItem);
    if (!item) return;

    const isCorrect = item.correctRegionId === regionId;

    if (isCorrect) {
      const updated = { ...userMatches, [activeItem]: regionId };
      setUserMatches(updated);

      const correctCount = Object.values(updated).filter((val) => val !== null).length;
      setCompletedCount(correctCount);

      setFeedbackState({
        status: 'correct',
        explanationAr: `إجابة صحيحة! عضو ${item.organAr} يقع في منطقة ${item.correctRegionNameAr} تماماً كما في الشريحة 17 من المحاضرة!`,
        explanationEn: `${item.organEn} is correctly matched to ${item.correctRegionNameEn}. (Lecture Slide 17)`
      });

      // Auto-advance to next unmatched item
      const nextUnmatched = MATCHING_ITEMS.find(
        (it) => it.id !== activeItem && updated[it.id] === null
      );
      if (nextUnmatched) {
        setTimeout(() => {
          setActiveItem(nextUnmatched.id);
        }, 800);
      }
    } else {
      setFeedbackState({
        status: 'incorrect',
        explanationAr: `إجابة خاطئة! عضو ${item.organAr} لا يقع في هذه المنطقة! راجع جدول التوصيل في الشريحة 16 و 17.`,
        explanationEn: `Incorrect match for ${item.organEn}. Check the answer key in lecture Slide 17.`
      });
    }
  };

  const handleReset = () => {
    soundManager.playClick();
    setUserMatches({
      A: null,
      B: null,
      C: null,
      D: null,
      E: null,
      F: null
    });
    setActiveItem('A');
    setFeedbackState(null);
    setCompletedCount(0);
  };

  const isAllDone = Object.values(userMatches).every((val) => val !== null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">
              سؤال التوصيل الرسمي من المحاضرة: Match the following???
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            وفقاً لشريحتي 16 و 17 من محاضرة د. أيمن خنفور: صل كل عضو بالمنطقة التشريحية المناسبة له!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
            تمت مطابقة: {completedCount} / 6
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
            إعادة تعيين
          </button>
        </div>
      </div>

      {/* Prominent Feedback Banner ("شتت شتت ليك" or "قوم لف") */}
      {feedbackState && (
        <FeedbackBanner
          status={feedbackState.status}
          explanationAr={feedbackState.explanationAr}
          explanationEn={feedbackState.explanationEn}
          showNext={false}
          onRetry={() => setFeedbackState(null)}
        />
      )}

      {/* All Done Celebration */}
      {isAllDone && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-2 border-emerald-500 text-center shadow-2xl">
          <Award className="w-12 h-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
          <h4 className="text-2xl font-black text-white">
            مبارك الإنجاز والتفوق! عازمون على القمه 🫡
          </h4>
          <p className="text-emerald-200 text-sm mt-1">
            لقد طابقت جميع الأعضاء الستة بنجاح وبدقة 100% وفقاً لشريحة إجابات المحاضرة الرسمية!
          </p>
        </div>
      )}

      {/* Two Column Layout: Organs on Right, Regions on Left */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Organs Column (5 cols) */}
        <div className="md:col-span-5 space-y-2.5">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            1. اختر العضو التشريحي (Organ)
          </div>

          {MATCHING_ITEMS.map((item) => {
            const isMatched = userMatches[item.id] !== null;
            const isSelected = activeItem === item.id;
            const matchedRegion = isMatched
              ? REGION_OPTIONS.find((r) => r.id === userMatches[item.id])
              : null;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveItem(item.id);
                  setFeedbackState(null);
                }}
                className={`w-full p-3.5 rounded-xl border text-right transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-indigo-900/40 border-indigo-400 ring-2 ring-indigo-500/50 shadow-md'
                    : isMatched
                    ? 'bg-emerald-950/40 border-emerald-600/60 text-slate-200'
                    : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isMatched
                        ? 'bg-emerald-500 text-slate-950'
                        : isSelected
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {item.id}
                  </span>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-white">
                      {item.organAr}
                    </div>
                    {isMatched && matchedRegion && (
                      <div className="text-xs text-emerald-400 font-medium">
                        ✓ متصل بـ: {matchedRegion.nameEn}
                      </div>
                    )}
                  </div>
                </div>

                {isMatched ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <span className="text-xs text-slate-400">
                    {isSelected ? 'قيد الاختيار...' : 'انقر للتوصيل'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Regions Column (7 cols) */}
        <div className="md:col-span-7 space-y-2.5">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            2. اختر المنطقة التشريحية التابعة له (Abdominal Region)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {REGION_OPTIONS.map((region) => {
              // check if any organ is matched to this region
              const matchedItems = MATCHING_ITEMS.filter(
                (it) => userMatches[it.id] === region.id
              );

              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => handleSelectRegion(region.id)}
                  disabled={!activeItem}
                  className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between group ${
                    matchedItems.length > 0
                      ? 'bg-emerald-950/30 border-emerald-500/60 shadow-sm'
                      : 'bg-slate-800/80 border-slate-700 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs text-slate-300">
                      {region.id}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-emerald-300">
                      اضغط للمطابقة
                    </span>
                  </div>

                  <div className="mt-2">
                    <div className="font-bold text-sm text-slate-100 group-hover:text-white">
                      {region.nameEn}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {region.nameAr}
                    </div>
                  </div>

                  {matchedItems.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-slate-700/60 flex flex-wrap gap-1">
                      {matchedItems.map((it) => (
                        <span
                          key={it.id}
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        >
                          {it.id}: {it.organEn}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
