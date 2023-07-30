import Navbar from "../UI/Shared/Navbar";
import Footer from "../UI/Shared/Footer";
import Banner from "../UI/Banner/Banner";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Banner />
        <div className="px-10 mx-auto my-10">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
