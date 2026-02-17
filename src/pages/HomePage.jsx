import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import FloatingOrbs from "../components/FloatingOrbs";
import GridOverlay from "../components/GridOverlay";
import WorkShowcase from "../components/HorizontalScroll";

// Homepage
const HomePage = ({ onNavigate }) => {
  const howWeHelpRef = useRef(null);

  useEffect(() => {
    const section = howWeHelpRef.current;
    if (!section) return undefined;

    const revealItems = section.querySelectorAll("[data-scroll-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Presence",
      visual: "stack",
      description:
        "Strategic online positioning that amplifies your brand across every digital touchpoint.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Growth",
      visual: "bars",
      description:
        "Data-driven social media strategies that build engaged communities and drive conversions.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Optimization",
      visual: "grid",
      description:
        "Deep insights and continuous optimization to maximize your digital ROI.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Content Strategy",
      visual: "target",
      description:
        "Compelling narratives and content frameworks that resonate with your audience.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Onboarding",
      visual: "bridge",
      description:
        "Seamless integration processes that set the foundation for long-term success.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Identity",
      visual: "orbit",
      description:
        "Cohesive digital identities that stand out in competitive markets.",
    },
  ];

  const renderServiceVisual = (service) => {
    if (service.visual === "bars") {
      return (
        <div className="relative flex items-end justify-center gap-3">
          {[36, 56, 42, 64].map((height, idx) => (
            <div
              key={idx}
              className="w-7 rounded-t-lg rounded-b-md border border-white/30 bg-gradient-to-t from-violet-600/90 to-cyan-300/90 shadow-lg shadow-violet-950/35"
              style={{ height }}
            />
          ))}
        </div>
      );
    }

    if (service.visual === "grid") {
      return (
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-md border border-white/30 bg-gradient-to-br from-cyan-300/85 to-violet-600/80 shadow-md shadow-violet-950/25"
            />
          ))}
        </div>
      );
    }

    if (service.visual === "target") {
      return (
        <div className="relative w-20 h-20 rounded-full border border-white/35 bg-gradient-to-br from-cyan-300/75 to-violet-600/75 flex items-center justify-center shadow-xl shadow-violet-950/35">
          <div className="absolute w-14 h-14 rounded-full border border-white/35" />
          <div className="absolute w-8 h-8 rounded-full border border-white/35" />
          <div className="relative text-white">{service.icon}</div>
        </div>
      );
    }

    if (service.visual === "bridge") {
      return (
        <div className="relative">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-2.5 rounded-full bg-cyan-300/60 border border-white/35" />
          <div className="flex items-end gap-6">
            <div className="w-8 h-10 rounded-lg border border-white/30 bg-gradient-to-t from-violet-600/90 to-cyan-300/90" />
            <div className="w-8 h-10 rounded-lg border border-white/30 bg-gradient-to-t from-violet-600/90 to-cyan-300/90" />
          </div>
        </div>
      );
    }

    if (service.visual === "orbit") {
      return (
        <div className="relative w-20 h-20 rounded-full border border-white/30 bg-gradient-to-br from-cyan-300/75 to-violet-600/75 shadow-xl shadow-violet-950/35">
          <div className="absolute inset-2 rounded-full border border-white/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            {service.icon}
          </div>
          <div className="absolute -top-1 left-7 w-2.5 h-2.5 rounded-full bg-cyan-300 border border-white/40" />
          <div className="absolute top-5 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-300 border border-white/40" />
          <div className="absolute -bottom-1 left-8 w-2.5 h-2.5 rounded-full bg-cyan-300 border border-white/40" />
        </div>
      );
    }

    return (
      <div className="relative flex items-end gap-2">
        <div className="w-10 h-8 rounded-md border border-white/30 bg-gradient-to-br from-cyan-300/85 to-violet-600/80" />
        <div className="w-9 h-10 rounded-md border border-white/30 bg-gradient-to-br from-cyan-300/85 to-violet-600/80" />
        <div className="w-8 h-12 rounded-md border border-white/30 bg-gradient-to-br from-cyan-300/85 to-violet-600/80" />
      </div>
    );
  };

  const process = [
    {
      step: "01",
      title: "Customized Content Strategy",
      image: "/images/photo-1454165804606-c3d57bc86b40.jpeg",
      description:
        "We start by understanding your business, audience, and goals, so  every action has a purpose.",
    },
    {
      step: "02",
      title: "Done-for-You Content Creation",
      image: "/images/photo-1553028826-f4804a6dba3b.jpeg",
      description:
        "High-quality posts, captions, and videos crafted to connect with your audience.",
    },
    {
      step: "03",
      title: "Scheduling & Consistency",
      image: "/images/photo-1552664730-d307ca884978.jpeg",
      description:
        "We ensure your brand shows up consistently at the right times and places",
    },
    {
      step: "04",
      title: "Engagement & Growth",
      image: "/images/photo-1521737604893-d14cc237f11d.jpeg",
      description:
        "We actively manage interactions and help turn conversations into customer relationships.",
    },
    {
      step: "05",
      title: "Monthly Analytics & Strategy Adjustments",
      image: "/images/photo-1460925895917-afdab827c52f.jpeg",
      description:
        "We track performance, analyze results, and refine strategy to improve growth over time.",
    },
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Content Creation & Approval",
      image: "/images/photo-1454165804606-c3d57bc86b40.jpeg",
      description: [
        "You will receive a weekly content plan every Monday for approval.",
        "If no feedback is received within 24 to 48 hours, we assume it is approved.",
      ],
    },
    {
      step: "02",
      title: "Engagement & Community Management",
      image: "/images/photo-1553028826-f4804a6dba3b.jpeg",
      description: [
        "We respond to comments and direct messages.",
        "If an inquiry requires your input, we will notify you.",
      ],
    },
    {
      step: "03",
      title: "Analytics & Reporting",
      image: "/images/photo-1552664730-d307ca884978.jpeg",
      description: [
        "A monthly performance report is sent on the last day of each month.",
        "We analyze what is working and adjust strategy accordingly.",
      ],
    },
    {
      step: "04",
      title: "Communication & Support",
      image: "/images/photo-1521737604893-d14cc237f11d.jpeg",
      description: [
        "Preferred contact method: WhatsApp +234 902 418 2998.",
        "Check-in meetings: every 2 weeks, monthly, or as needed.",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Home and Office",
      role: "Brand Manager",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah",
      text: "POLEON transformed our digital strategy. The results speak for themselves - triple revenue in 6 months.",
    },
    {
      name: "Marcus Williams",
      company: "Price Slash",
      role: "Marketing Lead",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Marcus",
      text: "The team's strategic approach and execution excellence are unmatched. They're true partners in growth.",
    },
    {
      name: "Elena Rodriguez",
      company: "Whitecrest Factor",
      role: "Operations Director",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Elena",
      text: "Working with POLEON was a game-changer. Their insights and strategy drove phenomenal engagement.",
    },
  ];

  const heroSpotlight = {
    title: "Campaign Planning Session",
    image: "/images/isometric_people-1.png",
  };
  const heroBackgroundImage = "/images/photo-1432888622747-4eb9a8efeb07.jpeg";

  const visualShowcase = [
    {
      title: "Performance Dashboards",
      description: "Live insights that keep every campaign accountable.",
      image: "/images/photo-1551288049-bebda4e38f71.jpeg",
    },
    {
      title: "Content Production",
      description: "High-impact creative built for platform-native growth.",
      image: "/images/photo-1522202176988-66273c2fd55f.jpeg",
    },
    {
      title: "Client Collaboration",
      description: "Transparent partnerships focused on measurable wins.",
      image: "/images/photo-1521737604893-d14cc237f11d.jpeg",
    },
  ];

  const collaborationPills = [
    {
      label: "Simple",
      icon: Sparkles,
      className: "-top-4 left-6 animate-float",
    },
    {
      label: "Clear",
      icon: Target,
      className: "top-8 -right-4 animate-float-slow",
    },
    {
      label: "Collaborative",
      icon: Users,
      className: "bottom-10 -left-6 animate-float-slower",
    },
    {
      label: "Growth",
      icon: TrendingUp,
      className: "-bottom-4 right-10 animate-float",
    },
  ];

  const previousWork = [
    {
      id: "home-office",
      name: "Home & Office",
      label: "Furniture Retail",
      image: "/logos/home-office.jpeg",
      summary:
        "Reframed brand storytelling and product education to build trust and drive consistent purchase intent.",
    },
    {
      id: "priceslash",
      name: "Priceslash",
      label: "Consumer Products",
      image: "/logos/priceslash.jpg",
      summary:
        "Built digital presence from zero and scaled practical social formats for awareness and conversion.",
    },
    {
      id: "whitecrest",
      name: "Whitecrest Factor",
      label: "Performance Ops",
      image: "/logos/whitecrest-factor.jpg",
      summary:
        "Unified reporting and execution rhythms so strategy and delivery moved with the same cadence.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Marketing strategy workspace"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070b22]/95 via-[#0a0e27]/85 to-[#080d24]/95" />
        </div>
        <FloatingOrbs />
        <GridOverlay />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center animate-fade-in">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">
                  Built on transparency, strategy, and real results.
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-hero-title-flow">
                  We build digital systems that meet your customers at every
                  touchpoint.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                We help businesses reach the right people at the right moments
                through digital systems built for connection and growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  START A CONVERSATION
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  OUR PROCESS
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden ">
                <img
                  src={heroSpotlight.image}
                  alt={heroSpotlight.title}
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  loading="eager"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/25 to-transparent" /> */}

                {/* <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-lg font-semibold">
                    {heroSpotlight.title}
                  </p>
                  <p className="text-cyan-200 text-sm mt-1">
                    Strategy, content, and paid media aligned in one growth
                    system.
                  </p>
                </div> */}
              </div>

              <div className="absolute bottom-32 md:-left-16 px-4 py-3 rounded-xl border border-cyan-400/30 bg-slate-950/80 backdrop-blur-md animate-hero-drift">
                <p className="text-cyan-300 text-xs uppercase tracking-wider">
                  Your Growth.
                </p>
              </div>

              <div className="absolute top-16 -right-4 px-4 py-3 rounded-xl border border-violet-400/30 bg-slate-950/80 backdrop-blur-md animate-hero-drift-alt">
                <p className="text-violet-200 text-xs uppercase tracking-wider">
                  Our Strategy.
                </p>
              </div>

              <div className="absolute bottom-16 right-6 px-4 py-3 rounded-xl border border-gray-400/30 bg-slate-950/80 backdrop-blur-md animate-hero-drift-slow">
                <p className="text-white-100 text-xs uppercase tracking-wider">
                  Real Results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* How We Help You Grow Section */}
      <section
        ref={howWeHelpRef}
        className="relative py-16 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30 animate-grid-drift"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34, 211, 238, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.18) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_90%_70%,rgba(139,92,246,0.16),transparent_38%)] animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b22]/80 via-[#0a0e27]/65 to-[#070b22]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="text-center mb-16 md:mb-32 scroll-reveal"
            data-scroll-reveal
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Help You Grow
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We take a strategy-first approach to ensure your digital presence
              Show business growth which means all activity, sales and
              operations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-600 hidden lg:block" />
            {process.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-10 scroll-reveal ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                data-scroll-reveal
                style={{ "--reveal-delay": `${index * 120}ms` }}
              >
                <div
                  className={`w-full lg:flex-1 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}
                >
                  <article className="relative overflow-hidden border border-white/10 rounded-2xl -mt-12 p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/80 to-slate-950/90" />
                    <div
                      className={`relative z-10 flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                    >
                      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-cyan-400 to-violet-600 bg-clip-text text-transparent leading-none">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="relative z-10 text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </div>
                <div className="hidden lg:flex w-6 h-6 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full border-4 border-[#0a0e27] flex-shrink-0 z-10" />
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions designed for exponential growth
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-cyan-950/45 via-violet-950/40 to-cyan-950/45 p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.25),transparent_38%),radial-gradient(circle_at_90%_0%,rgba(139,92,246,0.3),transparent_45%)]" />
                <div className="absolute inset-[1px] rounded-[22px] border border-white/15 pointer-events-none" />

                <div className="relative z-10 rounded-2xl border border-white/15 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 p-4 mb-4 min-h-28 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    {renderServiceVisual(service)}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkShowcase
        previousWork={previousWork}
        onViewPortfolio={() => onNavigate?.("portfolio")}
      />

      {/* How We Work Together Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Communication and Support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {howWeWork.map((item, index) => (
              <div key={index} className="relative">
                {index < howWeWork.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-400 to-violet-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {item.description.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-950/35 to-violet-950/35 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  What Working With Us Looks Like
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  You get a focused team that keeps strategy practical,
                  communication clear, and execution aligned with measurable
                  growth outcomes.
                </p>
                <p className="text-cyan-300 font-medium">
                  Built for momentum, clarity, and scale.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-cyan-950/40">
                  <img
                    src="/images/photo-1521737604893-d14cc237f11d.jpeg"
                    alt="POLEON collaborating with a client"
                    className="w-full h-[360px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                </div>

                {collaborationPills.map((pill) => (
                  <div
                    key={pill.label}
                    className={`absolute ${pill.className} px-4 py-2 rounded-full border border-white/20 bg-slate-950/80 backdrop-blur-md text-cyan-200 text-sm font-semibold shadow-lg shadow-black/30 flex items-center gap-2`}
                  >
                    <pill.icon className="w-4 h-4 text-cyan-300" />
                    {pill.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="relative py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-cyan-950/30 to-violet-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Driven By Data
              </h2>
              <p className="text-xl text-gray-400">
                Our results speak louder than promises
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <p className="text-gray-400 text-lg">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={287} suffix="%" />
                </div>
                <p className="text-gray-400 text-lg">Avg. Growth Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={10} suffix="M+" />
                </div>
                <p className="text-gray-400 text-lg">Total Reach</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-gray-400 text-lg">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 md:py-32 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/45 via-slate-900/70 to-violet-950/45 p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_40%)]" />

            <div className="relative z-10 text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Voices From Our Partners
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                Honest feedback from teams we help grow every month.
              </p>
            </div>

            <div className="relative z-10 grid lg:grid-cols-[260px_1fr_1fr] gap-6 mb-6">
              <div className="bg-white text-slate-800 rounded-3xl p-6 shadow-2xl shadow-black/20">
                <p className="text-sm font-semibold text-slate-500 mb-2">
                  What clients keep telling us
                </p>
                <p className="text-lg font-bold leading-tight">
                  "Clear strategy, fast execution, and consistent growth."
                </p>
                <div className="mt-4 text-cyan-600 font-semibold text-sm">
                  Trusted by scaling brands
                </div>
              </div>

              {testimonials.slice(0, 2).map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-400/40 bg-cyan-500/20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-cyan-300 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </article>
              ))}
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-6">
              <article className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-violet-400/40 bg-violet-500/20">
                    <img
                      src={testimonials[2].avatar}
                      alt={testimonials[2].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {testimonials[2].name}
                    </p>
                    <p className="text-violet-300">{testimonials[2].role}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[2].company}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  "{testimonials[2].text}"
                </p>
              </article>

              <div className="rounded-3xl bg-white p-6 md:p-7 text-slate-900">
                <h3 className="text-2xl font-bold mb-5">
                  Start your success story
                </h3>
                <div className="space-y-3 mb-5">
                  <div className="h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center px-4 text-slate-500 text-sm">
                    Company name
                  </div>
                  <div className="h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center px-4 text-slate-500 text-sm">
                    Work email
                  </div>
                </div>
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-95 transition-opacity"
                >
                  Book A Strategy Call
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  We reply within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-cyan-600 to-violet-700 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Join 20+ forward-thinking brands who've transformed their
                digital presence with POLEON.
              </p>
              <button
                onClick={() => onNavigate?.("contact")}
                className="px-5 py-5 bg-white text-violet-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
              >
                Start Your Growth Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
