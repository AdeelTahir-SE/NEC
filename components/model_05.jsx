import React from "react";

const MainPage5 = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      description:
        "Tech visionary with 15+ years experience in scaling AI-driven platforms. Leads our technical strategy and infrastructure development.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Michael Chen",
      title: "Lead Product Designer",
      description:
        "UI/UX expert specializing in user-centered design. Created award-winning interfaces for Fortune 500 companies.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Aisha Patel",
      title: "Senior Blockchain Engineer",
      description:
        "DeFi protocol specialist. Built scalable smart contract systems handling 1M+ daily transactions.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Müller",
      title: "Head of Growth",
      description:
        "Growth hacking expert. Scaled multiple startups from 0 to 1M+ users through data-driven strategies.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Heading Section */}
        <div className="mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-blue-800 mb-3 md:mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-[1.2rem] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-4 md:p-6 text-center"
            >
              {/* Member Info */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 md:mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                  {member.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose mb-4 md:mb-6">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 md:gap-4">
                {Object.entries(member.social).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300 text-lg md:text-xl"
                    aria-label={platform}
                  >
                    <i
                      className={`fab fa-${platform}${
                        platform === "linkedin" ? "-in" : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage5;
