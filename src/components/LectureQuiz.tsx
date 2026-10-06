import React, { useState } from 'react';
import { Question } from '../types/quiz';
import { LECTURE_QUESTIONS } from '../data/lectureData';
import { FeedbackBanner } from './FeedbackBanner';
import { soundManager } from '../utils/audio';
import { Check, HelpCircle, Trophy, RotateCcw } from 'lucide-react';

interface LectureQuizProps {
  onScoreUpdate?: (score: number, streak: number) => void;
}

export const LectureQuiz: React.FC<LectureQuizProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);

  const currentQ = LECTURE_QUESTIONS[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (feedback !== null) return; // Prevent multiple clicks
    soundManager.playClick();
    setSelectedOptionId(optionId);

    const chosen = currentQ.options.find((opt) => opt.id === optionId);
    if (!chosen) return;

    if (chosen.isCorrect) {
      setFeedback('correct');
      setScore((prev) => prev + 10);
      setStreak((prev) => {
        const next = prev + 1;
        if (next > maxStreak) setMaxStreak(next);
        return next;
      });
    } else {
      setFeedback('incorrect');
      setStreak(0);
      setWrongAnswers((prev) => [...prev, currentQ]);
    }
  };

  const handleNext = () => {
    soundManager.playClick();
    setSelectedOptionId(null);
    setFeedback(null);

    if (currentIndex < LECTURE_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetryCurrent = () => {
    setSelectedOptionId(null);
    setFeedback(null);
  };

  const handleRestartAll = () => {
    soundManager.playClick();
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setFeedback(null);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
    setWrongAnswers([]);
  };

  if (isCompleted) {
    const totalPossible = LECTURE_QUESTIONS.length * 10;
    const percentage = Math.round((score / totalPossible) * 100);
    const passed = percentage >= 60;

    return (
      <div className="p-8 rounded-3xl bg-slate-900 border-2 border-slate-700 text-center max-w-2xl mx-auto shadow-2xl">
        <Trophy className={`w-16 h-16 mx-auto mb-3 ${passed ? 'text-amber-400' : 'text-slate-500'}`} />

        <div className="text-3xl sm:text-4xl font-black mb-2">
          {passed ? (
            <span className="text-emerald-400">
              أحسنت! إنجاز رائع! عازمون على القمة 🫡
            </span>
          ) : (
            <span className="text-rose-400">
              تحتاج لمزيد من المراجعة لسلايدات د. خنفور!
            </span>
          )}
        </div>

        <p className="text-slate-300 text-base mb-6">
          {passed
            ? `نتيجة مشرفة! لقد أنهيت بنجاح بنك الـ 25 سؤالاً بنسبة ${percentage}%!`
            : `حصلت على ${percentage}% من أصل 25 سؤالاً! تحتاج إعادة المحاولة للوصول إلى القمة.`}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
          <div>
            <div className="text-xs text-slate-400">مجموع النقاط</div>
            <div className="text-2xl font-black text-emerald-400">{score}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">النسبة المئوية</div>
            <div className="text-2xl font-black text-amber-400">{percentage}%</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">أعلى سلسلة صحيحة</div>
            <div className="text-2xl font-black text-cyan-400">🔥 {maxStreak}</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleRestartAll}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20"
        >
          <RotateCcw className="w-4 h-4" />
          <span>إعادة الكويز من البداية</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Question Progress and Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>
            سؤال <strong className="text-white">{currentIndex + 1}</strong> من{' '}
            <strong className="text-white">{LECTURE_QUESTIONS.length}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-amber-400 font-bold font-mono">
            النقاط: {score}
          </span>
          {streak > 1 && (
            <span className="text-emerald-400 font-bold">
              🔥 {streak} إجابات صحيحة متتالية!
            </span>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / LECTURE_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* 25 Questions Quick Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
        {LECTURE_QUESTIONS.map((_, idx) => {
          const isCurrent = currentIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {
                soundManager.playClick();
                setCurrentIndex(idx);
                setSelectedOptionId(null);
                setFeedback(null);
              }}
              className={`w-7 h-7 shrink-0 rounded-lg text-xs font-mono font-bold transition-all ${
                isCurrent
                  ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-400'
                  : idx < currentIndex
                  ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Question Card */}
      <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl text-left" dir="ltr">
        {/* English Question Primary */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
            Question {currentIndex + 1}
          </span>
          <span className="text-xs text-slate-400 font-sans">
            Lecture 8 / 10a
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-relaxed font-sans">
          {currentQ.questionEn}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-sans mb-6 text-right" dir="rtl">
          {currentQ.questionAr}
        </p>

        {/* Options in English */}
        <div className="space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const showCorrectStyle = feedback !== null && opt.isCorrect;
            const showWrongStyle = feedback !== null && isSelected && !opt.isCorrect;

            return (
              <button
                key={opt.id}
                type="button"
                disabled={feedback !== null}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                  showCorrectStyle
                    ? 'bg-emerald-950/70 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/50'
                    : showWrongStyle
                    ? 'bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500/50'
                    : isSelected
                    ? 'bg-slate-700 border-slate-500 text-white'
                    : 'bg-slate-900/80 border-slate-700/80 hover:bg-slate-700/60 hover:border-slate-500 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 w-full">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0 ${
                      showCorrectStyle
                        ? 'bg-emerald-500 text-slate-950'
                        : showWrongStyle
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-800 border border-slate-700 text-slate-300'
                    }`}
                  >
                    {opt.id}
                  </span>
                  <div className="flex-1 font-sans text-left">
                    <div className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-white">
                      {opt.textEn}
                    </div>
                  </div>
                </div>

                {showCorrectStyle && (
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Prominent Feedback Banner ("شتت شتت ليك" or "قوم لف") */}
        {feedback && (
          <FeedbackBanner
            status={feedback}
            explanationAr={currentQ.explanationAr}
            explanationEn={currentQ.explanationEn}
            onNext={handleNext}
            onRetry={feedback === 'incorrect' ? handleRetryCurrent : undefined}
            nextButtonText={
              currentIndex === LECTURE_QUESTIONS.length - 1
                ? 'عرض النتيجة النهائية 🏆'
                : 'السؤال التالي ⬅️'
            }
          />
        )}
      </div>
    </div>
  );
};
