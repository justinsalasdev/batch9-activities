export const addVars = {
  inactive: {
    rotate: 0
  },
  active: {
    rotate: 135
  }
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

export const tableVars = {
  hidden: { opacity: 0 },
  shown: { opacity: 1 }
};
