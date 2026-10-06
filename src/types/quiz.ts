export interface Question {
  id: string;
  category: 'regions' | 'planes' | 'points' | 'organs' | 'clinical';
  questionAr: string;
  questionEn: string;
  options: {
    id: string;
    textAr: string;
    textEn: string;
    isCorrect: boolean;
  }[];
  explanationAr: string;
  explanationEn: string;
  slideRef?: string;
  imageHint?: string;
}

export interface OrganMatchItem {
  id: string;
  organEn: string;
  organAr: string;
  correctRegionId: number;
  correctRegionNameEn: string;
  correctRegionNameAr: string;
}

export interface AbdominalRegionInfo {
  id: number;
  nameEn: string;
  nameAr: string;
  gridRow: number; // 0 to 2
  gridCol: number; // 0 to 2
  organsEn: string[];
  organsAr: string[];
  descriptionEn: string;
  descriptionAr: string;
  color: string;
}

export type QuizMode = 'mcq' | 'matching' | 'explorer' | 'clinical';
