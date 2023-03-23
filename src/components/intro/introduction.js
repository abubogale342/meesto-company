import Image from "next/image";
import prague from "../../../public/prague.png";

const introduction = () => (
  <div className="flex flex-col items-center xl:flex-row justify-between gap-6 xl:gap-16 bg-slate-50 mt-24 pt-8 sm:pl-12">
    <div className="flex flex-col gap-3 self-center w-11/12 xl:w-auto xl:pl-12">
      <h1 className="text-4xl md:text-5xl font-bold">
        EASILY FIND & LIVE IN YOUR DREAM HOME
      </h1>
      <p className="text-lg mt-2">
        We are here to provide you with the best possible help in finding and
        purchasing your dream home. Our goal is to make it easy for you to find
        all of the information you need at one convenient location.
      </p>
      <a
        href="#contact"
        className="bg-sky-900 text-white hover:bg-indigo-700 w-fit pl-6 pr-6 pt-2 mt-6 pb-2 text-xl rounded-md"
      >
        Contact Us
      </a>
    </div>
    <Image
      src={prague}
      alt="Prague Building Image"
      className="rounded-tl-3xl w-11/12 xl:w-7/12"
    />
  </div>
);

export default introduction;
