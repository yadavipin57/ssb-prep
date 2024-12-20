import { Link } from "react-router-dom";
import { CARD_LINKS } from "../../utils/constants";

const CustomCard = () => {
  const CARD_HEADINGS = [
    "Word Association Test",
    "Thematic Apperception Test",
    "SSB Friends.",
  ];
  const CARD_CONTENT = [
    "Quickly respond to a presented word with a relevant and spontaneous sentence. The word will be displayed for 15 seconds, requiring you to form a quick mental association and articulate your thoughts under time constraints. This tests your ability to think and express ideas rapidly.",
    "Based on a visual prompt (an image), create a short story in 4 minutes. The image will be shown for 30 seconds. This exercise evaluates your creativity, imagination, and narrative skills as you construct a meaningful story from the visual cue. It assesses your capacity to link visual stimuli to a coherent narrative.",
    "This feauture allows you to connect with peers who are also preparing for the upcoming SSB. It facilitates discussions about your journey and accommodation plans, making your SSB experience more seamless and cost-effective.",
  ];

  return (
    <div className="flex items-top justify-evenly flex-wrap sm:gap-4">
      {CARD_HEADINGS.map((cardHeading, index) => (
        <div
          className="px-4 py-4 w-[350px] text-white cursor-pointer  backdrop-blur-lg hover:scale-105 transition-all"
          key={index}
        >
          <Link to={CARD_LINKS[index]}>
            <h2 className="text-2xl font-bold">{cardHeading}</h2>
            <p className="py-3 text-lg">{CARD_CONTENT[index]}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;
