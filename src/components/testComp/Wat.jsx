import Footer from "../staticComp/Footer";
import Header from "../staticComp/Header";
import { Link } from "react-router-dom";

const Wat = () => {
  const watSets = [];

  for (let i = 1; i <= 12; i++) {
    watSets.push(
      <Link
        to={`/wattest/${i}`} // Pass the word set index as a route parameter
        key={i}
      >
        <button className="my-4 px-6 py-3 w-[196px] sm:w-[196px] text-white text-center cursor-pointer bg-[#57a656] rounded-md hover:bg-[#388637]">
          Word Set {i}
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
              WORD ASSOCIATION TEST
            </h1>
            <p className="px-4 sm:p-0 text-white">
              Quickly respond to a presented word with a relevant and
              spontaneous sentence. The word will be displayed for 15 seconds,
              requiring you to form a quick mental association and articulate
              your thoughts under time constraints. This tests your ability to
              think and express ideas rapidly. You are given multiple sets of
              word, click any of them and start prepering for your SSB.
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-evenly">
            {watSets}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wat;
