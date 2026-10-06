import { Question, OrganMatchItem, AbdominalRegionInfo } from '../types/quiz';

// 9 Abdominal Regions according to Dr. Ayman Khanfour's lecture
export const ABDOMINAL_REGIONS: AbdominalRegionInfo[] = [
  {
    id: 1,
    nameEn: 'Right Hypochondrium',
    nameAr: 'المراق الأيمن (Right Hypochondrium)',
    gridRow: 0,
    gridCol: 0,
    organsEn: ['Liver (major part)', 'Gallbladder', 'Hepatic flexure of colon', 'Upper right kidney'],
    organsAr: ['الكبد (معظمه)', 'المرارة', 'الثنية الكبدية للقولون', 'القطب العلوي للكلية اليمنى'],
    descriptionEn: 'Bounded superiorly by diaphragm, inferiorly by subcostal plane (L3), medially by right lateral line.',
    descriptionAr: 'يحده من الأعلى الحجاب الحاجز ومن الأسفل المستوى تحت الضلعي (L3) ومن الداخل الخط الجانبي الأيمن.',
    color: 'from-amber-500/20 to-amber-600/30'
  },
  {
    id: 5,
    nameEn: 'Epigastrium',
    nameAr: 'المنطقة الشرسوفية / فم المعدة (Epigastrium)',
    gridRow: 0,
    gridCol: 1,
    organsEn: ['Stomach (lesser curvature & body)', 'Pancreas', 'Abdominal aorta', 'Celiac trunk', 'Left lobe of liver'],
    organsAr: ['المعدة', 'البنكرياس', 'الأبهر البطني', 'الجذع الزلاقي (Coeliac trunk)', 'الفص الأيسر للكبد'],
    descriptionEn: 'Central upper region. The transpyloric plane (L1) passes across it midway between xiphisternum and umbilicus.',
    descriptionAr: 'المنطقة العلوية الوسطى، يمر بها المستوى عبر البواب (L1) في منتصف المسافة بين الناتئ الرهابي والسرة.',
    color: 'from-rose-500/20 to-rose-600/30'
  },
  {
    id: 2,
    nameEn: 'Left Hypochondrium',
    nameAr: 'المراق الأيسر (Left Hypochondrium)',
    gridRow: 0,
    gridCol: 2,
    organsEn: ['Spleen', 'Fundus & body of Stomach', 'Splenic flexure of colon', 'Tail of pancreas'],
    organsAr: ['الطحال (Spleen)', 'قاع المعدة وجسمها', 'الثنية الطحالية للقولون', 'ذيل البنكرياس'],
    descriptionEn: 'Contains spleen and splenic flexure, protected by lower left ribs.',
    descriptionAr: 'يحتوي على الطحال والثنية الطحالية ومحمي بالأضلاع اليسرى السفلية.',
    color: 'from-purple-500/20 to-purple-600/30'
  },
  {
    id: 4,
    nameEn: 'Right Lumbar',
    nameAr: 'المنطقة القطنية اليمنى (Right Lumbar)',
    gridRow: 1,
    gridCol: 0,
    organsEn: ['Ascending colon', 'Lower pole of right kidney', 'Parts of small intestine'],
    organsAr: ['القولون الصاعد', 'القطب السفلي للكلية اليمنى', 'أجزاء من الأمعاء الدقيقة'],
    descriptionEn: 'Flank region between subcostal plane (L3) and inter-tubercular plane (L5).',
    descriptionAr: 'منطقة الخاصرة اليمنى بين المستوى تحت الضلعي (L3) والمستوى بين الحديبتين (L5).',
    color: 'from-blue-500/20 to-blue-600/30'
  },
  {
    id: 7,
    nameEn: 'Umbilical',
    nameAr: 'المنطقة السرية (Umbilical Region)',
    gridRow: 1,
    gridCol: 1,
    organsEn: ['Small intestine (jejunum & ileum)', 'Transverse colon', 'Abdominal aorta', 'Inferior vena cava'],
    organsAr: ['الأمعاء الدقيقة (الصائم واللفائفي)', 'القولون المستعرض', 'الأبهر والوريد الأجوف السفلي'],
    descriptionEn: 'Surrounds the umbilicus, centered between the horizontal and vertical planes.',
    descriptionAr: 'تحيط بالسرة في المنتصف تماماً بين المستويات العمودية والأفقية.',
    color: 'from-emerald-500/20 to-emerald-600/30'
  },
  {
    id: 3,
    nameEn: 'Left Lumbar',
    nameAr: 'المنطقة القطنية اليسرى (Left Lumbar)',
    gridRow: 1,
    gridCol: 2,
    organsEn: ['Left kidney (hilum / lower pole)', 'Descending colon'],
    organsAr: ['الكلية اليسرى (Left kidney)', 'القولون النازل'],
    descriptionEn: 'Contains descending colon and left kidney (lecture key: Left kidney -> Left lumbar).',
    descriptionAr: 'تحتوي على الكلية اليسرى والقولون النازل.',
    color: 'from-indigo-500/20 to-indigo-600/30'
  },
  {
    id: 8,
    nameEn: 'Right Iliac (Right Iliac Fossa)',
    nameAr: 'الحفرة الحرقفية اليمنى (Right Iliac Fossa)',
    gridRow: 2,
    gridCol: 0,
    organsEn: ['Appendix (الزائدة)', 'Cecum (الأعور)', 'Terminal ileum', 'Right ovary/tube in females'],
    organsAr: ['الزائدة الدودية (Appendix)', 'الأعور', 'نهاية اللفائفي', 'المبيض وقناة فالوب اليمنى'],
    descriptionEn: 'Site of McBurney point and appendix. Major site for acute colicky pain.',
    descriptionAr: 'موقع الزائدة الدودية ونقطة ماكبيرني، أشهر موقع للمغص الحاد (Severe colicky pain).',
    color: 'from-red-500/20 to-red-600/30'
  },
  {
    id: 6,
    nameEn: 'Hypogastrium (Suprapubic)',
    nameAr: 'المنطقة فوق العانة / الخثل (Suprapubic / Hypogastrium)',
    gridRow: 2,
    gridCol: 1,
    organsEn: ['Urinary bladder (when full)', 'Uterus (in females)', 'Sigmoid colon', 'Loops of ileum'],
    organsAr: ['المثانة البولية (Urinary bladder)', 'الرحم عند الإناث', 'القولون السيني'],
    descriptionEn: 'Lower central region directly superior to symphysis pubis.',
    descriptionAr: 'المنطقة السفلية الوسطى مباشرة فوق الارتفاق العاني.',
    color: 'from-cyan-500/20 to-cyan-600/30'
  },
  {
    id: 9,
    nameEn: 'Left Iliac (Left Iliac Fossa)',
    nameAr: 'الحفرة الحرقفية اليسرى (Left Iliac Fossa)',
    gridRow: 2,
    gridCol: 2,
    organsEn: ['Sigmoid colon', 'Left ovary/tube in females', 'Lower loops of small intestine'],
    organsAr: ['القولون السيني (Sigmoid colon)', 'المبيض وقناة فالوب اليسرى'],
    descriptionEn: 'Houses the sigmoid colon before entering the pelvis.',
    descriptionAr: 'تحتوي على القولون السيني وأجزاء من الأمعاء.',
    color: 'from-violet-500/20 to-violet-600/30'
  }
];

