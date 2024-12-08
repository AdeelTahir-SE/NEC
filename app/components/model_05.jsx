import React from "react";

const MainPage5 = () => {
  const teamMembers = [
    {
      name: "Bonnie Green",
      title: "Senior Front-end Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Thomas Lean",
      title: "Senior Front-end Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jese Leos",
      title: "Senior Front-end Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Leslie Livingston",
      title: "Senior Front-end Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <section className="py-12 bg-teal-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[2rem] font-bold text-blue-800 mb-4">Our Team</h2>
        <p className="text-gray-600 mb-8 text-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[1.3rem]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h3 className=" font-bold text-blue-800">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="text-[1.2rem] text-gray-600 mt-4">{member.description}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.social.facebook}
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage5;
