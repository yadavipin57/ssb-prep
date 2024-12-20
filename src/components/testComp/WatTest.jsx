import { WAT_WORDS } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const WatTest = () => {
  const { setId } = useParams();
  const start = (setId - 1) * 60;
  const end = setId * 60;
  const words = WAT_WORDS.slice(start, end);
  const intervalRef = useRef(null);
//   const beepSound = new Audio("../../assets/beep.mp3")

  useEffect(() => {
    const displayFirstWord = () => {
      document.getElementById("word-display").textContent = words[0];
    //   beepSound.play();
    };

    const startInterval = () => {
      let index = 1;
      intervalRef.current = setInterval(() => {
        if (index <= words.length) {
          document.getElementById("word-display").textContent =  words[index++];
        //   beepSound.play();
        } else {
            document.getElementById("word-display").textContent =  `TEST IS OVER`;
          clearInterval(intervalRef.current);
        }
      }, 2000);
    };
    displayFirstWord();

    setTimeout(startInterval, 0);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <div className="absolute top-0 right-0 z-50">
        <button>X</button>
      </div>
      <div
        id="word-display"
        className="text-4xl text-center w-[96%] sm:w-fit sm:text-7xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        {/* First word displayed immediately */}
      </div>
    </div>
  );
};

export default WatTest;