// Matching Questions straight from Slide 16 & 17
export const MATCHING_ITEMS: OrganMatchItem[] = [
  {
    id: 'A',
    organEn: 'Left kidney',
    organAr: 'الكلية اليسرى (Left kidney)',
    correctRegionId: 3,
    correctRegionNameEn: 'Left lumbar',
    correctRegionNameAr: 'Left lumbar (القطنية اليسرى)'
  },
  {
    id: 'B',
    organEn: 'Spleen',
    organAr: 'الطحال (Spleen)',
    correctRegionId: 1,
    correctRegionNameEn: 'Left hypochondrium',
    correctRegionNameAr: 'Left hypochondrium (المراق الأيسر)'
  },
  {
    id: 'C',
    organEn: 'Urinary bladder',
    organAr: 'المثانة البولية (Urinary bladder)',
    correctRegionId: 6,
    correctRegionNameEn: 'Suprapubic',
    correctRegionNameAr: 'Suprapubic (فوق العانة / Hypogastric)'
  },
  {
    id: 'D',
    organEn: 'Stomach',
    organAr: 'المعدة (Stomach)',
    correctRegionId: 1,
    correctRegionNameEn: 'Left hypochondrium',
    correctRegionNameAr: 'Left hypochondrium (المراق الأيسر)'
  },
  {
    id: 'E',
    organEn: 'Appendix',
    organAr: 'الزائدة الدودية (Appendix)',
    correctRegionId: 8,
    correctRegionNameEn: 'Right iliac',
    correctRegionNameAr: 'Right iliac (الحفرة الحرقفية اليمنى)'
  },
  {
    id: 'F',
    organEn: 'Liver',
    organAr: 'الكبد (Liver)',
    correctRegionId: 2,
    correctRegionNameEn: 'Right hypochondrium',
    correctRegionNameAr: 'Right hypochondrium (المراق الأيمن)'
  }
];

