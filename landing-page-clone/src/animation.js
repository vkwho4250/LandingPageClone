const movement = {
   initialY: (y) => ({ x: 0, y: y, opacity: 0 }),
   initialX: (x) => ({ x: x, y: 0, opacity: 0 }),
   slideAcross: (x) => ({ x: x, y: 0, opacity: 1 }),
   endingXY: { x: 0, y: 0, opacity: 1 },
};

const textSlide = {
   hidden: { y: 20, opacity: 0 },
   active: { y: 0, opacity: 1 },
};

const Animations = { movement, textSlide };

export default Animations;
