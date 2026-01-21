export const ease = [0.22, 1, 0.36, 1];

export const viewport = { once: true, amount: 0.2 };

export const staggerContainer = (delay = 0.08, stagger = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

export const fadeInUp = (y = 22, duration = 0.75) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
});

export const pop = (scale = 0.96, duration = 0.75) => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease },
  },
});

export const hoverLift = {
  whileHover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.22, ease },
  },
};

export const tap = {
  whileTap: { scale: 0.98 },
};
