import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  currentTab: 'quiz' | 'explorer' | 'matching' | 'transpyloric' | 'clinical';
  onSelectTab: (tab: 'quiz' | 'explorer' | 'matching' | 'transpyloric' | 'clinical') => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  isMuted,
  onToggleMute
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand Wordmark */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onSelectTab('quiz');
          }}
          className="text-lg sm:text-xl font-black text-white hover:text-emerald-400 transition-colors tracking-tight whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span>عازمون على القمه 🫡</span>
        </button>

        {/* Zone 2: Clean single-line navigation tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onSelectTab('quiz');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              currentTab === 'quiz'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            كويز 25 MCQ
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onSelectTab('matching');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              currentTab === 'matching'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            سؤال التوصيل
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onSelectTab('explorer');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              currentTab === 'explorer'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            المناطق الـ 9
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onSelectTab('transpyloric');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              currentTab === 'transpyloric'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            المستوى عبر البواب (L1)
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onSelectTab('clinical');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              currentTab === 'clinical'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            الحالة السريرية
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={isMuted ? 'تفعيل الصوت' : 'كتم الصوت'}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title={isMuted ? 'تفعيل الصوت' : 'كتم الصوت'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
