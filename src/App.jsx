import React, { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import { ArrowUpRight, Award, Crown, X, Mail, Phone, ExternalLink } from 'lucide-react';
import GlassCard from './components/GlassCard';
import TargetCursor from './components/TargetCursor';
import GhostCursor from './components/GhostCursor';

const LogoLoop = lazy(() => import('./components/LogoLoop'));
const ProfileCard = lazy(() => import('./components/ProfileCard'));
const Lightfall = lazy(() => import('./components/Lightfall'));
const LightPillar = lazy(() => import('./components/LightPillar'));
const SideRays = lazy(() => import('./components/SideRays'));
const Particles = lazy(() => import('./components/Particles'));
const HoverReveal = lazy(() => import('./components/HoverReveal'));
import meImage from './assets/me.jpeg';
import ironmanImage from './assets/ironman.png';
import me2Image from './assets/me2.png';
import heroVideo from './assets/Video Project 1.mp4';
import { SiReact, SiFlutter, SiNodedotjs, SiPostgresql, SiThreedotjs, SiGreensock, SiTailwindcss, SiGit } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB] w-16 h-16" />, title: "React", href: "https://react.dev" },
  { node: <SiFlutter className="text-[#02569B] w-16 h-16" />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiNodedotjs className="text-[#339933] w-16 h-16" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql className="text-[#4169E1] w-16 h-16" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiThreedotjs className="text-white w-16 h-16" />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiGreensock className="text-[#88CE02] w-16 h-16" />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiTailwindcss className="text-[#06B6D4] w-16 h-16" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGit className="text-[#F05032] w-16 h-16" />, title: "Git", href: "https://git-scm.com" },
];

