import React, { useState } from 'react';
import { CLINICAL_CASE_DATA } from '../data/lectureData';
import { FeedbackBanner } from './FeedbackBanner';
import { soundManager } from '../utils/audio';
import { Stethoscope, AlertTriangle, ArrowUpDown, RefreshCw, CheckCircle2 } from 'lucide-react';

export const ClinicalCase: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleToggleOption = (id: string) => {
    soundManager.playClick();
    if (selectedOrder.includes(id)) {
      setSelectedOrder(selectedOrder.filter((item) => item !== id));
      setFeedback(null);
    } else {
      if (selectedOrder.length < 3) {
        setSelectedOrder([...selectedOrder, id]);
        setFeedback(null);
      }
    }
  };

  const handleCheckAnswer = () => {
    // Correct sequence is: 'app' (1st), 'ureter' (2nd), 'gyne' (3rd)
    const isCorrect =
      selectedOrder.length === 3 &&
      selectedOrder[0] === 'app' &&
      selectedOrder[1] === 'ureter' &&
      selectedOrder[2] === 'gyne';

    if (isCorrect) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const handleReset = () => {
    soundManager.playClick();
    setSelectedOrder([]);
    setFeedback(null);
  };

  return (
    <div className="space-y-6">
      {/* Case Header */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-xl">
        <div className="flex items-center gap-2.5 text-rose-400 font-bold text-sm mb-2">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>حالة سريرية هامة من المحاضرة (Slide 18)</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-3">
          {CLINICAL_CASE_DATA.scenarioAr}
        </h3>

        <div className="text-xs sm:text-sm text-slate-300 font-sans p-3 rounded-xl bg-slate-950/70 border border-slate-800" dir="ltr">
          <span className="font-semibold text-rose-400">Dr. Khanfour Question:</span>{' '}
          {CLINICAL_CASE_DATA.scenarioEn}
        </div>
      </div>

      {/* Prominent Feedback Banner ("شتت شتت ليك" or "قوم لف") */}
      {feedback && (
        <FeedbackBanner
          status={feedback}
          explanationAr="الترتيب النموذجي المعتمد من دكتور أيمن خنفور: 1. التهاب الزائدة الدودية الحاد (Acute appendicitis)، 2. حصوة أسفل الحالب (Lower ureteric stone)، 3. حالات أمراض النساء (Gynecological condition مثل الحمل المنتبذ أو كيس المبيض)!"
          explanationEn="The correct arranged pattern of incidence: 1. Appendicitis, 2. Lower ureteric stone, 3. Gynecological conditions (ectopic pregnancy / ovarian cyst)."
          showNext={false}
          onRetry={handleReset}
        />
      )}

      {/* Clinical Board Selection */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Available Options (7 cols) */}
        <div className="md:col-span-7 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            انقر على الخيارات الثلاثة الصحيحة بالترتيب التنازلي حسب معدل الشيوع:
          </div>

          <div className="space-y-2.5">
            {CLINICAL_CASE_DATA.optionsToPick.map((opt) => {
              const isSelected = selectedOrder.includes(opt.id);
              const rankIndex = selectedOrder.indexOf(opt.id);

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleToggleOption(opt.id)}
                  className={`w-full p-4 rounded-xl border text-right transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-rose-950/50 border-rose-500 ring-2 ring-rose-500/40 shadow-md'
                      : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                        isSelected
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {isSelected ? `#${rankIndex + 1}` : '○'}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-white">
                      {opt.textEn}
                    </span>
                  </div>

                  <span className="text-xs text-slate-400">
                    {isSelected ? 'إلغاء التحديد' : 'اختيار'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Sequence Deck (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">ترتيبك الحالي:</span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                تفريغ
              </button>
            </div>

            <div className="space-y-2">
              {[0, 1, 2].map((slotIdx) => {
                const optId = selectedOrder[slotIdx];
                const optObj = CLINICAL_CASE_DATA.optionsToPick.find((o) => o.id === optId);

                return (
                  <div
                    key={slotIdx}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${
                      optObj
                        ? 'bg-slate-900/90 border-slate-600 text-slate-100'
                        : 'bg-slate-900/30 border-dashed border-slate-700 text-slate-500'
                    }`}
                  >
                    <span className="font-bold text-emerald-400">
                      المرتبة {slotIdx + 1}:
                    </span>
                    <span className="font-medium truncate max-w-[200px]">
                      {optObj ? optObj.textEn : 'في انتظار اختيارك...'}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              disabled={selectedOrder.length !== 3}
              onClick={handleCheckAnswer}
              className={`w-full mt-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedOrder.length === 3
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>تحقق من الإجابة!</span>
            </button>
          </div>

          {/* Reference Card */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-slate-200 flex items-center gap-1.5">
              <ArrowUpDown className="w-4 h-4 text-emerald-400" />
              ملاحظة سريرية من يوتيوب د. أيمن خنفور:
            </div>
            <p className="leading-relaxed">
              المغص الحاد في الحفرة الحرقفية اليمنى له تشخيص تفريقي شهير جداً في امتحانات الجراحة والتشريح، والترتيب الدقيق مهم جداً لإنقاذ حياة المريض!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
