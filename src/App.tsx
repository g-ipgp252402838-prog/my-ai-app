import React, { useState, useEffect } from 'react';
import { SectionId, UserProgress, DeveloperProfile } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { LearningSection } from './components/LearningSection';
import { AmaliSection } from './components/AmaliSection';
import { GameSection } from './components/GameSection';
import { QuizSection } from './components/QuizSection';
import { CertificateSection } from './components/CertificateSection';
import { PageNavigationFooter } from './components/PageNavigationFooter';
import { Footer } from './components/Footer';
import { DeveloperProfileModal } from './components/DeveloperProfileModal';

const DEFAULT_PROGRESS: UserProgress = {
  studentName: '',
  completedModules: {
    modulA: false,
    modulB: false,
    modulC: false,
    modulD: false,
  },
  completedAmali: {
    mukhaffafah: false,
    mutawassitah: false,
    mughallazah: false,
    importance: false,
  },
  gameScores: {
    stage1Score: 0,
    stage1Completed: false,
    stage2Score: 0,
    stage2Completed: false,
    stage3Score: 0,
    stage3Completed: false,
  },
  quizResult: {
    completed: false,
    score: 0,
    total: 10,
    percentage: 0,
    answers: [],
  },
};

const DEFAULT_DEV_PROFILE: DeveloperProfile = {
  name: '[NAMA PENUH]',
  program: '[PROGRAM / UNIT]',
  institution: '[INSTITUSI]',
  avatarUrl: '/assets/aistudio/image_a1a98d1c.png',
  description: '[PENERANGAN DIRI] — Pembangun produk pembelajaran digital interaktif Mari Bersuci Tahun 4 bagi EDUP6023 Tugasan 3.',
  motto: '[MOTTO PENDIDIKAN] — Bersih Diri, Suci Rohani, Ibadah Diberkati.',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Initialize progress from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('mari_bersuci_progress');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_PROGRESS;
  });

  // Initialize developer profile from localStorage, ensuring user photo is active
  const [developerProfile, setDeveloperProfile] = useState<DeveloperProfile>(() => {
    try {
      const saved = localStorage.getItem('mari_bersuci_dev_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.avatarUrl || parsed.avatarUrl.includes('ribbon_badge_award')) {
          parsed.avatarUrl = '/assets/aistudio/image_a1a98d1c.png';
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_DEV_PROFILE;
  });

  // Save progress changes
  useEffect(() => {
    try {
      localStorage.setItem('mari_bersuci_progress', JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Save developer profile changes
  const handleSaveProfile = (newProfile: DeveloperProfile) => {
    setDeveloperProfile(newProfile);
    try {
      localStorage.setItem('mari_bersuci_dev_profile', JSON.stringify(newProfile));
    } catch {
      // ignore
    }
  };

  const handleUpdateStudentName = (name: string) => {
    setProgress((prev) => ({ ...prev, studentName: name }));
  };

  const handleResetProgress = () => {
    setProgress(DEFAULT_PROGRESS);
    try {
      localStorage.removeItem('mari_bersuci_progress');
    } catch {
      // ignore
    }
  };

  // Calculate learning progress percentage
  const calculateProgress = (): number => {
    let score = 0;
    if (progress.completedModules.modulA) score += 10;
    if (progress.completedModules.modulB) score += 10;
    if (progress.completedModules.modulC) score += 10;
    if (progress.completedModules.modulD) score += 10;

    if (progress.gameScores.stage1Completed) score += 10;
    if (progress.gameScores.stage2Completed) score += 10;
    if (progress.gameScores.stage3Completed) score += 10;

    if (progress.quizResult.completed) {
      score += 15;
      if (progress.quizResult.percentage >= 80) {
        score += 15;
      }
    }

    return Math.min(100, score);
  };

  const progressPercent = calculateProgress();

  // Multi-page navigation handler: switches page and scrolls smoothly to the top
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col text-[#4A3340] selection:bg-pink-200 selection:text-pink-900 bg-white/40 backdrop-blur-[1px]">
      {/* Top Multi-Page Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        progressPercent={progressPercent}
      />

      {/* Main Multi-Page Content: Only the currently selected page is displayed */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <div id="home" className="animate-fadeIn">
            <HeroSection
              onNavigate={handleNavigate}
              studentName={progress.studentName}
              onUpdateStudentName={handleUpdateStudentName}
              developerProfile={developerProfile}
              onOpenProfileModal={() => setIsProfileModalOpen(true)}
            />
          </div>
        )}

        {activeSection === 'pengenalan' && (
          <div id="pengenalan" className="animate-fadeIn">
            <IntroSection onNavigate={handleNavigate} />
          </div>
        )}

        {activeSection === 'pembelajaran' && (
          <div id="pembelajaran" className="animate-fadeIn">
            <LearningSection
              progress={progress}
              onUpdateProgress={setProgress}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === 'amali' && (
          <div id="amali" className="animate-fadeIn">
            <AmaliSection
              progress={progress}
              onUpdateProgress={setProgress}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === 'permainan' && (
          <div id="permainan" className="animate-fadeIn">
            <GameSection
              progress={progress}
              onUpdateProgress={setProgress}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === 'kuiz' && (
          <div id="kuiz" className="animate-fadeIn">
            <QuizSection
              progress={progress}
              onUpdateProgress={setProgress}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {activeSection === 'sijil' && (
          <div id="sijil" className="animate-fadeIn">
            <CertificateSection
              progress={progress}
              developerProfile={developerProfile}
              onUpdateStudentName={handleUpdateStudentName}
              onResetAllProgress={handleResetProgress}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* Google Sites Style Multi-Page Controls (Sebelumnya & Seterusnya) */}
        <PageNavigationFooter
          currentSection={activeSection}
          onNavigate={handleNavigate}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modal for editing developer & educator details */}
      <DeveloperProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={developerProfile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