// Complete 25 MCQs covering Dr. Ayman Khanfour's lecture: Subdivisions of Anterior Abdominal Wall
export const LECTURE_QUESTIONS: Question[] = [
  {
    id: 'q1',
    category: 'organs',
    questionEn: 'The liver lies mainly into which of the following regions? (Slide 15)',
    questionAr: 'يقع الكبد بشكل رئيسي في أي من المناطق التشريحية التالية؟ (سؤال شريحة 15)',
    options: [
      { id: 'a', textEn: 'Left hypochondrium', textAr: 'Left hypochondrium (المراق الأيسر)', isCorrect: false },
      { id: 'b', textEn: 'Right lumbar', textAr: 'Right lumbar (المنطقة القطنية اليمنى)', isCorrect: false },
      { id: 'c', textEn: 'Right hypochondrium', textAr: 'Right hypochondrium (المراق الأيمن)', isCorrect: true },
      { id: 'd', textEn: 'Epigastrium', textAr: 'Epigastrium (المنطقة الشرسوفية)', isCorrect: false }
    ],
    explanationEn: 'According to Dr. Ayman Khanfour (Slide 15): The liver occupies mainly the Right Hypochondrium, extending to the epigastrium.',
    explanationAr: 'وفقاً للمحاضرة (شريحة 15): يقع الكبد بشكل رئيسي في المراق الأيمن (Right Hypochondrium) ويمتد قليلاً نحو الشرسوف.'
  },
  {
    id: 'q2',
    category: 'planes',
    questionEn: 'At what vertebral level does the Transpyloric plane lie? (Slide 10)',
    questionAr: 'عند أي مستوى فقري يقع المستوى عبر البواب (Transpyloric plane)؟ (شريحة 10)',
    options: [
      { id: 'a', textEn: 'At the level of T12', textAr: 'عند مستوى الفقرة الصدرية T12', isCorrect: false },
      { id: 'b', textEn: 'At the level of the first lumbar vertebra (L.1)', textAr: 'عند مستوى الفقرة القطنية الأولى (L.1)', isCorrect: true },
      { id: 'c', textEn: 'At the level of L.3 (Subcostal plane)', textAr: 'عند مستوى الفقرة القطنية الثالثة (L.3)', isCorrect: false },
      { id: 'd', textEn: 'At the level of L.5 (Inter-tubercular plane)', textAr: 'عند مستوى الفقرة القطنية الخامسة (L.5)', isCorrect: false }
    ],
    explanationEn: 'Slide 10: Transpyloric plane lies at the level of the first lumbar vertebra (L.1), midway between xiphoid process and umbilicus.',
    explanationAr: 'شريحة 10: يقع المستوى عبر البواب عند مستوى الفقرة القطنية الأولى (L.1) في منتصف المسافة بين الناتئ الرهابي والسرة.'
  },
  {
    id: 'q3',
    category: 'points',
    questionEn: 'What is the precise definition of the Midinguinal Point? (Slide 13)',
    questionAr: 'ما هو التعريف الدقيق لنقطة منتصف المغبن (Midinguinal point)؟ (شريحة 13)',
    options: [
      { id: 'a', textEn: 'Midway between Anterior Superior Iliac Spine (ASIS) and Symphysis Pubis', textAr: 'في منتصف المسافة بين الشوكة الحرقفية (ASIS) والارتفاق العاني (Symphysis pubis)', isCorrect: true },
      { id: 'b', textEn: 'Midway between Anterior Superior Iliac Spine and Pubic Tubercle', textAr: 'في منتصف المسافة بين الشوكة الحرقفية والحديبة العانية (Pubic tubercle)', isCorrect: false },
      { id: 'c', textEn: 'Midway between Umbilicus and Symphysis Pubis', textAr: 'بين السرة والارتفاق العاني', isCorrect: false },
      { id: 'd', textEn: 'At the iliac crest tubercle', textAr: 'عند حديبة العرف الحرقفي', isCorrect: false }
    ],
    explanationEn: 'Slide 13: Midinguinal point lies halfway between the anterior superior iliac spine and the symphysis pubis.',
    explanationAr: 'شريحة 13: نقطة Midinguinal point تقع في منتصف المسافة تماماً بين الشوكة الحرقفية الأمامية العلوية (ASIS) والارتفاق العاني (Symphysis pubis).'
  },
  {
    id: 'q4',
    category: 'points',
    questionEn: 'Where does the Midpoint of the Inguinal Ligament lie? (Slide 14)',
    questionAr: 'أين تقع نقطة منتصف الرباط المغبني (Midpoint of inguinal ligament)؟ (شريحة 14)',
    options: [
      { id: 'a', textEn: 'Midway between ASIS and Pubic Tubercle', textAr: 'في منتصف المسافة بين الشوكة الحرقفية (ASIS) والحديبة العانية (Pubic tubercle)', isCorrect: true },
      { id: 'b', textEn: 'Midway between ASIS and Symphysis Pubis', textAr: 'في منتصف المسافة بين الشوكة الحرقفية والارتفاق العاني', isCorrect: false },
      { id: 'c', textEn: 'Midway between Umbilicus and Xiphoid', textAr: 'بين السرة والناتئ الرهابي', isCorrect: false },
      { id: 'd', textEn: 'Over the deep inguinal ring only', textAr: 'فوق الحلقة المغبنية العميقة فقط', isCorrect: false }
    ],
    explanationEn: 'Slide 14: Midpoint of inguinal ligament lies midway between Anterior superior iliac spine (ASIS) and Pubic tubercle.',
    explanationAr: 'شريحة 14: نقطة منتصف الرباط المغبني تقع بين الشوكة الحرقفية الأمامية العلوية (ASIS) والحديبة العانية (Pubic tubercle).'
  },
  {
    id: 'q5',
    category: 'planes',
    questionEn: 'The Subcostal Plane lies at the lowest limit of the costal margin. What is its vertebral level? (Slide 6)',
    questionAr: 'يقع المستوى تحت الضلعي (Subcostal plane) عند أدنى نقطة للحافة الضلعية، ما هو مستواه الفقري؟ (شريحة 6)',
    options: [
      { id: 'a', textEn: 'At the level of L.1', textAr: 'مستوى الفقرة L.1', isCorrect: false },
      { id: 'b', textEn: 'At the level of L.3', textAr: 'مستوى الفقرة القطنية الثالثة L.3', isCorrect: true },
      { id: 'c', textEn: 'At the level of L.5', textAr: 'مستوى الفقرة القطنية الخامسة L.5', isCorrect: false },
      { id: 'd', textEn: 'At the level of T.10', textAr: 'مستوى الفقرة الصدرية العاشرة', isCorrect: false }
    ],
    explanationEn: 'Slide 6: Subcostal plane lies at the lowest limit of the costal margin, at the level of L.3.',
    explanationAr: 'شريحة 6: المستوى تحت الضلعي يمر عند أدنى حد للحافة الضلعية عند مستوى الفقرة القطنية الثالثة (L.3).'
  },
  {
    id: 'q6',
    category: 'planes',
    questionEn: 'The Inter-tubercular plane passes between the tubercles of the iliac crests at the level of: (Slide 6)',
    questionAr: 'يمر المستوى بين الحديبتين (Inter-tubercular plane) بين حديبتي العرف الحرقفي عند مستوى: (شريحة 6)',
    options: [
      { id: 'a', textEn: 'At the level of L.2', textAr: 'مستوى L.2', isCorrect: false },
      { id: 'b', textEn: 'At the level of L.4', textAr: 'مستوى L.4', isCorrect: false },
      { id: 'c', textEn: 'At the level of L.5', textAr: 'مستوى الفقرة القطنية الخامسة L.5', isCorrect: true },
      { id: 'd', textEn: 'Sacral S.1', textAr: 'مستوى الفقرة العجزية الأولى S.1', isCorrect: false }
    ],
    explanationEn: 'Slide 6: Inter-tubercular plane passes between the tubercles of the iliac crests at the level of L.5.',
    explanationAr: 'شريحة 6: يمر المستوى بين الحديبتين عند مستوى الفقرة القطنية الخامسة (L.5).'
  },
  {
    id: 'q7',
    category: 'planes',
    questionEn: 'Through which anatomical landmark of the gallbladder does the transpyloric plane pass? (Slide 11)',
    questionAr: 'أي جزء من المرارة (Gallbladder) يمر عبره المستوى عبر البواب (Transpyloric plane)؟ (شريحة 11)',
    options: [
      { id: 'a', textEn: 'Fundus of the gall bladder (tip of right 9th costal cartilage)', textAr: 'قاع المرارة (Fundus) عند قمة الغضروف الضلعي التاسع الأيمن', isCorrect: true },
      { id: 'b', textEn: 'Neck of the gall bladder', textAr: 'عنق المرارة (Neck)', isCorrect: false },
      { id: 'c', textEn: 'Cystic duct', textAr: 'القناة المرارية (Cystic duct)', isCorrect: false },
      { id: 'd', textEn: 'Hartmann pouch', textAr: 'جيب هارتمان', isCorrect: false }
    ],
    explanationEn: 'Slide 11: It passes through the fundus of the gall bladder (tip of the right 9th costal cartilage).',
    explanationAr: 'شريحة 11: يمر المستوى عبر البواب بقاع المرارة (Fundus of gallbladder) عند قمة الغضروف الضلعي التاسع في الجهة اليمنى.'
  },
  {
    id: 'q8',
    category: 'planes',
    questionEn: 'How does the transpyloric plane intersect the renal hila? (Slide 11)',
    questionAr: 'كيف يتقاطع المستوى عبر البواب مع سرتي الكليتين (Renal hila)؟ (شريحة 11)',
    options: [
      { id: 'a', textEn: 'Cuts the hilum of the left kidney; right kidney hilum lies 1/2 inch lower', textAr: 'يقطع سرة الكلية اليسرى؛ وسرة الكلية اليمنى تقع أخفض بنصف بوصة (½ inch)', isCorrect: true },
      { id: 'b', textEn: 'Cuts both hila at exactly the same level', textAr: 'يقطع السرتين في نفس المستوى تماماً', isCorrect: false },
      { id: 'c', textEn: 'Cuts the right kidney hilum only', textAr: 'يقطع سرة الكلية اليمنى فقط', isCorrect: false },
      { id: 'd', textEn: 'Passes superior to both kidneys', textAr: 'يمر فوق الكليتين تماماً', isCorrect: false }
    ],
    explanationEn: 'Slide 11: Cuts hilum of left kidney at tip of left 9th costal cartilage; hilum of right kidney lies 1/2 inch lower due to liver.',
    explanationAr: 'شريحة 11: يقطع سرة الكلية اليسرى عند قمة الغضروف الضلعي التاسع الأيسر، بينما الكلية اليمنى أخفض بنصف بوصة بسبب وجود الكبد.'
  },
  {
    id: 'q9',
    category: 'planes',
    questionEn: 'Which major arterial vessels arise at the upper and lower borders of L.1 crossed by this plane? (Slide 12)',
    questionAr: 'ما هما الشريانان الرئيسيان اللذان ينشآن عند الحافتين العلوية والسفلية للفقرة L.1؟ (شريحة 12)',
    options: [
      { id: 'a', textEn: 'Coeliac trunk at upper border of L1, and Superior Mesenteric Artery at lower border of L1', textAr: 'الجذع الزلاقي (Coeliac trunk) عند الحافة العلوية لـ L1، والمساريقي العلوي (SMA) عند الحافة السفلية لـ L1', isCorrect: true },
      { id: 'b', textEn: 'Renal arteries and Inferior Mesenteric Artery', textAr: 'الشرايين الكلوية والمساريقي السفلي', isCorrect: false },
      { id: 'c', textEn: 'Common iliac arteries', textAr: 'الشرايين الحرقفية المشتركة', isCorrect: false },
      { id: 'd', textEn: 'Internal iliac arteries', textAr: 'الشرايين الحرقفية الداخلية', isCorrect: false }
    ],
    explanationEn: 'Slide 12: Coeliac trunk originates at upper border of L1, and superior mesenteric artery originates at lower border of L1.',
    explanationAr: 'شريحة 12: ينشأ الجذع الزلاقي (Coeliac trunk) عند الحافة العلوية لـ L1، والمساريقي العلوي (SMA) عند الحافة السفلية لـ L1.'
  },
  {
    id: 'q10',
    category: 'regions',
    questionEn: 'What is the primary value of dividing the anterior abdominal wall into 9 regions? (Slide 3)',
    questionAr: 'ما هي الفائدة والقيمة التشريحية والسريرية لتقسيم جدار البطن إلى 9 مناطق؟ (شريحة 3)',
    options: [
      { id: 'a', textEn: 'To localize anatomical sites of organs & identify organs occupying each region', textAr: 'لتحديد الموقع التشريحي لكل عضو ومعرفة الأعضاء الموجودة في كل منطقة', isCorrect: true },
      { id: 'b', textEn: 'Purely cosmetic classification', textAr: 'تقسيم شكلي جمالي دون أي فائدة سريرية', isCorrect: false },
      { id: 'c', textEn: 'To measure abdominal circumference only', textAr: 'لقياس محيط البطن فقط', isCorrect: false },
      { id: 'd', textEn: 'To count ribs on physical examination', textAr: 'لعد الأضلاع فقط', isCorrect: false }
    ],
    explanationEn: 'Slide 3: Value of abdominal regions: 1) To localize anatomical site of each organ. 2) To identify organs occupying each region.',
    explanationAr: 'شريحة 3: فائدة المناطق التسعة: تحديد الموقع الدقيق لكل عضو وتشخيص الأعضاء الموجودة في كل منطقة عند فحص المريض.'
  },
  {
    id: 'q11',
    category: 'planes',
    questionEn: 'Which structure has its upper end cut by the transpyloric plane? (Slide 12)',
    questionAr: 'أي تركيب تشريحي يقطع المستوى عبر البواب (Transpyloric plane) طرفه العلوي؟ (شريحة 12)',
    options: [
      { id: 'a', textEn: 'Linea semilunaris (lateral margin of rectus abdominis)', textAr: 'الخط الهلالي Linea semilunaris (الحافة الوحشية للعضلة المستقيمة البطنية)', isCorrect: true },
      { id: 'b', textEn: 'Linea alba lower end', textAr: 'الطرف السفلي للخط الأبيض Linea alba', isCorrect: false },
      { id: 'c', textEn: 'Arcuate line', textAr: 'الخط المقوس Arcuate line', isCorrect: false },
      { id: 'd', textEn: 'Inguinal ligament', textAr: 'الرباط المغبني Inguinal ligament', isCorrect: false }
    ],
    explanationEn: 'Slide 12: Transpyloric plane cuts the upper end of linea semilunaris (lateral margin of rectus abdominis).',
    explanationAr: 'شريحة 12: يقطع المستوى عبر البواب الطرف العلوي للخط الهلالي (Linea semilunaris) وهو الحافة الجانبية للعضلة المستقيمة البطنية.'
  },
  {
    id: 'q12',
    category: 'planes',
    questionEn: 'The vertical planes of the abdominal wall extend between which two points? (Slide 5)',
    questionAr: 'يمتد كل من المستويين العموديين (Vertical planes) لجدار البطن بين أي نقطتين؟ (شريحة 5)',
    options: [
      { id: 'a', textEn: 'From mid-inguinal point to the mid-clavicular point', textAr: 'من نقطة منتصف المغبن (Mid-inguinal point) إلى نقطة منتصف الترقوة (Mid-clavicular point)', isCorrect: true },
      { id: 'b', textEn: 'From pubic tubercle to the sternal angle', textAr: 'من الحديبة العانية إلى زاوية القص', isCorrect: false },
      { id: 'c', textEn: 'From ASIS to the axilla', textAr: 'من الشوكة الحرقفية إلى الإبط', isCorrect: false },
      { id: 'd', textEn: 'From umbilicus to the nipple', textAr: 'من السرة إلى الحلمة', isCorrect: false }
    ],
    explanationEn: 'Slide 5: Each vertical plane extends from the mid-inguinal point (halfway between ASIS and symphysis pubis) to the mid-clavicular point.',
    explanationAr: 'شريحة 5: يمتد الخط الجانبي العمودي من نقطة منتصف المغبن (بين ASIS والارتفاق العاني) إلى منتصف الترقوة.'
  },
  {
    id: 'q13',
    category: 'organs',
    questionEn: 'In the lecture matching question (Slide 16 & 17), the Spleen is located in:',
    questionAr: 'في سؤال التوصيل بالمحاضرة (شريحة 16 و 17)، أين يقع الطحال (Spleen)؟',
    options: [
      { id: 'a', textEn: 'Left hypochondrium (Region 1)', textAr: 'المراق الأيسر (Left hypochondrium)', isCorrect: true },
      { id: 'b', textEn: 'Right hypochondrium (Region 2)', textAr: 'المراق الأيمن (Right hypochondrium)', isCorrect: false },
      { id: 'c', textEn: 'Left lumbar (Region 3)', textAr: 'القطنية اليسرى (Left lumbar)', isCorrect: false },
      { id: 'd', textEn: 'Suprapubic (Region 6)', textAr: 'فوق العانة (Suprapubic)', isCorrect: false }
    ],
    explanationEn: 'Slide 16-17 answer: Spleen matches with Left hypochondrium (1).',
    explanationAr: 'شريحة 17: الطحال (Spleen) متصل بمنطقة المراق الأيسر (Left hypochondrium) تحت حماية الأضلاع اليسرى السفلية.'
  },
  {
    id: 'q14',
    category: 'organs',
    questionEn: 'In the lecture matching question (Slide 16 & 17), the Appendix is located in:',
    questionAr: 'في سؤال التوصيل بالمحاضرة (شريحة 16 و 17)، أين تقع الزائدة الدودية (Appendix)؟',
    options: [
      { id: 'a', textEn: 'Right iliac (Region 8)', textAr: 'الحفرة الحرقفية اليمنى (Right iliac / RIF)', isCorrect: true },
      { id: 'b', textEn: 'Left iliac (Region 7)', textAr: 'الحفرة الحرقفية اليسرى (Left iliac)', isCorrect: false },
      { id: 'c', textEn: 'Umbilical', textAr: 'المنطقة السرية', isCorrect: false },
      { id: 'd', textEn: 'Epigastrium', textAr: 'المنطقة الشرسوفية', isCorrect: false }
    ],
    explanationEn: 'Slide 16-17 answer: Appendix matches with Right iliac (8).',
    explanationAr: 'شريحة 17: الزائدة الدودية (Appendix) متصلة بالحفرة الحرقفية اليمنى (Right iliac).'
  },
  {
    id: 'q15',
    category: 'organs',
    questionEn: 'In the lecture matching question (Slide 16 & 17), the Urinary Bladder corresponds to:',
    questionAr: 'في سؤال التوصيل بالمحاضرة (شريحة 16 و 17)، أين تقع المثانة البولية (Urinary bladder)؟',
    options: [
      { id: 'a', textEn: 'Suprapubic / Hypogastrium (Region 6)', textAr: 'المنطقة فوق العانة (Suprapubic / Hypogastrium)', isCorrect: true },
      { id: 'b', textEn: 'Left lumbar (Region 3)', textAr: 'القطنية اليسرى (Left lumbar)', isCorrect: false },
      { id: 'c', textEn: 'Right lumbar (Region 4)', textAr: 'القطنية اليمنى (Right lumbar)', isCorrect: false },
      { id: 'd', textEn: 'Right iliac (Region 8)', textAr: 'الحرقفية اليمنى (Right iliac)', isCorrect: false }
    ],
    explanationEn: 'Slide 16-17 answer: Urinary bladder matches with Suprapubic (6).',
    explanationAr: 'شريحة 17: المثانة البولية (Urinary bladder) متصلة بمنطقة فوق العانة (Suprapubic).'
  },
  {
    id: 'q16',
    category: 'organs',
    questionEn: 'In the lecture matching key (Slide 17), Stomach was designated to:',
    questionAr: 'في جدول إجابات المحاضرة (شريحة 17)، تم توصيل المعدة (Stomach) بمنطقة:',
    options: [
      { id: 'a', textEn: 'Left hypochondrium (1)', textAr: 'المراق الأيسر (Left hypochondrium)', isCorrect: true },
      { id: 'b', textEn: 'Right lumbar (4)', textAr: 'القطنية اليمنى (Right lumbar)', isCorrect: false },
      { id: 'c', textEn: 'Right iliac (8)', textAr: 'الحرقفية اليمنى (Right iliac)', isCorrect: false },
      { id: 'd', textEn: 'Suprapubic (6)', textAr: 'فوق العانة (Suprapubic)', isCorrect: false }
    ],
    explanationEn: 'Slide 17: D (Stomach) is matched with 1 (Left hypochondrium).',
    explanationAr: 'شريحة 17: تم وصل المعدة برقم 1 (Left hypochondrium) حيث يقع قاع المعدة وجسمها الرئيسي.'
  },
  {
    id: 'q17',
    category: 'organs',
    questionEn: 'In Slide 17 matching key, the Left Kidney was matched with:',
    questionAr: 'في شريحة الإجابات 17، تم وصل الكلية اليسرى (Left Kidney) مع:',
    options: [
      { id: 'a', textEn: 'Left lumbar (Region 3)', textAr: 'المنطقة القطنية اليسرى (Left lumbar)', isCorrect: true },
      { id: 'b', textEn: 'Left hypochondrium (Region 1)', textAr: 'المراق الأيسر (Left hypochondrium)', isCorrect: false },
      { id: 'c', textEn: 'Right hypochondrium (Region 2)', textAr: 'المراق الأيمن (Right hypochondrium)', isCorrect: false },
      { id: 'd', textEn: 'Suprapubic (Region 6)', textAr: 'فوق العانة (Suprapubic)', isCorrect: false }
    ],
    explanationEn: 'Slide 17: Left kidney (A) is matched with Left lumbar (3).',
    explanationAr: 'شريحة 17: تم وصل الكلية اليسرى برقم 3 (Left lumbar).'
  },
  {
    id: 'q18',
    category: 'clinical',
    questionEn: 'Slide 18: What is the single most common cause of severe colicky pain in the right iliac fossa?',
    questionAr: 'شريحة 18: ما هو السبب الأول والأكثر شيوعاً للمغص الحاد في الحفرة الحرقفية اليمنى؟',
    options: [
      { id: 'a', textEn: 'Acute Appendicitis', textAr: 'التهاب الزائدة الدودية الحاد (Acute Appendicitis)', isCorrect: true },
      { id: 'b', textEn: 'Cholecystitis', textAr: 'التهاب المرارة الحاد (Cholecystitis)', isCorrect: false },
      { id: 'c', textEn: 'Splenic infarction', textAr: 'احتشاء الطحال (Splenic infarction)', isCorrect: false },
      { id: 'd', textEn: 'Peptic ulcer perforation', textAr: 'انثقاب قرحة هضمية', isCorrect: false }
    ],
    explanationEn: 'Slide 18 & comments: The most common causes of right iliac fossa pain arranged by incidence start with Acute Appendicitis.',
    explanationAr: 'شريحة 18: السبب الأول في الترتيب لمغص الحفرة الحرقفية اليمنى هو التهاب الزائدة الدودية الحاد (Acute Appendicitis).'
  },
  {
    id: 'q19',
    category: 'clinical',
    questionEn: 'Slide 18: What is the second most common cause of colicky pain in the right iliac fossa?',
    questionAr: 'شريحة 18: ما هو السبب الثاني في ترتيب الشيوع للمغص الحاد في الحفرة الحرقفية اليمنى؟',
    options: [
      { id: 'a', textEn: 'Lower ureteric stone (Right ureteric colic)', textAr: 'حصوة أسفل الحالب الأيمن (Lower ureteric stone)', isCorrect: true },
      { id: 'b', textEn: 'Gastritis', textAr: 'التهاب المعدة', isCorrect: false },
      { id: 'c', textEn: 'Hepatitis', textAr: 'التهاب الكبد', isCorrect: false },
      { id: 'd', textEn: 'Pancreatitis', textAr: 'التهاب البنكرياس', isCorrect: false }
    ],
    explanationEn: 'Slide 18 comments: The second cause arranged by incidence is Lower ureteric stone.',
    explanationAr: 'شريحة 18: السبب الثاني هو حصوة أسفل الحالب الأيمن (Lower ureteric stone) المسببة للمغص الكلوي الحالبي.'
  },
  {
    id: 'q20',
    category: 'clinical',
    questionEn: 'Slide 18: In females presenting with severe colicky pain in right iliac fossa, which condition ranks third?',
    questionAr: 'شريحة 18: عند الإناث المصابات بمغص حاد في الحفرة الحرقفية اليمنى، ما هو السبب الثالث بالترتيب؟',
    options: [
      { id: 'a', textEn: 'Gynecological condition (ectopic pregnancy / ovarian cyst)', textAr: 'حالات نسائية (حمل منتبذ خارج الرحم أو كيس مبيض ملتوٍ / متمزق)', isCorrect: true },
      { id: 'b', textEn: 'Duodenal ulcer', textAr: 'قرحة الإثني عشر', isCorrect: false },
      { id: 'c', textEn: 'Aortic aneurysm', textAr: 'أم دم الأبهر البطني', isCorrect: false },
      { id: 'd', textEn: 'Splenomegaly', textAr: 'تضخم الطحال', isCorrect: false }
    ],
    explanationEn: 'Slide 18 comments: Gynecological condition such as ectopic pregnancy or ovarian cyst ranks third in females.',
    explanationAr: 'شريحة 18: الحالات النسائية كالحمل خارج الرحم (Ectopic pregnancy) أو التواء كيس المبيض تأتي في المرتبة الثالثة.'
  },
  {
    id: 'q21',
    category: 'planes',
    questionEn: 'Slide 10: The transpyloric plane lies midway between which two surface landmarks?',
    questionAr: 'شريحة 10: يقع المستوى عبر البواب (Transpyloric plane) في منتصف المسافة بين أي علامتين سطحيتين؟',
    options: [
      { id: 'a', textEn: 'Xiphoid process of sternum and Umbilicus', textAr: 'الناتئ الرهابي للقص (Xiphoid process) والسرة (Umbilicus)', isCorrect: true },
      { id: 'b', textEn: 'Jugular notch and Umbilicus', textAr: 'الثلمة الوداجية والسرة', isCorrect: false },
      { id: 'c', textEn: 'Umbilicus and Pubic symphysis', textAr: 'السرة والارتفاق العاني', isCorrect: false },
      { id: 'd', textEn: 'Nipple and ASIS', textAr: 'الحلمة والشوكة الحرقفية', isCorrect: false }
    ],
    explanationEn: 'Slide 10: It lies midway between the xiphoid process of the sternum and the umbilicus.',
    explanationAr: 'شريحة 10: يقع تماماً في منتصف المسافة بين الناتئ الرهابي لعظم القص والسرة.'
  },
  {
    id: 'q22',
    category: 'planes',
    questionEn: 'Slide 6: The Subcostal Plane lies at the lowest limit of:',
    questionAr: 'شريحة 6: يقع المستوى تحت الضلعي (Subcostal plane) عند أدنى حد لـ:',
    options: [
      { id: 'a', textEn: 'The costal margin (10th costal cartilage)', textAr: 'الحافة الضلعية (Costal margin) عند الغضروف العاشر', isCorrect: true },
      { id: 'b', textEn: 'The 12th floating rib', textAr: 'الضلع السائب الثاني عشر', isCorrect: false },
      { id: 'c', textEn: 'The clavicle', textAr: 'عظم الترقوة', isCorrect: false },
      { id: 'd', textEn: 'The iliac crest', textAr: 'العرف الحرقفي', isCorrect: false }
    ],
    explanationEn: 'Slide 6: It lies at the lowest limit of the costal margin, at the level of L.3.',
    explanationAr: 'شريحة 6: يمر عند أدنى حد للحافة الضلعية (Costal margin).'
  },
  {
    id: 'q23',
    category: 'planes',
    questionEn: 'Slide 6: The Inter-tubercular plane passes between which specific bony landmarks?',
    questionAr: 'شريحة 6: يمر المستوى بين الحديبتين (Inter-tubercular plane) بين أي معالم عظمية محددة؟',
    options: [
      { id: 'a', textEn: 'Tubercles of the iliac crests', textAr: 'حديبات العرف الحرقفي (Tubercles of iliac crests)', isCorrect: true },
      { id: 'b', textEn: 'Pubic tubercles', textAr: 'الحديبات العانية (Pubic tubercles)', isCorrect: false },
      { id: 'c', textEn: 'Ischial tuberosities', textAr: 'الأحدوبات الإسكية (Ischial tuberosities)', isCorrect: false },
      { id: 'd', textEn: 'Greater trochanters', textAr: 'المدورين الكبيرين لعظم الفخذ', isCorrect: false }
    ],
    explanationEn: 'Slide 6: It passes between the tubercles of the iliac crests (level of L.5).',
    explanationAr: 'شريحة 6: يمر بين حديبات العرف الحرقفي (Tubercles of the iliac crests) عند مستوى L.5.'
  },
  {
    id: 'q24',
    category: 'planes',
    questionEn: 'Slide 12: What does the Linea Semilunaris represent?',
    questionAr: 'شريحة 12: ماذا يمثل الخط الهلالي (Linea Semilunaris) تشريحياً؟',
    options: [
      { id: 'a', textEn: 'The lateral margin of rectus abdominis muscle', textAr: 'الحافة الوحشية/الجانبية للعضلة المستقيمة البطنية (Rectus abdominis)', isCorrect: true },
      { id: 'b', textEn: 'The midline fusion of abdominal aponeuroses', textAr: 'الالتحام الناصف لأوتار عضلات البطن (Linea alba)', isCorrect: false },
      { id: 'c', textEn: 'The lower border of posterior rectus sheath', textAr: 'الحافة السفلية لغمد المستقيمة الخلفي', isCorrect: false },
      { id: 'd', textEn: 'The medial margin of psoas major', textAr: 'الحافة الإنسية للعضلة القطنية الكبيرة', isCorrect: false }
    ],
    explanationEn: 'Slide 12: Linea semilunaris is the lateral margin of rectus abdominis; its upper end is cut by the transpyloric plane.',
    explanationAr: 'شريحة 12: الخط الهلالي (Linea semilunaris) هو الحافة الجانبية للعضلة المستقيمة البطنية.'
  },
  {
    id: 'q25',
    category: 'points',
    questionEn: 'Slide 13: Clinically, which major vascular pulsation is located directly at the Midinguinal Point?',
    questionAr: 'شريحة 13: سريرياً، نبض أي شريان رئيسي يمكن جسه مباشرة عند نقطة منتصف المغبن (Midinguinal point)؟',
    options: [
      { id: 'a', textEn: 'Femoral artery pulsation', textAr: 'نبض الشريان الفخذي (Femoral artery pulsation)', isCorrect: true },
      { id: 'b', textEn: 'Popliteal artery pulsation', textAr: 'نبض الشريان المأبضي', isCorrect: false },
      { id: 'c', textEn: 'Radial artery pulsation', textAr: 'نبض الشريان الكعبري', isCorrect: false },
      { id: 'd', textEn: 'Dorsalis pedis pulsation', textAr: 'نبض شريان ظهر القدم', isCorrect: false }
    ],
    explanationEn: 'Slide 13 Clinical correlation: The femoral artery pulsation lies directly deep to the midinguinal point (midway between ASIS and symphysis pubis).',
    explanationAr: 'شريحة 13 ربط سريري: يقع نبض الشريان الفخذي (Femoral artery) مباشرة تحت نقطة منتصف المغبن (Midinguinal point).'
  }
];

