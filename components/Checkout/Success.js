import Image from 'next/image';

function Success({ has }) {
  return (
    <div className="h-full lg:flex lg:items-center lg:space-x-12 lg:space-x-24">
      <div className="lg:w-1/2 ">
        <h1 className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Takk!
        </h1>
        <p className="mt-3 text-lg md:text-xl font-sans">
          {has.digital_fulfillment
            ? "Du vil få en E-mail med kvittering og en link som lar deg laste ned kvitteringen"
            : "Du vil få en E-amil med kvittering og frakt informasjon"}
        </p>
      </div>
      <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center">
        <div className="bg-white shadow-thank-you transform -rotate-25 skew-y-12 mx-auto my-24 lg:mt-48 max-w-lg">
          <div className="ml-4">
          </div>
            <div className="mt-6 mb-1 font-serif flex justify-between items-end">
              <span className="ml-4 italic text-sm">Takk for at du handler med CaravanOutlet</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Success;
