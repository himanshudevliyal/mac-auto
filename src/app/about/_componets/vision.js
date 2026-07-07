import { Flag, Activity, ShieldCheck } from "lucide-react";

export default function Component() {
  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto text-center ">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">

            Driving India&apos;s EV Future
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
          At MACK EV (formerly MACK EV), we believe in delivering sustainable, affordable, and innovative electric mobility solutions to power the future of transportation — with a strong focus on Electric 3-Wheeler Vehicles and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3  gap-12 mt-20">
          {/* Our Mission */}
          <div className="relative mb-4 lg:mb-4 group h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="absolute  -top-[50px] w-20 h-20 rounded-full border-2 border-dashed border-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-solid">
              <Flag className="w-8 h-8 text-green-500 transition-all duration-300 group-hover:text-green-600" />
            </div>
            <div className=" p-10 bg-white rounded-2xl transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
              <h3 className="text-xl font-bold text-green-600 mb-2 group-hover:text-white transition-all duration-300">
                Our Mission
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                To lead the electric vehicle revolution in India by offering
                reliable and eco-conscious transportation solutions that empower
                communities and protect the planet.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="relative mb-4 lg:mb-4 group h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="absolute -top-[50px] w-20 h-20 rounded-full border-2 border-dashed border-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-solid">
              <Activity className="w-8 h-8 text-green-500 transition-all duration-300 group-hover:text-green-600" />
            </div>
            <div className="bg-white p-10 rounded-2xl transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
              <h3 className="text-xl font-bold text-green-600 mb-2 group-hover:text-white transition-all duration-300">
                Our Approach
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                Combining in-house manufacturing, cutting-edge technology, and a
                vast dealer network to deliver scalable and efficient mobility
                solutions across India.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="relative mb-4 lg:mb-4 group h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="absolute -top-[50px] w-20 h-20 rounded-full border-2 border-dashed border-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-solid">
              <ShieldCheck className="w-8 h-8 text-green-500 transition-all duration-300 group-hover:text-green-600" />
            </div>
            <div className="bg-white p-10 rounded-2xl transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
              <h3 className="text-xl font-bold text-green-600 mb-2 group-hover:text-white transition-all duration-300">
                Our Values
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                Built on trust, innovation, and a strong commitment to
                &quot;Make in India&quot;, our values drive us to create a
                cleaner, smarter future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
