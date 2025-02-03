import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Amit Gupta",
      role: "Director,",
      department: "Evidence for Change",
      imgSrc: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/esg-team/Amit-Gupta.png"
    },
    {
      name: "Priyamvada Tiwari",
      role: "Associate Director,",
      department: "Platform & Policy",
      imgSrc: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/esg-team/Priyamvada-Tiwari.png"
    },
    {
      name: "Shankar AG",
      role: "Program Director,",
      department: "Swasti",
      imgSrc: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/esg-team/Shaonli-Chakraborty.png"
    },
    {
      name: "Shaonli Chakraborty",
      role: "Director,",
      department: "Upfront",
      imgSrc: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/esg-team/Vishrut-Shivkumar.png"
    },
    {
        name: "Amit Gupta",
        role: "Director,",
        department: "Evidence for Change",
        imgSrc: "/whyEsgOne/Vishrut Shivkumar.png"
      },
      {
        name: "Karthik E",
        role: "Associate Director,",
        department: "Platform & Policy",
        imgSrc: "/whyEsgOne/Karthik.png"
      },
      {
        name: "Amruta Vyavahare",
        role: "Sr. Research Lead,",
        department: "Evidence for Change",
        imgSrc: "/whyEsgOne/Amruta Vyavahare.png"
      }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-[#632E88] text-center mb-12">
        Meet our Team
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Container */}
            <div className="w-full aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-[#7E3F98] text-2xl  text-center">
              {member.name}
            </h3>

            {/* Role and Department */}
            <div className="text-center  text-lg">
              <p>{member.role}</p>
              <p>{member.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;