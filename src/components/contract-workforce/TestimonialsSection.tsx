import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants/assets";

const featuredTestimonial = {
  quote:
    "Eilisys products are very user friendly and can be used without any hassle. Employees are able to view their salary slip, Income tax sheet and also are able to give Income Tax declaration online...",
  author: "Sudhir Kamat",
  role: "General Manager, Finance & Accounts",
  company: "Trent Limited",
  logo: ASSETS.logoTrent,
  logoWidth: 62,
  logoHeight: 40,
};

const gridTestimonials = [
  {
    quote:
      "I truly appreciate your team and you for a seamless implementation of PMS. This wouldn't have been possible without your team being completely involved right from understanding the need to delivering the same. Mandar was always there for us during implementation of Payroll and now Sagar has been on our side every time we had a request. We never felt that there were two teams working, it has been one.",
    author: "Priyanka Vanjari",
    role: "Head - Human Resources P N G Jewellers Pvt. Ltd.",
    logo: ASSETS.logoPngJewellers,
    logoWidth: 111,
    logoHeight: 40,
  },
  {
    quote:
      "We would like to congratulate & thank the entire team of Eilisys for successful implementation of Leave Management System at SAVWIPL. We really appreciate the commitment and accountability demonstrated by the Eilisys team during the implementation period. And we would like to applaud the prompt customer service extended by the colleagues. Special thanks to all the experts Uday, Yogesh, Santosh and Dhananjay for managing this challenging project and quick to resolve all the issues. A massive thank you to each one of you! Our team is really satisfied and grateful for your continuous efforts & assistance and we look forward to continuing this committed relationship.",
    author: "Rahul Dabi",
    role: "Chief Manager - Human Resource Administration ŠKODA Volkswagen India Private Limited",
    logo: ASSETS.logoSkodaVw,
    logoWidth: 93,
    logoHeight: 40,
  },
  {
    quote:
      "Eilisys has great products, made by an awesome team. We had a payroll software before this and it was terrible and when we went out in market to search for a new payroll software then Eilisys team showed up out of nowhere in competition to big boys of software world and they came so strong that we had no reason to why not take payroll software from Eilisys. We are using this since 2011 and it is a very stable system.",
    author: "Amit Bedi",
    role: "Director - Finance Bain & Company Pvt. Ltd.",
    logo: ASSETS.logoBain,
    logoWidth: 120,
    logoHeight: 40,
  },
];

function ReadFullStoryLink() {
  return (
    <Link
      href="#"
      className="inline-flex items-center gap-2 font-heading text-base font-semibold leading-6 text-[#3473da] transition-opacity hover:opacity-80"
    >
      Read Full Story
      <ArrowRight className="size-5" aria-hidden="true" />
    </Link>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-eilisys-white px-[var(--section-x)] pb-32 pt-[var(--section-y)]"
    >
      <div className="mx-auto max-w-[var(--content-inner)]">
        <div className="flex flex-col items-center gap-16 overflow-hidden rounded-lg bg-eilisys-dark-bg p-12">
          <div className="flex w-full max-w-[896px] flex-col items-start gap-5 py-6">
            <h2
              id="testimonials-heading"
              className="font-heading text-h2 text-eilisys-light-text"
            >
              <span>Trusted for </span>
              <span className="text-[#79a7d7]">
                contract workforce visibility, compliance and cost control
              </span>
            </h2>
            <p className="max-w-[768px] font-body text-body-2 text-eilisys-dark-subtext">
              Enterprises choose the Ascent Contract Workforce Management system
              when they need better control over contractor records, workforce
              presence, billing accuracy and compliance readiness across sites
              and teams.
            </p>
            <div className="flex items-center gap-5">
              <Image
                src={ASSETS.reviewBadges}
                alt="G2 and Google review badges"
                width={171}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex w-full max-w-[1184px] flex-col gap-12">
            <article className="flex flex-col gap-12 rounded-lg border border-eilisys-border-gray bg-eilisys-white p-8 lg:flex-row lg:items-center">
              <div className="relative size-[316px] shrink-0 overflow-hidden rounded-md">
                <Image
                  src={ASSETS.testimonialFeatured}
                  alt="Trent Limited retail store"
                  fill
                  className="object-cover"
                  sizes="316px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <p className="font-body text-xl leading-[30px] text-eilisys-primary-text">
                    {featuredTestimonial.quote}
                  </p>
                  <ReadFullStoryLink />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-body-4 text-[#4c5c6d]">
                      {featuredTestimonial.author}
                    </p>
                    <p className="font-body text-base font-medium leading-6 text-eilisys-primary-text">
                      {featuredTestimonial.role} {featuredTestimonial.company}
                    </p>
                  </div>
                  <Image
                    src={featuredTestimonial.logo}
                    alt="Trent Limited logo"
                    width={featuredTestimonial.logoWidth}
                    height={featuredTestimonial.logoHeight}
                    className="h-10 w-auto object-contain object-left"
                  />
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {gridTestimonials.map((item) => (
                <article
                  key={item.author}
                  className="flex h-full flex-col justify-between gap-12 rounded-lg border border-eilisys-border-gray bg-eilisys-white p-8"
                >
                  <div className="flex flex-col gap-8">
                    <p className="line-clamp-[12] font-body text-xl leading-[30px] text-eilisys-primary-text">
                      {item.quote}
                    </p>
                    <ReadFullStoryLink />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-body text-body-4 text-[#4c5c6d]">
                        {item.author}
                      </p>
                      <p className="font-body text-base font-medium leading-6 text-eilisys-primary-text">
                        {item.role}
                      </p>
                    </div>
                    <Image
                      src={item.logo}
                      alt={`${item.author} company logo`}
                      width={item.logoWidth}
                      height={item.logoHeight}
                      className="h-10 w-auto object-contain object-left"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Button size="lg" showArrow>
            View all Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}
