import React, { useState } from 'react';
import { FeedbackBanner } from './FeedbackBanner';
import { soundManager } from '../utils/audio';
import { Compass, CheckCircle2 } from 'lucide-react';

interface StructureItem {
  id: string;
  nameEn: string;
  nameAr: string;
  detailEn: string;
  detailAr: string;
  isPassedByTranspyloric: boolean;
}

const TRANSPYLORIC_ITEMS: StructureItem[] = [
  {
    id: 'pylorus',
    nameEn: 'Pylorus of the stomach',
    nameAr: 'بواب المعدة (Pylorus of stomach)',
    detailEn: 'Slide 10: It passes through the pylorus of the stomach (so it is called the transpyloric plane).',
    detailAr: 'شريحة 10: يمر ببواب المعدة ولذلك سمي أصلاً بالمستوى عبر البواب (Transpyloric plane).',
    isPassedByTranspyloric: true
  },
  {
    id: 'gallbladder',
    nameEn: 'Fundus of the gall bladder',
    nameAr: 'قاع المرارة (Fundus of gall bladder)',
    detailEn: 'Slide 11: At the tip of the right 9th costal cartilage.',
    detailAr: 'شريحة 11: عند قمة الغضروف الضلعي التاسع الأيمن.',
    isPassedByTranspyloric: true
  },
  {
    id: 'kidney_left',
    nameEn: 'Hilum of the left kidney',
    nameAr: 'سرة الكلية اليسرى (Hilum of left kidney)',
    detailEn: 'Slide 11: At the tip of the left 9th costal cartilage (right hilum is 1/2 inch lower).',
    detailAr: 'شريحة 11: عند قمة الغضروف الضلعي التاسع الأيسر (بينما الكلية اليمنى أخفض بنصف بوصة).',
    isPassedByTranspyloric: true
  },
  {
    id: 'coeliac_sma',
    nameEn: 'Origins of Coeliac trunk & SMA',
    nameAr: 'منشأ الجذع الزلاقي والشريان المساريقي العلوي',
    detailEn: 'Slide 12: Coeliac trunk at upper border of L1, and SMA at lower border of L1.',
    detailAr: 'شريحة 12: الجذع الزلاقي عند الحافة العلوية لـ L1، والمساريقي العلوي عند الحافة السفلية لـ L1.',
    isPassedByTranspyloric: true
  },
  {
    id: 'linea_semilunaris',
    nameEn: 'Upper end of linea semilunaris',
    nameAr: 'الطرف العلوي للخط الهلالي (Linea semilunaris)',
    detailEn: 'Slide 12: Lateral margin of rectus abdominis.',
    detailAr: 'شريحة 12: الحافة الوحشية للعضلة المستقيمة البطنية.',
    isPassedByTranspyloric: true
  },
  {
    id: 'appendix',
    nameEn: 'Appendix & Cecum',
    nameAr: 'الزائدة الدودية والأعور',
    detailEn: 'Located in the Right Iliac Fossa, far below the transpyloric plane.',
    detailAr: 'تقع الزائدة في الحفرة الحرقفية اليمنى، بعيداً جداً عن مستوى البواب (L1).',
    isPassedByTranspyloric: false
  },
  {
    id: 'bladder',
    nameEn: 'Urinary Bladder',
    nameAr: 'المثانة البولية',
    detailEn: 'Located in the Suprapubic / Pelvic region.',
    detailAr: 'تقع في المنطقة فوق العانة والحوض، ولا تمر بها بتاتاً.',
    isPassedByTranspyloric: false
  }
];

export const TranspyloricChallenge: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<StructureItem | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleTestStructure = (item: StructureItem, studentGuess: boolean) => {
    soundManager.playClick();
    setSelectedItem(item);

    const isCorrect = studentGuess === item.isPassedByTranspyloric;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 border border-cyan-800/60 shadow-xl">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>تحدي المستوى عبر البواب (Transpyloric Plane - L1)</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          هل يمر المستوى عبر البواب (L1) بهذه التراكيب التشريحية؟
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          يمر المستوى عبر البواب (Transpyloric Plane) في منتصف المسافة بين الناتئ الرهابي (Xiphoid) والسرة، عند مستوى الفقرة القطنية الأولى L.1. اختبر معلوماتك حول التراكيب السبعة المذكورة في الشرائح 10-12!
        </p>
      </div>

      {/* Prominent Feedback Banner ("شتت شتت ليك" or "قوم لف") */}
      {feedback && selectedItem && (
        <FeedbackBanner
          status={feedback}
          explanationAr={selectedItem.detailAr}
          explanationEn={selectedItem.detailEn}
          showNext={false}
          onRetry={() => {
            setFeedback(null);
            setSelectedItem(null);
          }}
        />
      )}

      {/* List of structures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TRANSPYLORIC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="font-bold text-base text-white mb-1">
                {item.nameAr}
              </div>
              <div className="text-xs text-slate-400 font-sans" dir="ltr">
                {item.nameEn}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-end gap-2">
              <span className="text-xs text-slate-400 ml-auto">هل يمر به L1؟</span>
              <button
                type="button"
                onClick={() => handleTestStructure(item, true)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>نعم، يمر به</span>
              </button>
              <button
                type="button"
                onClick={() => handleTestStructure(item, false)}
                className="px-3 py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
              >
                <span>لا، لا يمر به</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
