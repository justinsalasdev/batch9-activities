export const variants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren" }
  }
};

export const buttonVars = {
  hidden: {
    opacity: 0,
    x: -30
  },
  shown: {
    opacity: 1,
    x: 0
  }
};
