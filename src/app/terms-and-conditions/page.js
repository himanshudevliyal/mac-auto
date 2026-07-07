import Breadcrumb from "@/components/breadcrumb";
import Container from "@mui/material/Container";
export default function TermsAndConditionsPage() {
  return (
    <>
      <Breadcrumb title="  Terms and Conditions" />
      <div className="min-h-screen bg-background">
        <Container maxWidth="xl">
          <div className="mb-8 p-6 pl-0 border-b">
            <p className="text-foreground leading-relaxed mb-6">
              Welcome to MACK EV Pvt. Ltd. (&quot;MACK EV&quot;,
              &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms and
              Conditions (&quot;Terms&quot;) govern your access to and use of
              our website{" "}
              <a
                href="https://macautoindia.com"
                className="text-primary hover:underline"
              >
                https://macautoindia.com
              </a>{" "}
              (&quot;Website&quot;), our products, and related services.
            </p>
            <p className="text-foreground leading-relaxed">
              By accessing or using our Website, you (&quot;user&quot;,
              &quot;customer&quot;, &quot;you&quot;) agree to be bound by these
              Terms. If you do not agree, please do not use our Website or
              services.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Eligibility</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Website and services are intended for use by Indian citizens
                residing in India who are at least 18 years of age.
              </p>
              <p className="text-foreground leading-relaxed">
                By using our Website, you confirm that you meet these
                requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                2. Scope of Services
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                MACK EV is an electric vehicle manufacturer offering
                information, updates, booking options, and customer support
                through this Website.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>
                  Information provided is for general purposes and may be
                  updated without prior notice.
                </li>
                <li>
                  Product images, specifications, and features on the Website
                  are illustrative and may vary in actual models.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                3. Intellectual Property
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                All content on the Website, including text, images, graphics,
                logos, designs, and software, is the intellectual property of
                MACK EV Pvt. Ltd. and protected under applicable
                copyright and trademark laws.
              </p>
              <p className="text-foreground leading-relaxed">
                You may not copy, reproduce, distribute, or modify any Website
                content without our prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                4. User Responsibilities
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                By using the Website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>
                  Provide accurate and truthful information when requested
                  (e.g., inquiry or booking forms).
                </li>
                <li>
                  Not use the Website for any unlawful, harmful, or fraudulent
                  purposes.
                </li>
                <li>
                  Not attempt to hack, disrupt, or interfere with the
                  Website&#39;s operations.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                5. Booking & Transactions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>
                  Any bookings, reservations, or purchases made through the
                  Website are subject to our sales policies and applicable
                  agreements.
                </li>
                <li>
                  Prices and specifications are subject to change without
                  notice.
                </li>
                <li>
                  We reserve the right to refuse or cancel orders at our
                  discretion.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                6. Third-Party Links
              </h3>
              <p className="text-foreground leading-relaxed">
                Our Website may contain links to third-party websites or
                services. We are not responsible for the content, policies, or
                practices of such third-party sites. You should review their
                terms before using them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                We strive to ensure the accuracy of the information provided but
                do not guarantee completeness or error-free content.
              </p>
              <p className="text-foreground leading-relaxed">
                MACK EV will not be liable for any indirect, incidental,
                or consequential damages arising from your use of the Website or
                reliance on its content.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">8. Privacy Policy</h3>
              <p className="text-foreground leading-relaxed">
                Your use of the Website is also governed by our Privacy Policy,
                which explains how we collect, use, and safeguard your personal
                information.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                9. Changes to Terms
              </h3>
              <p className="text-foreground leading-relaxed">
                We may update these Terms from time to time. Any changes will be
                posted on this page with a revised effective date. Continued use
                of the Website after changes are posted will constitute your
                acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                10. Governing Law & Jurisdiction
              </h3>
              <p className="text-foreground leading-relaxed">
                These Terms are governed by the laws of India. Any disputes
                arising under these Terms will be subject to the exclusive
                jurisdiction of the courts located in [City, State], India.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">11. Contact Us</h3>
              <p className="text-foreground leading-relaxed mb-4">
                For any questions about these Terms, you may contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">
                  MACK EV Pvt. Ltd.
                </p>
                <p className="text-foreground">
                  Website:{" "}
                  <a
                    href="https://www.macautoindia.com"
                    className="text-primary hover:underline"
                  >
                    www.macautoindia.com
                  </a>
                </p>
                <p className="text-foreground">
                  Email:{" "}
                  <a
                    href="mailto:info@macauto.in"
                    className="text-primary hover:underline"
                  >
                    info@macauto.in
                  </a>
                </p>
                <p className="text-foreground">
                  Phone:{" "}
                  <a
                    href="tel:+918090629062"
                    className="text-primary hover:underline"
                  >
                    +91 80 9062 9062
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
