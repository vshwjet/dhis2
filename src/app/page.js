import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
    </main>
  );
}

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#12191E] min-h-screen">
        <Header />
        <div className="container flex items-center justify-between mx-auto my-32 px-4">
          <div className="hero-text text-white font-[Satoshi]">
            <h1 className="text-5xl font-medium leading-[1.3]">
              Revolutionizing Data-Driven <br /> Healthcare Worldwide
            </h1>
            <p className="text-xl mt-[24px] leading-[140%]">
              The world&apos;s largest health information management system —
              <br />
              developed through global collaboration led by University of Oslo
            </p>
            <div className="resources bg-[#20272D] p-8 mt-[60px] rounded-[10px]">
              <h3 className="mb-6 text-[28px] leading-[120%]">
                Explore the Latest Releases
              </h3>
              <div className="resource-links text-[#3994FF]">
                <Link
                  href={"/"}
                  className="flex items-center text-[18px] mb-[22px] gap-2.5"
                >
                  DHIS2 Version 40 Overview
                  <Image
                    src="/assets/right-arrow.svg"
                    width={24}
                    height={24}
                    alt="Dhis2 Logo"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center text-[18px] gap-2.5"
                >
                  Android Capture App v2.8 Overview
                  <Image
                    src="/assets/right-arrow.svg"
                    width={24}
                    height={24}
                    alt="Dhis2 Logo"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/assets/hero-image.png"
              width={773}
              height={550}
              alt="Dhis2 Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const navLinks = [
    { id: 1, linkName: "About", linK: "/" },
    { id: 2, linkName: "Features", linK: "/" },
    { id: 3, linkName: "Resources", linK: "/" },
    { id: 4, linkName: "Academy", linK: "/" },
    { id: 5, linkName: "Health", linK: "/" },
    { id: 6, linkName: "Logistics", linK: "/" },
    { id: 7, linkName: "Education", linK: "/" },
    { id: 8, linkName: "Downloads", linK: "/" },
  ];

  return (
    <>
      <div className="container flex justify-between items-center py-8 px-4 mx-auto">
        <div className="logo">
          <Image
            src="/assets/dhis2-logo.svg"
            width={125}
            height={38}
            alt="Dhis2 Logo"
          />
        </div>
        <div className="nav">
          <div className="flex gap-8">
            {navLinks.map((item) => (
              <Link key={item.id} href={item.linK}>
                <article className="text-base font-[Satoshi] font-regular text-white">
                  {item.linkName}
                </article>
              </Link>
            ))}
            <Link href="/">
              <span className="flex gap-1.5">
                <article className="text-[#EE6161] font-[Satoshi] text-base">
                  COVID-19
                </article>
                <Image
                  src="/assets/Coronavirus.svg"
                  width={14}
                  height={14}
                  alt="Dhis2 Logo"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <div className="feature-cards container px-4 mx-auto my-[100px]">
        <div className="cardsheader flex flex-col items-center">
          <h3 className="text-4xl w-[711px] text-center font-[Satoshi] font-medium leading-[120%] mb-12">
            <span className="text-[#1B85FF]">
              Collect, manage, visualize & analyze
            </span>{" "}
            your data — all in one place
          </h3>
          <p className="text-[#021a3e] w-[844px] text-center font-['Satoshi'] text-xl font-medium leading-[140%]">
            DHIS2 is a versatile, open-source software platform, customizable
            for various uses like health, logistics, or education. It integrates
            data from multiple sources into one unified system.
          </p>
        </div>
        <div className="cards-container grid grid-cols-4 gap-[30px] grid-rows-2 mt-[78px]">
          <div className="col-span-1 row-span-2 card-single-1 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip">
            <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
              Analytics and Visualization
            </article>
            <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%]">
              Use maps, charts, and pivot tables to explore your data.
            </p>
            <Image
              src="/assets/laptop-analytics.png"
              width={572}
              height={772}
              alt="Laptop showing analytics"
              className="mt-[45px] w-[572] h-auto max-w-none"
            />
          </div>
          <div className="col-span-2 row-span-1 card-single-2 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip flex flex-row items-end relative">
            <div>
              <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
                Enter Data Anywhere
              </article>
              <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%] w-[375px]">
                Capture and view individual and aggregate data using custom
                forms on a wide range of devices
              </p>
            </div>
            <Image
              src="/assets/phone.png"
              width={304}
              height={772}
              alt="Laptop showing analytics"
              className="w-[304px] h-auto max-w-none absolute top-[30px] right-0"
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-2 card-single-3 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip flex flex-row items-end relative">
            <div>
              <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
                Case Management
              </article>
              <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%]">
                With Tracker, you can collect and analyze case-based data to
                track a person or entity over time
              </p>
            </div>
          </div>
          <div className="col-start-3 col-span-1 row-start-2 card-single-4 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip flex flex-row items-end relative">
            <div>
              <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
                Open Ecosystem
              </article>
              <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%]">
                Enhance your DHIS2 implementation with custom apps, metadata
                packages, and other open-source tools
              </p>
            </div>
          </div>
          <div className="col-start-4 col-span-1 row-start-1 card-single-5 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip flex flex-row items-end relative">
            <div>
              <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
                Security and Privacy
              </article>
              <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%]">
                DHIS2 comes with a set of configurable privacy tools like user
                management and sharing settings
              </p>
            </div>
          </div>
          <div className="col-start-4 col-span-1 row-start-2 card-single-6 rounded-xl bg-[#eaecf0] p-[42px] overflow-clip flex flex-row items-end relative">
            <div>
              <article className="text-[#021a3e] font-['Satoshi'] text-2xl font-medium leading-[120%]">
                Internationalised
              </article>
              <p className="text-[#2b2b2b] mt-[14px] font-['Satoshi'] font-medium leading-[160%]">
                You can translate your content and interface into as many
                languages as you like, and users can switch languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
