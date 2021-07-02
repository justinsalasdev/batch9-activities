export const addVars = {
  inactive: {
    rotate: 0
  },
  active: {
    rotate: 135
  }
};

export const blockVars = {
  hidden: { y: 5 },
  shown: { y: 0 }
};

export const spenderVars = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      type: "tween",
      when: "afterChildren"
    }
  },
  shown: {
    opacity: 1,
    height: "22rem",
    transition: {
      // type: "tween",
      when: "beforeChildren"
    }
  }
};