const Section = ({ title, children, id }) => (
  <section id={id} className="min-h-screen py-16 md:py-24 flex flex-col justify-center container mx-auto px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
    <div className="w-full flex items-center justify-between mb-16 relative z-20">
      <h2 className="text-4xl md:text-5xl font-podium font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {title}
      </h2>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent ml-8"></div>
    </div>
    <div className="relative z-20 w-full">
      {children}
    </div>
  </section>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Venture", "Contact"];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary/30">
      <TargetCursor 
        targetSelector="a, button, .glass, .cursor-target" 
        cursorColor="#ffffff"
        cursorColorOnTarget="#dc2626"
        spinDuration={3}
      />
      
      {/* ----------------- HERO SECTION ----------------- */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={heroVideo}
        />

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Navbar Container */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <nav className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
            <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider">
              ERIC SHELDON RS
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop Right CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="flex items-center space-x-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col space-y-1.5 p-2"
              onClick={() => setMenuOpen(true)}
            >
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="w-full flex items-center justify-between px-6 sm:px-10 py-5">
            <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider">
              ERIC SHELDON RS
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white hover:text-white/70 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500 hover:text-white/70"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex items-center space-x-2 border border-white/30 hover:border-white/60 px-8 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-500"
              style={{
                transitionDelay: `${navLinks.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 w-full h-full max-w-7xl mx-auto pb-20 pt-32">

          <div className="animate-fade-up opacity-0 flex items-center space-x-2 mb-6 lg:mb-8">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
              Full Stack Developer & Designer
            </span>
          </div>

          <div className="animate-fade-up-delay-1 opacity-0 flex flex-col font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,10vw,7rem)]">
            <span>Code.</span>
            <span>Create.</span>
            <span>Innovate.</span>
          </div>

          <p className="animate-fade-up-delay-2 opacity-0 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8">
            I build immersive digital experiences<br />
            that don't just solve problems &mdash; <strong className="text-white">they leave a lasting impact.</strong>
          </p>

          <div className="animate-fade-up-delay-3 opacity-0 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#projects" className="group bg-white hover:bg-neutral-200 text-black px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase flex items-center space-x-2 transition-colors">
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a href="https://rpntechworld.com" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors">
              <Award className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors" />
              <div className="flex flex-col text-white/60 group-hover:text-white text-xs tracking-wider uppercase transition-colors">
                <span className="font-bold">Partner</span>
                <span>RPN Tech World</span>
              </div>
            </a>
          </div>

          <div className="animate-fade-up-delay-4 opacity-0 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">20+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">100%</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">2+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Years Experience</span>
            </div>
          </div>

        </div>
      </header>

      {/* ----------------- PAGE SECTIONS ----------------- */}
      <main className="relative z-20 bg-[#0a0202]">

        {/* ABOUT SECTION */}
        <Section title="About Me" id="about">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">
            
            {/* Left Side: Text in GlassCard */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <GlassCard className="p-6 sm:p-10 md:p-14 relative z-10 backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/30 group h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-0"></div>
                
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="text-3xl md:text-5xl font-podium font-bold text-white mb-6 uppercase tracking-wider">
                    Driven by Code.<br/>
                    <span className="text-primary">Building the Future.</span>
                  </h3>
                  
                  <div className="w-16 h-1 bg-primary mx-auto lg:mx-0 mb-8 rounded-full"></div>
                  
                  <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed">
                    I am a passionate Full Stack Developer and a proud Partner at RPN Tech World, a company I built alongside my brother. With 2 years of experience crafting digital solutions, I specialize in transforming complex problems into elegant, scalable, and high-performance applications.
                  </p>
                  
                  <p className="text-gray-400 text-base md:text-lg font-inter leading-relaxed mt-6">
                    Beyond code, I am a natural leader who thrives in any environment. I served as the Leo Club President for the 2024-2025 tenure and was honored as the first President of the CESETA Association at MRK College. No matter the platform or challenge, I step up, take charge, and deliver excellence with my leadership skills.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Right Side: Full Photo */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end items-center relative z-10">
              <Suspense fallback={<div className="w-full aspect-[3/4] max-w-[400px] xl:max-w-[450px] rounded-2xl border border-white/10 bg-white/5 animate-pulse"></div>}>
                <HoverReveal 
                  baseImage={ironmanImage}
                  revealImage={me2Image}
                  className="w-full aspect-[3/4] max-w-[400px] xl:max-w-[450px] rounded-2xl border border-white/10 transition-colors duration-500 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:border-primary/50 hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]"
                />
              </Suspense>
            </div>

          </div>
        </Section>

        {/* PROJECTS SECTION */}
        <div className="relative overflow-hidden w-full bg-black">
          <div className="absolute inset-0 z-0 opacity-40">
            <Suspense fallback={null}>
              <LightPillar
                topColor="#dc2626"
                bottomColor="#7f1d1d"
                intensity={0.7}
                rotationSpeed={0.2}
                glowAmount={0.005}
                pillarWidth={1.5}
                pillarHeight={0.3}
                noiseIntensity={0.6}
                pillarRotation={25}
                interactive={true}
                mixBlendMode="screen"
                quality="high"
              />
            </Suspense>
          </div>
          <Section title="Projects" id="projects" className="relative z-10 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <GlassCard className="flex flex-col h-full group backdrop-blur-2xl bg-black/70 border border-white/5 shadow-2xl relative z-10 transition-all duration-300 hover:border-primary/40 hover:bg-black/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] p-6">
              <div className="h-48 w-full bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-podium font-bold text-white/20 uppercase">Vijayas Dental</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-podium uppercase tracking-wide">Vijayas Dental Care</h3>
              <p className="text-gray-400 mb-6 flex-grow font-inter text-sm leading-relaxed">
                A modern web presence for a dental care clinic, featuring responsive design and patient-centric information layout.
              </p>
              <a
                href="https://www.vijayasdentalcare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto w-max font-inter uppercase text-xs tracking-widest"
              >
                View Live Site <ExternalLink size={16} />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full group backdrop-blur-2xl bg-black/70 border border-white/5 shadow-2xl relative z-10 transition-all duration-300 hover:border-primary/40 hover:bg-black/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] p-6">
              <div className="h-48 w-full bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-podium font-bold text-white/20 uppercase">Vijayas Health</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-podium uppercase tracking-wide">Vijayas Healthcare</h3>
              <p className="text-gray-400 mb-6 flex-grow font-inter text-sm leading-relaxed">
                Comprehensive healthcare website focused on accessibility and clear communication of medical services and facilities.
              </p>
              <a
                href="https://www.vijayashealthcare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto w-max font-inter uppercase text-xs tracking-widest"
              >
                View Live Site <ExternalLink size={16} />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full group backdrop-blur-2xl bg-black/70 border border-white/5 shadow-2xl relative z-10 transition-all duration-300 hover:border-primary/40 hover:bg-black/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] p-6">
              <div className="h-48 w-full bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-podium font-bold text-white/20 uppercase">AquaticX</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-podium uppercase tracking-wide">AquaticX Sports</h3>
              <p className="text-gray-400 mb-6 flex-grow font-inter text-sm leading-relaxed">
                Dynamic platform for aquatic sports, integrating engaging visuals and seamless user experience for sports enthusiasts.
              </p>
              <a
                href="https://www.aquaticxsports.com/viewer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto w-max font-inter uppercase text-xs tracking-widest"
              >
                View Live Site <ExternalLink size={16} />
              </a>
            </GlassCard>

            <GlassCard className="flex flex-col h-full group backdrop-blur-2xl bg-black/70 border border-white/5 shadow-2xl relative z-10 transition-all duration-300 hover:border-primary/40 hover:bg-black/80 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] p-6">
              <div className="h-48 w-full bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-podium font-bold text-white/20 text-center px-4 uppercase">Founders of Chidambaram</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-podium uppercase tracking-wide">Founders of Chidambaram</h3>
              <p className="text-gray-400 mb-6 flex-grow font-inter text-sm leading-relaxed">
                A dedicated community portal highlighting the founders and key figures of Chidambaram with an elegant and professional design.
              </p>
              <a
                href="https://www.foundersofchidambaram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto w-max font-inter uppercase text-xs tracking-widest"
              >
                View Live Site <ExternalLink size={16} />
              </a>
            </GlassCard>

          </div>
        </Section>
        </div>

        {/* SKILLS / TECH STACK SECTION */}
        <div className="relative overflow-hidden w-full bg-[#0a0000]">
          <div className="absolute inset-0 z-0">
            <Suspense fallback={null}>
              <SideRays
                speed={2.5}
                rayColor1="#ff3333"
                rayColor2="#ffb3b3"
                intensity={2}
                spread={2}
                origin="top-right"
                tilt={0}
                saturation={1.5}
                blend={0.75}
                falloff={1.6}
                opacity={1}
              />
            </Suspense>
          </div>
          <Section title="Tech Stack" id="skills" className="relative z-10 bg-transparent">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between w-full mx-auto mt-8 mb-16">
            
            {/* Profile Card (Left side) */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <Suspense fallback={<div className="w-64 h-80 rounded-2xl bg-white/5 animate-pulse"></div>}>
                <ProfileCard
                  name="Eric Sheldon"
                  title="Full Stack Developer & Partner"
                  handle="ericsheldon"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={meImage}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  behindGlowEnabled={true}
                  behindGlowColor="#dc2626"
                  innerGradient="linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.9) 100%)"
                />
              </Suspense>
            </div>

            {/* Tech Stack Logos (Right side) */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8 relative overflow-hidden">
                <div className="relative overflow-hidden w-full" style={{ height: '160px' }}>
                  <Suspense fallback={<div className="w-full h-full flex items-center justify-center space-x-4"><div className="w-16 h-16 bg-white/5 rounded-full animate-pulse"></div><div className="w-16 h-16 bg-white/5 rounded-full animate-pulse"></div><div className="w-16 h-16 bg-white/5 rounded-full animate-pulse"></div></div>}>
                    <LogoLoop
                      logos={techLogos}
                      speed={100}
                      direction="left"
                      logoHeight={64}
                      gap={100}
                      hoverSpeed={20}
                      scaleOnHover
                      fadeOut
                      fadeOutColor="#0a0202"
                      ariaLabel="Technology Stack"
                    />
                  </Suspense>
                </div>
            </div>

          </div>
        </Section>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="relative overflow-hidden w-full bg-[#0a0000]">
          <div className="absolute inset-0 z-0">
            <Suspense fallback={null}>
              <Lightfall
                colors={['#ffb3b3', '#990000', '#ff6666']}
                backgroundColor="#2a0000"
                speed={0.5}
                streakCount={2}
                streakWidth={1}
                streakLength={1}
                glow={1}
                density={0.6}
                twinkle={1}
                zoom={3}
                backgroundGlow={0.5}
                opacity={1}
                mouseInteraction={true}
                mouseStrength={0.5}
                mouseRadius={1}
              />
            </Suspense>
          </div>
          <Section title="Current Venture" id="venture" className="relative z-10 bg-transparent">
          <GlassCard className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-10 relative z-10 backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_0_40px_rgba(220,38,38,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(220,38,38,0.3)] hover:border-primary/30">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center flex-shrink-0 neon-glow shadow-2xl">
              <span className="text-3xl md:text-4xl font-podium font-bold text-black tracking-tighter uppercase">RPN</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 font-podium uppercase tracking-wide">Partner</h3>
              <a href="https://rpntechworld.com" target="_blank" rel="noopener noreferrer" className="text-xl text-primary flex items-center gap-2 hover:underline mb-4 transition-colors font-inter w-max">
                RPN Tech World <ExternalLink size={20} />
              </a>
              <p className="text-gray-300 leading-relaxed text-lg font-inter">
                Running the company alongside my brother, RPN Tech World is our shared vision brought to life. As a Partner and Full Stack Developer, I drive our technical architecture, lead development teams, and ensure we deliver cutting-edge digital solutions. We built this company to redefine web experiences and deliver unparalleled value to our clients worldwide.
              </p>
            </div>
          </GlassCard>
        </Section>
      </div>

      {/* CONTACT SECTION */}
        <div className="relative overflow-hidden w-full bg-[#0a0000]">
          <div className="absolute inset-0 z-0">
            <Suspense fallback={null}>
              <Particles
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleColors={['#ff3333', '#ffb3b3', '#ffffff']}
                moveParticlesOnHover={true}
                particleHoverFactor={1}
                alphaParticles={true}
                particleBaseSize={100}
                sizeRandomness={1}
                cameraDistance={20}
                disableRotation={false}
              />
            </Suspense>
          </div>
          <Section title="Contact" id="contact" className="relative z-10 bg-transparent">
          <div className="max-w-2xl mx-auto w-full relative rounded-2xl overflow-hidden border border-white/10 group cursor-target">
            {/* Glass Background */}
            <div className="absolute inset-0 glass z-0"></div>
            
            {/* Ghost Cursor */}
            <GhostCursor color="#dc2626" className="absolute inset-0 w-full h-full z-0" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 p-6 md:p-12 text-center w-full">
              <h3 className="text-3xl md:text-4xl font-podium font-bold text-white uppercase tracking-wider">Let's Work Together</h3>
              <p className="text-gray-300 text-lg font-inter mt-4">
                Feel free to reach out for collaborations, project inquiries, or just to say hi!
              </p>
              
              <div className="flex flex-col space-y-4 w-full mt-6">
                <a href="mailto:ericsheldon04@gmail.com" className="flex items-center justify-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-primary/50 group/link cursor-target">
                  <Mail className="text-primary group-hover/link:scale-110 transition-transform" />
                  <span className="text-sm sm:text-lg md:text-xl font-inter tracking-wider break-all sm:break-normal">ericsheldon04@gmail.com</span>
                </a>
                
                <a href="tel:+919786787873" className="flex items-center justify-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-secondary/50 group/link cursor-target">
                  <Phone className="text-secondary group-hover/link:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg md:text-xl font-inter tracking-wider">+91 9786787873</span>
                </a>
              </div>

              <a href="mailto:ericsheldon04@gmail.com" className="mt-8 px-10 py-4 bg-white text-black hover:bg-neutral-200 rounded-full font-bold text-sm font-inter tracking-widest uppercase hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all transform hover:-translate-y-1 inline-block cursor-target">
                SEND A MESSAGE
              </a>
            </div>
          </div>
        </Section>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full py-10 border-t border-white/10 bg-[#0a0202] relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-inter uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Eric Sheldon. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
