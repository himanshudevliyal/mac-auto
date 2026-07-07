import Container from "@mui/material/Container";
import {
  ArrowRight,
  Wrench,
  Grid3X3,
  Settings,
  ClipboardCheck,
  Shield,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="bg-gray-100 section">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8   lg:sticky top-5">
            <div className="space-y-6">
              <p className="text-green-500 font-medium text-sm uppercase tracking-wide">
                EV Charging Solutions Made Very Simple!
              </p>

              <div className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Are Pioneering Flexible Ways To Make EV Mobility Your Easy
                Choice.
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  In todays economy where many services are easily accessible
                  and costs are transparent, its no surprise that drivers are
                  having high expectations to pay for power usage in a fast and
                  reliable way is precisely what electric drivers are expecting.
                  As a result, the demand for charging stations is too.
                </p>

                <p>
                  We have developed a solution tailored to the needs of all
                  modern drivers: a smooth customer experience, fast and easy
                  payment and perfectly aligned with your processes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Ongoing Maintenance */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Ongoing Maintenance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Save paper, reduce maintenance costs, and deliver complete
                session with our electronic receipts.
              </p>
            </div>

            {/* Spare Parts Management */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Grid3X3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Spare Parts Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Were industry leaders in the design, installation of quality
                systems enhance security and ensure business.
              </p>
            </div>

            {/* Expert Partner Support */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Expert Partner Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We integrate your EV-Charging payment solutions with back-end
                systems, and provide you with valuable insights.
              </p>
            </div>

            {/* On Site Commissioning */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                On Site Commissioning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maximize efficiencies by partnering with the only company with
                tailored charging solutions across commercial.
              </p>
            </div>

            {/* Warranty Extensions */}
            <div className="space-y-4 sm:col-span-2 sm:max-w-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Warranty Extensions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Achieve program targets faster and on budget with our
                comprehensive warranty extension programs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
