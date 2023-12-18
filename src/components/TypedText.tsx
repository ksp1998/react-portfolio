import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Software Engineer"];
const typingSpeed = 150;
const typingDelay = Math.floor(2000 / typingSpeed); // 2 seconds

const TypedText = () => {
  const [current, setCurrent] = useState({
    text: "",
    index: 0,
    position: 0,
    clear: false,
    delay: 0,
    speed: typingSpeed,
  });

  useEffect(() => {
    const changeText = setTimeout(() => {
      const { text, index, position, delay } = current;
      if (!current.clear) {
        setCurrent((prev) => {
          if (position === roles[index].length) {
            return delay < typingDelay
              ? { ...prev, delay: delay + 1 }
              : { ...prev, clear: true, delay: 0, speed: typingSpeed / 3 };
          }

          const newText =
            text === roles[index] ? "" : text + roles[index][position];
          return {
            ...prev,
            text: newText,
            index: newText === "" ? (index + 1) % roles.length : index,
            position: newText === "" ? 0 : position + 1,
            delay: 0,
          };
        });
        return;
      }

      setCurrent((prev) => {
        if (position === 0) {
          return {
            ...prev,
            text: "",
            index: (index + 1) % roles.length,
            clear: false,
            speed: typingSpeed,
          };
        }

        return {
          ...prev,
          text: roles[index].slice(0, position),
          position: position - 1,
        };
      });
    }, current.speed);

    return () => clearTimeout(changeText);
  }, [current]);

  return (
    <p className="text-slider">
      <span className="typed-text">{current.text}</span>
      <span className={`cursor-pointer ${current.delay && "blink"}`}>|</span>
    </p>
  );
};

export default TypedText;
