import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@mui/material/Container";

export default function Production() {
  const processSteps = [
    {
      title: "Research & Development",
      description:
        "Investigative undertakings in an effort to make discoveries that can help develop new products or way of doing things or work towards enhancing pre-existing products or processes.",
      imageQuery: "/img/Research-and-Dev-1.webp",
    },
    {
      title: "Designing & Development Process",
      description:
        "Design is the process of defining the components, modules, interfaces, and data for a system to satisfy specified requirements. Development is the process of creating or altering systems, along with the processes, practices, models, and methodologies used to develop them.",
      imageQuery: "/img/Design-and-Dev-1.webp",
    },
    {
      title: "Manufacturing Operation",
      description:
        "Manufacturing engineering, or the manufacturing process, are the steps through which raw materials are transformed into a final product. The manufacturing process begins with the product design, and materials specification from which the product is made.",
      imageQuery: "/img/Manufacturing-Operation-1.webp",
    },
    {
      title: "Quality Control Process",
      description:
        "Quality control involves testing of units and determining if they are within the specifications for the final product.",
      imageQuery: "/img/Quality-Control-Process-1.webp",
    },
    {
      title: "Instock",
      description:
        "This stage involves a final check of the product and to endure it is ready for sale.",
      imageQuery: "/img/Instock-1.webp",
    },
    {
      title: "Dispatch Process",
      description:
        "Dispatch is a procedure for assigning e-rickshaw to customers. With e-rickshaw dispatching, clients are matched to their electric-3-wheeler according to the order in which clients called and the proximity of vehicles to each client's pick-up location.",
      imageQuery: "/img/Dispatch-Process-1.webp",
    },
  ];

  return (
    <section className="w-full section  dark:bg-gray-800">
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Operational Process
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              From concept to delivery, we ensure excellence at every stage.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="flex  shadow-2xl  border-0 flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg  rounded-[20px]"
            >
              <CardHeader>
                <Image
                  src={step.imageQuery}
                  alt={step.title}
                  width={300}
                  height={200}
                  className=" w-full rounded-[20px] object-contain"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardTitle className="mb-2">{step.title}</CardTitle>
                <p className=" text-gray-500 dark:text-gray-400 flex-grow">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
