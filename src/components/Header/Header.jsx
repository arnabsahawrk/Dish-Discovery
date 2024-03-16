import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="container mx-auto text-pretty px-4 md:px-12 lg:px-24">
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
