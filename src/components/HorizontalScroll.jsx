import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function WorkShowcase({ previousWork }) {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const rowRef = useRef(null);

  const [travel, setTravel] = useState(0);
  const [centerOffset, setCenterOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return undefined;

    let raf1, raf2;

    const measure = () => {
      if (!viewportRef.current || !rowRef.current) return;

      const viewportWidth = viewportRef.current.getBoundingClientRect().width;
      const rowWidth = rowRef.current.scrollWidth;

      const firstCard = rowRef.current.querySelector("article");
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;

      const offset = Math.max(0, (viewportWidth - cardWidth) / 2);
      const totalTravel = Math.max(0, rowWidth - viewportWidth + offset);

      setCenterOffset(offset);
      setTravel(totalTravel);
    };

    measure();
    raf1 = requestAnimationFrame(() => {
      measure();
      raf2 = requestAnimationFrame(measure);
    });

    window.addEventListener("resize", measure);

    const imgs = rowRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => img.addEventListener("load", measure));

    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      imgs.forEach((img) => img.removeEventListener("load", measure));
    };
  }, [isMobile, previousWork]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

//   const START_HOLD = 0.08;
// const END_HOLD = 0;

// const rawX = useTransform(
//   scrollYProgress,
//   [0, START_HOLD, 1 - END_HOLD, 1],
//   [centerOffset, 0, -travel, -travel]
// );


  // Move from first card centered to last card centered
  const rawX = useTransform(scrollYProgress, [0, 1], [centerOffset, -travel]);
  const x = useSpring(rawX, { stiffness: 140, damping: 90, mass: 2.7 });

  const SPEED = 1.2;
  const containerHeight = useMemo(
    () => `calc(50vh + ${travel * SPEED}px)`,
    [travel],
  );

  if (isMobile) {
    return (
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b22] via-[#0a0f2b] to-[#05091f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.2),transparent_40%)]" />

        <div className="relative z-10 px-6">
          <div className="max-w-3xl">
            <p className="text-cyan-300 uppercase text-xs tracking-[0.25em] mb-4">
              Previous Work
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">What We Have Done</h2>
            <p className="text-gray-300 text-base">
              Swipe horizontally to explore selected client outcomes and
              delivery systems we have built.
            </p>
          </div>
        </div>

        <div className="thin-x-scroll relative z-10 mt-8 overflow-x-auto px-6 pb-2">
          <div className="flex gap-4 w-max">
            {previousWork.map((item) => (
              <article
                key={item.id}
                className="group relative flex-shrink-0 w-[72vw] max-w-[280px] h-[330px] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950/55 to-slate-950/95" />
                <div className="relative z-10 h-full p-5 flex flex-col justify-end">
                  <p className="text-cyan-300 text-xs uppercase tracking-[0.2em] mb-3">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b22] via-[#0a0f2b] to-[#05091f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.2),transparent_40%)]" />

        <div className="relative z-10 pt-16 md:pt-24 px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 uppercase text-xs tracking-[0.25em] mb-4">
              Previous Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Have Done
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Scroll down to explore selected client outcomes and delivery
              systems we have built.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-10 md:mt-16 h-[calc(50vh-13rem)] md:h-[calc(100vh-15rem)] flex items-center">
          <div className="px-6 md:px-10">
            <div ref={viewportRef} className="w-full overflow-hidden">
              <motion.div
                ref={rowRef}
                style={{ x }}
                className="flex gap-6 will-change-transform min-w-max"
              >
                {previousWork.map((item) => (
                  <article
                    key={item.id}
                    className="group relative flex-shrink-0 w-[120px] md:w-[440px] h-[220px] md:h-[420px]
                overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950/55 to-slate-950/95" />
                    <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
                      <p className="text-cyan-300 text-xs uppercase tracking-[0.2em] mb-3">
                        {item.label}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-200 leading-relaxed mb-5">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkShowcase;
