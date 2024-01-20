import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cfDotRef = useRef<HTMLSpanElement | null>(null);
  const cfBorderRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const followCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      [cfDotRef, cfBorderRef].forEach((ref) => {
        if (ref.current) {
          const { offsetWidth: width, offsetHeight: height } = ref.current;
          const translate = {
            x: x - width / 2,
            y: y - height / 2,
          };
          ref.current.style.transform = `translate(${translate.x}px, ${translate.y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", followCursor);

    return () => window.removeEventListener("mousemove", followCursor);
  }, []);

  return (
    <>
      <span id="cursor-follower-dot" ref={cfDotRef}></span>
      <span id="cursor-follower-border" ref={cfBorderRef}></span>
    </>
  );
};

export default CursorFollower;
