import React, { useEffect, useRef } from 'react';
import './index.scss'; // Import the SCSS file where you'll define the styles

function BlurredCircle() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const handlePointerMove = event => { 
      const { clientX, clientY } = event;

      circle.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });

    }

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    }
  }, [circleRef]);

  return (
    <>
      <div id="circle" ref={circleRef}></div>
      <div id="blur"></div>
      </>
  );
}

export default BlurredCircle;
