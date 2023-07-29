import HomeLayout from "@/components/Layout/HomeLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>PCWizardry</title>
        <meta property="og:title" content="At PCWizardry, we are passionate about empowering tech enthusiasts and professionals to unleash the full potential of their computing dreams. Our mission is to provide a seamless and immersive PC building experience, where creativity meets cutting-edge technology." key="title" />
      </Head>
      <div>
       
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
