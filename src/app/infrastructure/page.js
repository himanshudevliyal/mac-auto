import Image from "next/image";
import Production from "./_componets/production";
import Container from "@mui/material/Container";
import Timeline from "./_componets/timeline";
import Breadcrumb from "@/components/breadcrumb";
export default function Infrastructure(params) {
  return (
    <>
      <Breadcrumb title="Infrastucture" />

      <div className="section bg-white">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side Image */}
            <div className="w-full">
              <Image
                src="/img/Manufacturing-Operation-1.webp"
                alt="Electric Vehicle"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Right Side Text */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black leading-snug">
                We Build Electric Vehicles (EV) To Create A Opportunity &
                Sustainability In Society
              </h2>
              <div className="text-gray-700 space-y-4 text-[16px] leading-relaxed">
                <p>
                  Over 5.5 million people die each year due to air pollution — a
                  major issue in fast-growing economies like India and China.
                  Emissions from gasoline vehicles have become a health hazard,
                  forcing people to wear masks on the streets.
                </p>
                <p>
                  The shift from fuel-powered vehicles to EVs marks a new era.
                  EVs are now safer, sleeker, and more exciting than ever,
                  thanks to innovations in design and technology.
                </p>
                <p>
                  EVs offer instant torque, a silent ride, lower running costs,
                  and help reduce our carbon footprint. This makes them not just
                  efficient, but socially responsible choices.
                </p>
                <p>
                  MACK EV proudly launched India’s first Li-Ion battery-powered
                  e-rickshaw in 2014. With our battery swapping tech, refueling
                  is quick and seamless.
                </p>
                <p>
                  Backed by a modern facility and skilled team, we continue to
                  improve our EVs to help create a cleaner, greener tomorrow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Timeline></Timeline>
      <Production />
    </>
  );
}
