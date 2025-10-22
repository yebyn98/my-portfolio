import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  const variants = {
    first: {
      x: 0,
      rotate: 45,
    },
    animationEnd: {
      x: 50,
      rotate: 270,
    },
  };

  return (
    <motion.div
     variants={variants}
     initial="first" // variants에서 설정한 key값 string형태로 넣어준다.
     animate="animationEnd"
	transition={{  
      ease: "easeIn",
      duration: 0.7,
    }}
  />
  );
};