// Clinical Case Differential Diagnosis (Slide 18)
export const CLINICAL_CASE_DATA = {
  scenarioEn: 'A patient has severe colicky pain in the right iliac fossa. Enumerate the most common three cases of colicky pain in this region in an arranged pattern of incidence?',
  scenarioAr: 'مريض يعاني من ألم مغصي حاد وشديد في الحفرة الحرقفية اليمنى (Right iliac fossa). اذكر بالترتيب أكثر 3 أسباب شائعة لهذا الألم حسب معدل الحدوث (Slide 18)؟',
  causes: [
    {
      rank: 1,
      nameEn: 'Acute Appendicitis',
      nameAr: 'التهاب الزائدة الدودية الحاد (Acute Appendicitis)',
      detailsEn: 'Most frequent emergency surgical condition in the right iliac fossa.',
      detailsAr: 'السبب الجراحي الإسعافي الأول والأكثر شيوعاً على الإطلاق في الحفرة الحرقفية اليمنى.'
    },
    {
      rank: 2,
      nameEn: 'Lower Ureteric Stone / Right Ureteric Colic',
      nameAr: 'حصوة أسفل الحالب الأيمن (Lower Ureteric Stone / Colic)',
      detailsEn: 'Colicky pain radiating towards the groin / genitalia.',
      detailsAr: 'مغص كلوي حالبي حاد ومتقطع، يسمّع عادة باتجاه الفخذ والأعضاء التناسلية.'
    },
    {
      rank: 3,
      nameEn: 'Gynecological Conditions (in females)',
      nameAr: 'حالات نسائية عند الإناث (حمل منتبذ / كيس مبيض ملتوٍ أو متمزق)',
      detailsEn: 'Ectopic pregnancy or ruptured/twisted ovarian cyst in female patients.',
      detailsAr: 'حمل خارج الرحم (Ectopic pregnancy) أو انفتال / تمزق كيس المبيض (Ovarian cyst).'
    }
  ],
  optionsToPick: [
    { id: 'app', textEn: '1. Acute Appendicitis (التهاب الزائدة)', isCause: true, correctRank: 1 },
    { id: 'ureter', textEn: '2. Lower ureteric stone (حصوة أسفل الحالب)', isCause: true, correctRank: 2 },
    { id: 'gyne', textEn: '3. Gynecological condition (حمل خارج الرحم / كيس مبيض)', isCause: true, correctRank: 3 },
    { id: 'liver', textEn: 'Hepatitis (التهاب كبد حاد)', isCause: false, correctRank: null },
    { id: 'spleen', textEn: 'Splenic rupture (تمزق طحال)', isCause: false, correctRank: null }
  ]
};
