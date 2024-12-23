export const scaleAnElementVariants = (
  hiddenScaleVal = 0.8,
  visibleScaleVal = 1
) => {
  return {
    hidden: {
      scale: hiddenScaleVal,
      opacity: 0,
    },
    visible: {
      scale: visibleScaleVal,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const whileHoverButton = {
  rotate: 360,
  transition: { type: "spring" },
};

export const svgLogoPathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scaleAnimation = {
  scale: 1.1,
  transition: { type: "spring" },
};

export const animateFromLeftVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const animateFromRightVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const hiddenToBlockAnimationVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
