import Header from "../staticComp/Header";
import Footer from "../staticComp/Footer";
import { Link } from "react-router-dom";

const Tat = () => {
  const tatSets = [];

  for (let i = 1; i <= 6; i++) {
    tatSets.push(
      <Link
        to={`/tattest/${i}`} // Pass the image set index as a route parameter
        key={i}
      >
        <button className="my-4 px-6 py-3 w-[196px] sm:w-[196px] text-white text-center cursor-pointer bg-[#57a656] rounded-md hover:bg-[#388637]">
          Picture Set {i}
        </button>
      </Link>
    );
  }

  return (
    <div>
      <Header />
      <div className="mt-24 mx-auto py-4 sm:p-10 w-[90%] sm:w-[80%] bg-[#F49738] bg-opacity-50 backdrop-blur-md">
        <div>
          <div>
            <h1 className="px-4 sm:p-0 text-white font-bold text-xl sm:text-3xl underline">
              THEMATIC APPERCEPTION TEST
            </h1>
            <p className="px-4 sm:p-0 text-white">
              Based on an image, create a short story in 4 minutes. The image
              will be shown for 30 seconds. This exercise evaluates your
              creativity, imagination, and narrative skills as you construct a
              meaningful story from the visual cue. It assesses your capacity to
              link visual stimuli to a coherent narrative. You are given
              multiple sets of pictured, click any of them and start prepering
              for your SSB.
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-evenly">
            {tatSets}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tat;
