import React from "react";

const MainPage5 = () => {
  const teamMembers = [
    {
      name: "Nosherwan Tahir",
      title: "Office Bearer - Tech and IT",
      description:
        "Passionate about technology and IT, Nosherwan drives the technical strategies and IT infrastructure within the society, ensuring seamless digital transformation.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Muhammad Faseeh",
      title: "Vice President",
      description:
        "Muhammad Faseeh plays a pivotal role in managing operations and helping drive initiatives forward within the society.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Muhammad Ali Imran",
      title: "President",
      description:
        "As the President, Muhammad Ali Imran leads the NUST Entrepreneurs Society with a vision for fostering innovation, entrepreneurship, and student growth.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Abdullah Khalid",
      title: "Office Bearer - Finance",
      description:
        "Abdullah manages the financial aspects of the society, ensuring that all projects are well-funded and financially sound.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Abeeha Hussain",
      title: "Office Bearer - Press",
      description:
        "Abeeha Hussain is responsible for managing the society's media presence and public relations, ensuring effective communication with the outside world.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-300">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          A passionate group of individuals dedicated to fostering innovation, supporting entrepreneurs, and driving change at the NUST Entrepreneurs Society.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-blur-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-teal-300 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-300">{member.title}</p>
              </div>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {member.description}
              </p>

              <div className="mt-6 flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className="text-gray-400 hover:text-teal-300 transition duration-300 text-lg"
                    aria-label={platform}
                  >
                    <i className={`fab fa-${platform}${platform === "linkedin" ? "-in" : ""}`} />
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