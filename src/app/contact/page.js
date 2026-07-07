import ContactSection from "./contact-us";
export const metadata = {
  title: " MACK EV – Contact Us | Faridabad EV Manufacturer",

  description:
    "Get in touch with MACK EV—sales, service support, or general inquiries. Visit our Faridabad office or call +91-80 9062 9062 today.",
  alternates: {
    canonical: `/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function ContactUs(params) {
  return <ContactSection></ContactSection>;
}
