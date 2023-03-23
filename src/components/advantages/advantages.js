import experts from "../../../public/experts.png";
import analysis from "../../../public/analysis.png";
import gis from "../../../public/gis.png";
import Image from "next/image";

const advantages = () => (
  <div
    className="flex flex-col items-center pt-8 pb-12 bg-slate-100"
    id="advantages"
  >
    <h1 className="text-sky-900 text-3xl mb-4 font-semibold">Advantages</h1>
    <p className="text-sky-900 text-center text-lg w-10/12">
      Here are some of the reasons why you should work us.
    </p>
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-row-reverse md:flex-col items-center border-2 md:border-0 p-4 m-2 md:mr-0 mt-6 rounded-md gap-6">
        <Image src={gis} alt="big data" className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Big geospatial data
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            We have all necessary information about each addresses of whole
            czech republic. Additionally, we have data of each and every
            services in czech republic{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse md:flex-col items-center border-2 md:border-0 p-4 m-2 md:m-0 rounded-md gap-6">
        <Image src={analysis} alt="algorithms" className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Advanced data analysis algorithms
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            Not only we have a data, we have mined and extracted every possible
            relevant information from data that can answer your core businees
            intelligence questions.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse md:flex-col items-center border-2 md:border-0 p-4 m-2 md:ml-0 rounded-md gap-6">
        <Image src={experts} alt="experts" className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Team of experts in multi-disciplines
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            we have a team in all core disciplines. All teams are experts in
            what they are doing and are fast responders to any of your question
            that you have now and you will have.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default advantages;
