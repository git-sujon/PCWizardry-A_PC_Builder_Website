import RootLayout from "@/components/Layout/RootLayout";
import { signIn  } from "next-auth/react";
import { BsGoogle, BsGithub } from "react-icons/bs";
const LoginPage = () => {

 



  return (
    <div>
      <h2 className="text-center font-bold text-2xl md:text-5xl text-slate-700">
        Easy Login, Just a Click way!!!
      </h2>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-lg ">
        <div className=" max-w-xs shadow-xl h-44 flex items-center justify-center bg-slate-900 btn hover:bg-accent">
          <BsGoogle
            className="text-8xl text-white"
            onClick={() =>
              signIn("google", { callbackUrl:  `${process.env.URL}` })
            }
          />
        </div>
        <div className=" max-w-xs shadow-xl h-44 flex items-center justify-center bg-slate-900 btn hover:bg-accent">
          <BsGithub
            className="text-8xl text-white"
            onClick={() =>
              signIn("github", { callbackUrl:  `${process.env.URL}` })
            }
          />
        </div>
      </div>
    </div> 
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
