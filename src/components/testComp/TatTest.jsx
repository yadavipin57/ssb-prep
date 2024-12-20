import { WAT_WORDS } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import CloseIcon from "@mui/icons-material/Close";

const TatTest = () => {
  const [play, setPlay] = useState(true);
  const [closeTest, setCloseTest] = useState(false);

  const { setId } = useParams();

  const navigate = useNavigate();

  const start = (setId - 1) * 60;
  const end = setId * 60;
  const words = WAT_WORDS.slice(start, end);
  const intervalRef = useRef(null);
  //   const beepSound = new Audio("../../assets/beep.mp3")

  const handlePlayButton = () => {
    setPlay(!play);
  };

  const handleTestClose = () => {
    setCloseTest(true);
    clearInterval(intervalRef.current);  // Clear interval immediately
    navigate("/tat");
  };



  useEffect(() => {
    const displayFirstWord = () => {
      document.getElementById("word-display").textContent = words[0];
      //   beepSound.play();
    };

    const startInterval = () => {
      let index = 1;
      intervalRef.current = setInterval(() => {
          if (index <= words.length) {
          document.getElementById("word-display").textContent = words[index++];
          //   beepSound.play();
        } else {
          document.getElementById("word-display").textContent = `TEST IS OVER`;
          clearInterval(intervalRef.current);
        }
      }, 1000);
    };
    
    if (!closeTest) {
        displayFirstWord();
        setTimeout(startInterval, 0);
      } else {
        clearInterval(intervalRef.current);
      }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <div className="absolute top-1 right-1 sm:top-4 sm:right-4 z-50">
        <button onClick={handlePlayButton}>
          {play ? <PlayArrowIcon /> : <PauseIcon />}
        </button>
          <button onClick={handleTestClose}>
            <CloseIcon />
          </button>
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

export default TatTest;
