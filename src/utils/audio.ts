// Web Audio API Synthesizer for instant, zero-dependency comic sound effects

class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // "شتت🙂↕️ليك🙌🏻" Energetic celebratory fanfare with cheerful chord + cartoon sparkle!
  playSuccess() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Cheerful rising notes: C5, E5, G5, C6
      const notes = [523.25, 659.25, 783.99, 1046.5];
      
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.28, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });

      // Extra comedy celebration chime & vibrato flourish
      setTimeout(() => {
        if (!this.ctx || !this.enabled) return;
        const bell = this.ctx.createOscillator();
        const bellGain = this.ctx.createGain();
        const t = this.ctx.currentTime;
        bell.type = 'sine';
        bell.frequency.setValueAtTime(1318.51, t); // E6
        bell.frequency.exponentialRampToValueAtTime(1567.98, t + 0.3); // G6 glide
        bellGain.gain.setValueAtTime(0.25, t);
        bellGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
        bell.connect(bellGain);
        bellGain.connect(this.ctx.destination);
        bell.start(t);
        bell.stop(t + 0.6);
      }, 320);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // "قوم لف😢😝" Comical cartoon slide down + funny classic cartoon wah-wah-wah-waaah!
  playFail() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Cartoon slip-slide whistle effect at start
      const slideOsc = this.ctx.createOscillator();
      const slideGain = this.ctx.createGain();
      slideOsc.type = 'triangle';
      slideOsc.frequency.setValueAtTime(650, now);
      slideOsc.frequency.exponentialRampToValueAtTime(180, now + 0.22);
      slideGain.gain.setValueAtTime(0.25, now);
      slideGain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      slideOsc.connect(slideGain);
      slideGain.connect(this.ctx.destination);
      slideOsc.start(now);
      slideOsc.stop(now + 0.23);

      // Comical descending sad trombone wah-wah (Eb4 -> D4 -> Db4 -> C3 long vibrato)
      const freqs = [311.13, 293.66, 277.18, 220.0];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + 0.24 + idx * 0.18;
        const dur = idx === 3 ? 0.45 : 0.16;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime);
        if (idx === 3) {
          // Add comic pitch vibrato and deep drop
          osc.frequency.linearRampToValueAtTime(freq * 0.82, startTime + dur);
        } else {
          osc.frequency.exponentialRampToValueAtTime(freq * 0.92, startTime + dur);
        }

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + dur + 0.02);
      });
    } catch {
      // Audio autoplay fallback
    }
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(350, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }
}

export const soundManager = new SoundManager();
