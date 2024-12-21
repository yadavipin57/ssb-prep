import { TAT_PICTURES } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import CloseIcon from "@mui/icons-material/Close";

const TatTest = () => {
  const [tatPicture, setTatPicture] = useState();
  const [play, setPlay] = useState(false)

  const { setId } = useParams();

  const navigate = useNavigate();

  const pictures = [];
  const start = (setId - 1) * 12;
  const end = setId * 12;
  const intervalRef = useRef(null);

  for (let i = start + 1; i <= end; i++) {
    pictures.push(`${TAT_PICTURES}${i}.jpg`);
  } // Populating the pictures array with the path of 11 images

  useEffect(() => {
    const displayFIrstPicture = () => {
      setTatPicture(new URL(pictures[0], import.meta.url).href);
    };

    const startInterval = () => {
      let index = 1;
      intervalRef.current = setInterval(() => {
        if (index < pictures.length) {
          let prevIndex = index;
          setTatPicture(new URL(pictures[index++], import.meta.url).href);
          console.log(prevIndex, index, pictures.length);
        } else {
          document.getElementById("picture-display").innerHTML =
            "<p>TEST IS OVER</P>";
          clearInterval(intervalRef.current);
        }
      }, 5000);
    };

      displayFIrstPicture();
      setTimeout(startInterval, 0);
      clearInterval(intervalRef.current);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <div className="absolute top-1 right-1 sm:top-4 sm:right-4 z-50">
        <button>
          {play ? <PlayArrowIcon /> : <PauseIcon />}
        </button>
        <button>
          <CloseIcon />
        </button>
      </div>
      <div
        id="picture-display"
        className="text-4xl text-center w-[96%] sm:w-fit sm:text-7xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <img
          id="picture-tag"
          className="mx-auto w-full sm:w-[700px]"
          src={tatPicture}
          alt="Picture"
        />
        {/* First picture displayed immediately */}
      </div>
    </div>
  );
};

export default TatTest;
