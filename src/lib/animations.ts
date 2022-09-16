export const slideDown = {
  offscreen: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: 'easeOut'
    }
  }
}

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

export const slideUpDown = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

export const stagger = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05
    }
  }
}
