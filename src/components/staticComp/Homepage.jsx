// import Card from "./Card";
import CustomCard from "./CustomCard";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 mx-auto py-4 sm:p-10 w-[90%] sm:w-[80%] bg-[#F49738] bg-opacity-50 backdrop-blur-md">
        <CustomCard></CustomCard>
      </div>
      {/*<Social/> */}
      <Footer />
    </div>
  );
};

export default Homepage;
