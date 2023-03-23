import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { home, address, options } from "@/svgs";

const howitworks = () => (
  <div className="flex flex-col items-center pt-12 pb-12" id="howitworks">
    <h1 className="text-sky-900 text-3xl mb-4 font-semibold">How It Works</h1>
    <p className="text-sky-900 text-lg w-4/6 md:w-4/6 xl:w-5/12 text-center">
      To land on your dream house, you don’t go through any process, We go
      through all processes for you except you have to say a place, choose a
      place and live in a place
    </p>
    <div className="flex flex-col md:flex-row mt-6 items-center">
      <div className="flex flex-row md:flex-col items-center border-2 md:border-0 p-4 m-2 md:mr-0 mt-6 rounded-md gap-6">
        <div>{address}</div>
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Tell Us Your Preference
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            Where do you want to live? Tell me about important services you want
            near your home? Tell me everything you can think of about your dream
            home.{" "}
          </p>
        </div>
      </div>
      <ArrowDownIcon
        className="flex-shrink-0 h-12 w-12 text-gray-400 self-center md:hidden"
        aria-hidden="true"
      />
      <ArrowRightIcon
        className="flex-shrink-0 h-12 w-8 text-gray-400 self-center hidden md:block"
        aria-hidden="true"
      />

      <div className="flex flex-row md:flex-col items-center border-2 md:border-0 p-4 m-2 md:m-0 rounded-md gap-6">
        <div>{options}</div>
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Choose Options
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            We have a plenty of locations that meets your requirements across
            all over Czech Republic. Now is time to choose from plenty.{" "}
          </p>
        </div>
      </div>

      <ArrowDownIcon
        className="flex-shrink-0 h-12 w-12 text-gray-400 self-center md:hidden"
        aria-hidden="true"
      />

      <ArrowRightIcon
        className="flex-shrink-0 h-12 w-8 text-gray-400 self-center hidden md:block"
        aria-hidden="true"
      />

      <div className="flex flex-row md:flex-col items-center border-2 md:border-0 p-4 m-2 md:ml-0 rounded-md gap-6">
        <div>{home}</div>
        <div className="flex flex-col">
          <h1 className="text-sky-900 text-xl font-bold text-center">
            Get Your Home
          </h1>
          <p className="text-sky-900 mt-1 text-center">
            Here is your dream home with reasonable price and with all complete
            equipment's and surrounded by the services you need.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default howitworks;
