/**
 * Gentle, child-friendly procedural music box BGM for Mari Bersuci
 * Built with Web Audio API for 100% reliable offline looping, zero broken audio links,
 * and zero network latency.
 */

class BgmPlayer {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private step: number = 0;

  // Calm, sweet pentatonic notes in F major (F4, G4, A4, C5, D5, F5, G5, A5)
  // Peaceful, cheerful music box / celesta tones
  private melodyNotes: number[] = [
    349.23, // F4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    698.46, // F5
    523.25, // C5
    440.00, // A4
    392.00, // G4
    349.23, // F4
    523.25, // C5
    587.33, // D5
    698.46, // F5
    880.00, // A5
    698.46, // F5
    587.33, // D5
    523.25, // C5
    440.00, // A4
    392.00, // G4
    349.23, // F4
    440.00, // A4
    523.25, // C5
    392.00, // G4
    349.23, // F4
    261.63, // C4
  ];

  private bassNotes: number[] = [
    174.61, // F3
    220.00, // A3
    261.63, // C4
    174.61, // F3
  ];

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();

      // Master gain node
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.audioCtx.currentTime); // gentle background level
      this.masterGain.connect(this.audioCtx.destination);
    }
    return this.audioCtx;
  }

  private playTone(freq: number, duration: number, time: number, isBass: boolean = false) {
    if (!this.audioCtx || !this.masterGain) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Sine + subtle triangle for a music box / glockenspiel character
      osc.type = isBass ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, time);

      // Sweet bell-like envelope: immediate soft attack, gentle exponential decay
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(isBass ? 0.08 : 0.15, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // ignore
    }
  }

  private scheduleNextNote() {
    if (!this.isPlaying || !this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const noteFreq = this.melodyNotes[this.step % this.melodyNotes.length];
    
    // Play melody note
    this.playTone(noteFreq, 1.2, now, false);

    // Play soft bass note on every 4th step
    if (this.step % 4 === 0) {
      const bassFreq = this.bassNotes[(Math.floor(this.step / 4)) % this.bassNotes.length];
      this.playTone(bassFreq, 1.8, now, true);
    }

    this.step++;

    // Tempo: ~340ms per note (~88 BPM gentle lullaby)
    this.timerId = window.setTimeout(() => {
      this.scheduleNextNote();
    }, 340);
  }

  public async start(): Promise<boolean> {
    try {
      const ctx = this.getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      this.isPlaying = true;
      this.isMuted = false;
      if (this.masterGain) {
        this.masterGain.gain.cancelScheduledValues(ctx.currentTime);
        this.masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      }

      if (this.timerId === null) {
        this.step = 0;
        this.scheduleNextNote();
      }
      return true;
    } catch {
      return false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggleMute(): boolean {
    if (!this.isPlaying) {
      this.start();
      return true;
    }

    if (!this.audioCtx || !this.masterGain) return false;

    if (this.isMuted) {
      // Unmute
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.12, this.audioCtx.currentTime + 0.1);
      this.isMuted = false;
      return true;
    } else {
      // Mute
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.1);
      this.isMuted = true;
      return false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const bgmInstance = new BgmPlayer();
