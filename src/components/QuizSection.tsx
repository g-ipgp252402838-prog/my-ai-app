import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { SectionId, UserProgress } from '../types';
import { RibbonBow, SparkleIcon, CleanStarIcon, FlowerSticker, HeartSticker } from './RibbonIcons';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Trophy,
  Award,
  Sparkles,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onNavigate: (section: SectionId) => void;
}

export function QuizSection({ progress, onUpdateProgress, onNavigate }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    progress.quizResult.answers || []
  );
  const [currentChoice, setCurrentChoice] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(progress.quizResult.completed || false);
  const [passThreshold, setPassThreshold] = useState(80);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    setCurrentChoice(index);
    setShowExplanation(true);

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setCurrentChoice(null);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      let score = 0;
      QUIZ_QUESTIONS.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswer) {
          score += 1;
        }
      });
      const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

      onUpdateProgress((prev) => ({
        ...prev,
        quizResult: {
          completed: true,
          score,
          total: QUIZ_QUESTIONS.length,
          percentage,
          answers: selectedAnswers,
        },
      }));
      setQuizCompleted(true);

      if (percentage >= passThreshold) {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#F8C8DC', '#D98BAA', '#FFD700', '#A84D75', '#FFFFFF'],
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setCurrentChoice(null);
    setShowExplanation(false);
    setQuizCompleted(false);
    onUpdateProgress((prev) => ({
      ...prev,
      quizResult: {
        completed: false,
        score: 0,
        total: QUIZ_QUESTIONS.length,
        percentage: 0,
        answers: [],
      },
    }));
  };

  const finalScore = progress.quizResult.score;
  const finalPercent = progress.quizResult.percentage;
  const isPassed = finalPercent >= passThreshold;

  return (
    <section id="kuiz" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-extrabold text-pink-700 uppercase tracking-widest bg-white/90 px-4 py-1.5 rounded-full border-2 border-pink-200 shadow-xs">
            <RibbonBow className="w-4 h-4 text-pink-500" />
            <span>Penilaian Kendiri DSKP Tahun 4</span>
            <RibbonBow className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-pink-950 mb-2 drop-shadow-2xs">
            Kuiz Pengukuhan Mari Bersuci
          </h2>
          <p className="text-sm sm:text-base text-pink-950 font-semibold bg-white/70 p-2 rounded-2xl max-w-xl mx-auto border border-pink-100">
            Jawab 10 soalan untuk menguji kefahaman anda tentang konsep bersuci dan hukum najis. Markah lulus: {passThreshold}%.
          </p>
        </div>

        {/* QUIZ IN PROGRESS */}
        {!quizCompleted ? (
          <div className="coquette-card p-6 sm:p-8 animate-fadeIn">
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-pink-200">
              <span className="font-display text-sm sm:text-base font-extrabold text-pink-950 flex items-center gap-2">
                <FlowerSticker className="w-5 h-5 text-pink-500" />
                Soalan <span className="text-rose-600 font-black">{currentQuestionIndex + 1}</span> daripada {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs font-black text-pink-800 px-3.5 py-1 bg-pink-100 rounded-full border border-pink-300">
                Kategori: {currentQ.category.toUpperCase()}
              </span>
            </div>

            {/* Progress line with star icon */}
            <div className="w-full h-3 bg-pink-100 rounded-full mb-6 overflow-hidden border border-pink-200">
              <div
                className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full transition-all duration-300 shadow-xs"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h3 className="font-display text-lg sm:text-2xl font-extrabold text-pink-950 leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = currentChoice === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswer;

                let buttonStyle = "bg-white/90 border-pink-200 text-pink-950 hover:border-pink-400";
                if (showExplanation) {
                  if (isCorrect) {
                    buttonStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-black ring-3 ring-emerald-200 shadow-sm";
                  } else if (isSelected) {
                    buttonStyle = "bg-rose-50 border-rose-400 text-rose-950 font-black ring-3 ring-rose-200 shadow-sm";
                  } else {
                    buttonStyle = "bg-white/60 border-pink-100 text-pink-900/60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={showExplanation}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-start gap-3 shadow-2xs ${buttonStyle}`}
                  >
                    <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 border border-pink-200">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="flex-1 leading-relaxed font-bold">{opt}</span>
                    {showExplanation && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Card */}
            {showExplanation && (
              <div className="p-4 bg-pink-50 border-2 border-pink-200 rounded-2xl mb-6 animate-fadeIn">
                <span className="text-xs font-black text-pink-900 uppercase tracking-wide block mb-1 flex items-center gap-1.5">
                  <HeartSticker className="w-4 h-4" />
                  <span>Penerangan Fiqh:</span>
                </span>
                <p className="text-xs sm:text-sm text-pink-950 leading-relaxed font-bold">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Next / Submit Button */}
            {showExplanation && (
              <div className="text-right">
                <button
                  onClick={handleNextQuestion}
                  className="px-7 py-3 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-2xl shadow-md shadow-pink-200 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-102"
                >
                  <span>
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Soalan Seterusnya'
                      : 'Lihat Keputusan Kuiz'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* QUIZ SUMMARY REPORT CARD WITH TROPHY ARTWORK */
          <div className="coquette-card p-6 sm:p-10 text-center space-y-6 animate-fadeIn">
            {/* 3D Trophy Award Artwork */}
            <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden shadow-xl border-3 border-pink-300 p-1 bg-white">
              <img
                src="/src/assets/images/quiz_trophy_celebration_1792827638631.jpg"
                alt="Trofi Kejayaan Kuiz"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div>
              <span className={`px-5 py-1.5 text-xs font-black rounded-full border-2 ${isPassed ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-rose-100 text-rose-900 border-rose-300'}`}>
                {isPassed ? '🎉 Tahniah! Anda Lulus Cemerlang' : 'Cuba Lagi untuk Capai 80%'}
              </span>

              <h3 className="font-display text-2xl sm:text-4xl font-black text-pink-950 mt-3 mb-1">
                Keputusan Kuiz Pengukuhan
              </h3>

              <p className="text-xs sm:text-sm text-pink-900 font-bold">
                Syarat menjana sijil digital: sekurang-kurangnya {passThreshold}% betul.
              </p>
            </div>

            {/* Score Numbers */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="p-4 bg-white rounded-2xl border-2 border-pink-200 shadow-xs">
                <span className="text-xs text-pink-700 block font-bold">Markah Betul</span>
                <span className="font-display text-3xl font-black text-rose-600">
                  {finalScore} / {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <div className="p-4 bg-white rounded-2xl border-2 border-pink-200 shadow-xs">
                <span className="text-xs text-pink-700 block font-bold">Peratusan</span>
                <span className="font-display text-3xl font-black text-pink-600">
                  {finalPercent}%
                </span>
              </div>
            </div>

            {/* Feedback message */}
            <div className="max-w-md mx-auto p-4 bg-white rounded-2xl border-2 border-pink-200 text-xs sm:text-sm text-pink-950 leading-relaxed font-bold shadow-xs">
              {isPassed
                ? 'Mumtaz (Cemerlang)! Anda telah menguasai konsep dan kaedah bersuci mengikut sukatan Pendidikan Islam Tahun 4. Sijil Digital anda sedia untuk dijana!'
                : `Anda memperoleh ${finalPercent}%. Untuk menjana sijil pencapaian, anda memerlukan markah sekurang-kurangnya ${passThreshold}%. Jangan putus asa, mari cuba sekali lagi!`}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-3 text-xs font-extrabold text-pink-900 bg-white hover:bg-pink-100 border-2 border-pink-300 rounded-2xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs hover:scale-102"
              >
                <RotateCcw className="w-4 h-4" /> Ulang Semula Kuiz
              </button>

              {isPassed && (
                <button
                  onClick={() => onNavigate('sijil')}
                  className="px-8 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-2xl shadow-lg shadow-pink-200 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-102"
                >
                  <Award className="w-4 h-4" /> Buka Sijil Digital Saya
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
