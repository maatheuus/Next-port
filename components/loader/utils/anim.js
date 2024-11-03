export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100dvh",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};
export const transition = { duration: 1, ease: "easeInOut" };

export const moveUp = {
  initial: { x: 20, y: window.innerHeight - 50 },
  animate: {
    x: 20,
    y: 35,
    boxShadow: ["0px 0px 25px rgba(255, 255, 255, 0.5)"],
  },
};

export const moveDown = {
  initial: { x: window.innerWidth - 50, y: 0 },
  animate: {
    x: window.innerWidth - 50,
    y: window.innerHeight - 50,
    boxShadow: ["0px 0px 25px rgba(255, 255, 255, 0.5)"],
  },
};
