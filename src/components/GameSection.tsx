import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  GAME_STAGE_1_ITEMS,
  GAME_STAGE_2_SCENARIOS,
  GAME_STAGE_3_SERTU_STEPS,
} from '../data/gameData';
import { GameItem, SectionId, StepItem, UserProgress } from '../types';
import { RibbonBow, SparkleIcon, CleanStarIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  Gamepad2,
  Trophy,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Award,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onNavigate: (section: SectionId) => void;
}

export function GameSection({ progress, onUpdateProgress, onNavigate }: Props) {
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3>(1);

  // Stage 1 State: Categorization
  const [stage1Items, setStage1Items] = useState<GameItem[]>(GAME_STAGE_1_ITEMS);
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
  const [stage1Matches, setStage1Matches] = useState<Record<string, 'mukhaffafah' | 'mutawassitah' | 'mughallazah'>>({});
  const [stage1Feedback, setStage1Feedback] = useState<string | null>(null);
  const [stage1Score, setStage1Score] = useState(progress.gameScores.stage1Score || 0);

  // Stage 2 State: Scenario Choice
  const [stage2ScenarioIdx, setStage2ScenarioIdx] = useState(0);
  const [stage2Score, setStage2Score] = useState(progress.gameScores.stage2Score || 0);
  const [stage2SelectedOption, setStage2SelectedOption] = useState<number | null>(null);
  const [stage2Feedback, setStage2Feedback] = useState<{ isCorrect: boolean; feedback: string } | null>(null);

  // Stage 3 State: Step Ordering
  const [scrambledSteps, setScrambledSteps] = useState<StepItem[]>([
    GAME_STAGE_3_SERTU_STEPS[2],
    GAME_STAGE_3_SERTU_STEPS[0],
    GAME_STAGE_3_SERTU_STEPS[3],
    GAME_STAGE_3_SERTU_STEPS[1],
  ]);
  const [stage3Checked, setStage3Checked] = useState(false);
  const [stage3Correct, setStage3Correct] = useState(false);
  const [stage3Score, setStage3Score] = useState(progress.gameScores.stage3Score || 0);

  // Confetti trigger helper
  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F8C8DC', '#D98BAA', '#A84D75', '#FFD700', '#FFFFFF'],
    });
  };

  // Stage 1 Logic: Match item to category
  const handleAssignCategory = (cat: 'mukhaffafah' | 'mutawassitah' | 'mughallazah') => {
    if (!selectedItem) {
      setStage1Feedback("Sila klik salah satu kad najis di bawah terlebih dahulu!");
      return;
    }

    if (selectedItem.category === cat) {
      setStage1Matches((prev) => ({ ...prev, [selectedItem.id]: cat }));
      const newScore = stage1Score + 20;
      setStage1Score(newScore);
      setStage1Feedback(`Tahniah! ${selectedItem.name} adalah ${cat.toUpperCase()} (+20 markah)`);
      setSelectedItem(null);

      const totalMatched = Object.keys(stage1Matches).length + 1;
      if (totalMatched === stage1Items.length) {
        triggerCelebration();
        onUpdateProgress((prev) => ({
          ...prev,
          gameScores: {
            ...prev.gameScores,
            stage1Score: newScore,
            stage1Completed: true,
          },
        }));
      }
    } else {
      setStage1Feedback(`Kurang tepat. Cuba fikirkan semula: adakah ia najis ringan, sederhana atau berat?`);
    }
  };

  // Stage 2 Logic: Choice question
  const handleStage2Answer = (optIdx: number, isCorrect: boolean, feedback: string) => {
    setStage2SelectedOption(optIdx);
    setStage2Feedback({ isCorrect, feedback });

    if (isCorrect) {
      const newScore = stage2Score + 25;
      setStage2Score(newScore);
    }
  };

  const handleNextStage2Scenario = () => {
    setStage2SelectedOption(null);
    setStage2Feedback(null);
    if (stage2ScenarioIdx < GAME_STAGE_2_SCENARIOS.length - 1) {
      setStage2ScenarioIdx((prev) => prev + 1);
    } else {
      triggerCelebration();
      onUpdateProgress((prev) => ({
        ...prev,
        gameScores: {
          ...prev.gameScores,
          stage2Score: stage2Score,
          stage2Completed: true,
        },
      }));
      setCurrentStage(3);
    }
  };

  // Stage 3 Logic: Move step up/down
  const moveStep = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === scrambledSteps.length - 1) return;

    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    const newSteps = [...scrambledSteps];
    const temp = newSteps[index];
    newSteps[index] = newSteps[targetIdx];
    newSteps[targetIdx] = temp;
    setScrambledSteps(newSteps);
    setStage3Checked(false);
  };

  const handleCheckStage3 = () => {
    const isSuccess = scrambledSteps.every((s, i) => s.order === i + 1);
    setStage3Checked(true);
    setStage3Correct(isSuccess);

    if (isSuccess) {
      const finalScore = 50;
      setStage3Score(finalScore);
      triggerCelebration();
      onUpdateProgress((prev) => ({
        ...prev,
        gameScores: {
          ...prev.gameScores,
          stage3Score: finalScore,
          stage3Completed: true,
        },
      }));
    }
  };

  const totalGameScore = stage1Score + stage2Score + stage3Score;

  return (
    <section id="permainan" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-extrabold text-pink-700 uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Dunia Permainan Pendidikan Kanak-Kanak</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-2 drop-shadow-2xs">
            Misi Ribbon Suci: Cabaran Penjaga Kebersihan
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-2xl mx-auto border border-pink-100">
            Bantu watak cilik kita membersihkan alam daripada najis, kumpul mata ganjaran dan menangi Lencana Ribbon Emas!
          </p>

          {/* Overall Game Score Ribbon Bar */}
          <div className="mt-4 inline-flex items-center gap-3 px-6 py-2.5 bg-white border-2 border-pink-300 rounded-full shadow-md animate-pulse-glow">
            <Trophy className="w-5 h-5 text-amber-500 animate-gentle-sway" />
            <span className="text-xs font-extrabold text-pink-900">
              Jumlah Mata Terkumpul:
            </span>
            <span className="font-display text-xl font-black text-rose-600 tabular-nums">
              {totalGameScore} Mata
            </span>
          </div>
        </div>

        {/* 3D Game World Artwork Spotlight Banner */}
        <div className="max-w-5xl mx-auto mb-10 coquette-card p-3 sm:p-4 overflow-hidden shadow-xl">
          <div className="relative rounded-2xl overflow-hidden border-2 border-pink-300">
            <img
              src="/src/assets/images/permainan_ribbon_world_1792827638936.jpg"
              alt="Dunia Fantasi Ribbon Suci"
              className="w-full h-auto aspect-21/9 sm:aspect-16/7 object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 px-4 py-1.5 rounded-full text-xs font-extrabold text-pink-900 border border-pink-300 shadow-md flex items-center gap-2">
              <FlowerSticker className="w-4 h-4" />
              <span>Pulau Ribbon Bersuci: 3 Peringkat Misi</span>
            </div>
          </div>
        </div>

        {/* 3 Stages Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { stage: 1, label: 'Peringkat 1: Padankan & Kenali', isDone: progress.gameScores.stage1Completed },
            { stage: 2, label: 'Peringkat 2: Misi Pilih Jawapan', isDone: progress.gameScores.stage2Completed },
            { stage: 3, label: 'Peringkat 3: Susun Langkah Sertu', isDone: progress.gameScores.stage3Completed },
          ].map((item) => (
            <button
              key={item.stage}
              onClick={() => setCurrentStage(item.stage as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-sm hover:scale-102 ${
                currentStage === item.stage
                  ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-md shadow-pink-200 ring-3 ring-pink-300'
                  : 'bg-white/90 text-pink-900 hover:bg-pink-100 border-2 border-pink-200'
              }`}
            >
              <span>{item.label}</span>
              {item.isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </button>
          ))}
        </div>

        {/* STAGE 1: PADANKAN & KENALI */}
        {currentStage === 1 && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <div className="coquette-card p-6 text-center">
              <span className="px-3.5 py-1 bg-pink-100 text-pink-800 text-xs font-extrabold rounded-full border border-pink-200">
                Arahan Peringkat 1:
              </span>
              <h3 className="font-display text-2xl font-extrabold text-pink-950 mt-2 mb-1">
                Padankan Setiap Najis dengan Kategori yang Betul
              </h3>
              <p className="text-xs sm:text-sm text-pink-900 font-semibold max-w-lg mx-auto">
                <strong>Langkah:</strong> 1. Klik salah satu kad najis di bawah untuk memilihnya. 2. Kemudian klik bakul kategori (Mukhaffafah / Mutawassitah / Mughallazah) yang sesuai.
              </p>

              {stage1Feedback && (
                <div className="mt-3 p-2.5 bg-pink-50 border-2 border-pink-300 rounded-xl text-xs font-bold text-rose-800 animate-fadeIn">
                  {stage1Feedback}
                </div>
              )}
            </div>

            {/* 3 Category Target Dropzones / Buckets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'mukhaffafah', title: '1. Mukhaffafah (Ringan)', color: 'bg-pink-50/90 border-pink-400 text-pink-950' },
                { id: 'mutawassitah', title: '2. Mutawassitah (Sederhana)', color: 'bg-rose-50/90 border-rose-400 text-rose-950' },
                { id: 'mughallazah', title: '3. Mughallazah (Berat)', color: 'bg-purple-50/90 border-purple-400 text-purple-950' },
              ].map((bucket) => {
                const matchedItems = stage1Items.filter((item) => stage1Matches[item.id] === bucket.id);
                return (
                  <div
                    key={bucket.id}
                    onClick={() => handleAssignCategory(bucket.id as any)}
                    className={`p-6 rounded-3xl border-3 border-dashed ${bucket.color} transition-all cursor-pointer hover:scale-102 flex flex-col justify-between min-h-[190px] shadow-sm backdrop-blur-xs`}
                  >
                    <div>
                      <h4 className="font-display text-sm font-extrabold mb-1 flex items-center justify-between">
                        <span>{bucket.title}</span>
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-white border-2 border-current">
                          {matchedItems.length}
                        </span>
                      </h4>
                      <p className="text-[11px] opacity-80 mb-3 font-semibold">
                        Klik sini untuk masukkan pilihan anda
                      </p>

                      <div className="space-y-1.5">
                        {matchedItems.map((item) => (
                          <div key={item.id} className="p-2.5 bg-white rounded-xl text-xs font-bold shadow-2xs border-2 border-pink-200 text-pink-950 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selectable Items */}
            <div className="coquette-card p-6">
              <h4 className="font-display text-sm font-extrabold text-pink-950 mb-3 flex items-center gap-2">
                <SparkleIcon className="w-4 h-4 text-pink-500" />
                Kad Najis untuk Dipadankan (Klik untuk pilih):
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {stage1Items.map((item) => {
                  const isMatched = !!stage1Matches[item.id];
                  const isSelected = selectedItem?.id === item.id;

                  if (isMatched) return null;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between shadow-2xs ${
                        isSelected
                          ? 'bg-rose-50 border-rose-500 ring-4 ring-rose-200 shadow-md scale-102'
                          : 'bg-white/90 border-pink-200 hover:border-pink-400'
                      }`}
                    >
                      <span className="text-xs font-extrabold text-pink-950 mb-1">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-pink-800 font-medium">
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              {Object.keys(stage1Matches).length === stage1Items.length && (
                <div className="mt-4 p-5 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <h4 className="font-display text-lg font-extrabold text-emerald-950">
                    🎉 Tahniah! Peringkat 1 Selesai dengan Sempurna!
                  </h4>
                  <p className="text-xs text-emerald-900 font-bold">
                    Anda telah berjaya memadankan semua najis ke kategori yang betul.
                  </p>
                  <button
                    onClick={() => setCurrentStage(2)}
                    className="px-6 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer hover:scale-102"
                  >
                    <span>Masuk ke Peringkat 2</span> <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STAGE 2: MISI PILIH JAWAPAN */}
        {currentStage === 2 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            {(() => {
              const scenario = GAME_STAGE_2_SCENARIOS[stage2ScenarioIdx];
              return (
                <div className="coquette-card p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 bg-pink-100 text-pink-800 text-xs font-extrabold rounded-full border border-pink-200">
                      Peringkat 2 · Situasi {stage2ScenarioIdx + 1} daripada {GAME_STAGE_2_SCENARIOS.length}
                    </span>
                    <span className="text-xs font-black text-rose-600 bg-white px-3 py-1 rounded-full border border-pink-200 shadow-2xs">
                      Mata Peringkat: {stage2Score}
                    </span>
                  </div>

                  <div className="p-5 bg-pink-50/80 rounded-2xl border-2 border-pink-200">
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-pink-950 mb-1">
                      {scenario.scenario}
                    </h3>
                    <p className="text-xs sm:text-sm text-rose-800 font-bold">
                      {scenario.question}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {scenario.options.map((opt, oIdx) => {
                      const isChosen = stage2SelectedOption === oIdx;
                      return (
                        <button
                          key={oIdx}
                          disabled={stage2SelectedOption !== null}
                          onClick={() => handleStage2Answer(oIdx, opt.isCorrect, opt.feedback)}
                          className={`w-full text-left p-4 rounded-2xl text-xs sm:text-sm font-bold border-2 transition-all cursor-pointer ${
                            isChosen
                              ? opt.isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-sm'
                                : 'bg-rose-50 border-rose-400 text-rose-950 shadow-sm'
                              : 'bg-white border-pink-200 hover:border-pink-400 text-pink-950 disabled:opacity-60'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="leading-relaxed">{opt.text}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {stage2Feedback && (
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm font-bold ${stage2Feedback.isCorrect ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' : 'bg-rose-100 text-rose-950 border border-rose-300'}`}>
                      {stage2Feedback.feedback}
                    </div>
                  )}

                  {stage2SelectedOption !== null && (
                    <div className="text-right pt-2">
                      <button
                        onClick={handleNextStage2Scenario}
                        className="px-6 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-102"
                      >
                        <span>
                          {stage2ScenarioIdx < GAME_STAGE_2_SCENARIOS.length - 1 ? 'Situasi Seterusnya' : 'Tamatkan Peringkat 2'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* STAGE 3: SUSUN LANGKAH SERTU */}
        {currentStage === 3 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <div className="coquette-card p-6 text-center">
              <span className="px-3.5 py-1 bg-purple-100 text-purple-800 text-xs font-extrabold rounded-full border border-purple-200">
                Peringkat 3: Cabaran Urutan Sertu
              </span>
              <h3 className="font-display text-2xl font-extrabold text-pink-950 mt-2 mb-1">
                Susun 4 Langkah Kaedah Sertu Mengikut Urutan yang Sah
              </h3>
              <p className="text-xs sm:text-sm text-pink-900 font-semibold max-w-lg mx-auto">
                Gunakan butang anak panah ke atas (▲) atau ke bawah (▼) untuk menyusun semula kad langkah di bawah mengikut tertib fiqh yang betul.
              </p>
            </div>

            {/* Step Cards */}
            <div className="space-y-3">
              {scrambledSteps.map((step, idx) => (
                <div
                  key={step.id}
                  className="bg-white/95 p-4 rounded-2xl border-2 border-pink-300 shadow-xs flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-pink-100 text-pink-900 font-black flex items-center justify-center text-sm shrink-0 border border-pink-200">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-extrabold text-pink-950">
                        {step.text}
                      </h4>
                      <p className="text-xs text-pink-900 font-medium">
                        {step.subtext}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      disabled={idx === 0}
                      onClick={() => moveStep(idx, 'up')}
                      className="p-1.5 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-800 disabled:opacity-30 cursor-pointer"
                      title="Alih ke atas"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      disabled={idx === scrambledSteps.length - 1}
                      onClick={() => moveStep(idx, 'down')}
                      className="p-1.5 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-800 disabled:opacity-30 cursor-pointer"
                      title="Alih ke bawah"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Check Button & Feedback */}
            <div className="coquette-card p-6 text-center space-y-4">
              <button
                onClick={handleCheckStage3}
                className="px-8 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg shadow-pink-200 transition-all cursor-pointer hover:scale-102"
              >
                Semak Urutan Jawapan Saya
              </button>

              {stage3Checked && (
                <div className={`p-4 rounded-2xl text-xs sm:text-sm font-extrabold ${stage3Correct ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' : 'bg-rose-100 text-rose-950 border border-rose-300'}`}>
                  {stage3Correct
                    ? '🎉 Hebat sekali! Urutan langkah sertu anda adalah 100% tepat mengikut Mazhab Syafi‘i (+50 markah)!'
                    : 'Urutan masih belum tepat. Ingat: buang zat terlebih dahulu, sediakan tanah suci, basuhan 1 air tanah, kemudian 6 basuhan air mutlak. Cuba susun lagi!'}
                </div>
              )}

              {progress.gameScores.stage1Completed &&
                progress.gameScores.stage2Completed &&
                progress.gameScores.stage3Completed && (
                  <div className="pt-4 border-t-2 border-pink-200">
                    <div className="p-6 bg-gradient-to-r from-amber-50 via-white to-pink-50 rounded-2xl border-3 border-amber-300 text-center space-y-3 shadow-md">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg border-3 border-amber-400 p-0.5 bg-white">
                        <img
                          src="/src/assets/images/ribbon_badge_award_1792824921254.jpg"
                          alt="Lencana Ribbon Emas"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-display text-xl font-black text-pink-950">
                        🏆 Lencana "Penjaga Kebersihan Sejati" Telah Dibuka!
                      </h4>
                      <p className="text-xs text-pink-900 font-semibold">
                        Semua peringkat Misi Ribbon Suci berjaya diselesaikan. Seterusnya, mari uji pengetahuan anda di Kuiz Pengukuhan!
                      </p>
                      <button
                        onClick={() => onNavigate('kuiz')}
                        className="px-8 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-2 hover:scale-102"
                      >
                        <span>Teruskan ke Kuiz Pengukuhan</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
