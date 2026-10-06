import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface FeedbackBannerProps {
  status: 'correct' | 'incorrect' | null;
  explanationAr: string;
  explanationEn: string;
  onNext?: () => void;
  onRetry?: () => void;
  nextButtonText?: string;
  showNext?: boolean;
}

export const FeedbackBanner: React.FC<FeedbackBannerProps> = ({
  status,
  explanationAr,
  explanationEn,
  onNext,
  onRetry,
  nextButtonText = 'السؤال التالي ⬅️',
  showNext = true,
}) => {
  useEffect(() => {
    if (status === 'correct') {
      soundManager.playSuccess();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10B981', '#34D399', '#FBBF24', '#38BDF8']
        });
      } catch {
        // Fallback if canvas-confetti is not loaded
      }
    } else if (status === 'incorrect') {
      soundManager.playFail();
    }
  }, [status]);

  if (!status) return null;

  const isCorrect = status === 'correct';

  return (
    <div
      role="alert"
      className={`mt-6 rounded-2xl border-2 p-5 transition-all duration-300 shadow-xl ${
        isCorrect
          ? 'bg-gradient-to-br from-emerald-950/80 via-emerald-900/60 to-slate-900 border-emerald-500/80 text-emerald-100 shadow-emerald-950/50 animate-bounce-fun'
          : 'bg-gradient-to-br from-rose-950/80 via-rose-900/60 to-slate-900 border-rose-500/80 text-rose-100 shadow-rose-950/50 animate-shake'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Big Catchphrase Badge */}
        <div
          className={`flex flex-col items-center justify-center px-6 py-4 rounded-xl font-black text-2xl sm:text-3xl text-center shadow-lg border relative group transition-all duration-300 hover-pulse-glow hover:animate-pulse hover:scale-105 cursor-pointer ${
            isCorrect
              ? 'bg-emerald-500 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/30'
              : 'bg-rose-600 text-white border-rose-400 ring-4 ring-rose-500/30'
          }`}
        >
          {isCorrect ? (
            <>
              <span className="tracking-wide">شتت ليك</span>
              <span className="text-3xl sm:text-4xl mt-1">😹🙌🏻</span>
            </>
          ) : (
            <>
              <span className="tracking-wide">قوم لف</span>
              <span className="text-3xl sm:text-4xl mt-1">🫠🤧</span>
            </>
          )}
          <button
            type="button"
            onClick={() => {
              if (isCorrect) soundManager.playSuccess();
              else soundManager.playFail();
            }}
            title="إعادة تشغيل المؤثر الصوتي"
            className="mt-1 text-[11px] font-sans font-bold underline opacity-80 hover:opacity-100 transition-opacity"
          >
            🔊 إعادة تشغيل المؤثر الصوتي
          </button>
        </div>

        {/* Details & Explanation */}
        <div className="flex-1 text-right w-full">
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
            )}
            <h4 className="text-xl font-bold text-white">
              {isCorrect
                ? 'إجابة عبقرية وصحيحة 100%!'
                : 'إجابة خاطئة! راجع تشريح د. أيمن خنفور!'}
            </h4>
          </div>

          <p className="text-sm sm:text-base leading-relaxed font-medium mb-1 text-slate-200">
            {explanationAr}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1 border-t border-white/10 pt-1.5" dir="ltr">
            📖 {explanationEn}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 mt-4">
            {!isCorrect && onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                حاول مرة ثانية
              </button>
            )}

            {showNext && onNext && (
              <button
                type="button"
                onClick={onNext}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all shadow-md ${
                  isCorrect
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:shadow-emerald-500/25'
                    : 'bg-rose-500 hover:bg-rose-400 text-white hover:shadow-rose-500/25'
                }`}
              >
                <span>{nextButtonText}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
