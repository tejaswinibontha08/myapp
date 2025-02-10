import React from 'react';
import DomainTemplate from '../components/DomainTemplate';

const Cinematography = () => {
  const domainData = {
    title: "Cinematography",
    description: "Cinematography is the art of motion-picture photography and filming. It involves the composition, lighting, and camera techniques used to create the visual elements of film and television productions.",
    keyTopics: [
      "Camera Techniques and Movement",
      "Lighting Design and Setup",
      "Composition and Framing",
      "Color Theory and Grading",
      "Digital vs. Film Photography",
      "Advanced Camera Equipment"
    ],
    experts: [
      { name: "Roger Deakins", specialty: "Feature Film DP" },
      { name: "Rachel Morrison", specialty: "Commercial Photography" },
      { name: "Bradford Young", specialty: "Lighting Expert" },
      { name: "Hoyte van Hoytema", specialty: "IMAX Specialist" }
    ],
    resources: [
      {
        title: "American Cinematographer Magazine",
        description: "Monthly publication featuring interviews and technical articles"
      },
      {
        title: "The Five C's of Cinematography",
        description: "Essential book covering fundamental principles"
      },
      {
        title: "Digital Cinematography Archives",
        description: "Online repository of cinematography techniques"
      }
    ],
    courses: [
      {
        title: "Fundamentals of Camera Operation",
        description: "Learn basic camera operations and movement techniques",
        duration: "6 weeks",
        level: "Beginner"
      },
      {
        title: "Advanced Lighting Techniques",
        description: "Master complex lighting setups and equipment",
        duration: "8 weeks",
        level: "Advanced"
      },
      {
        title: "Digital Color Grading",
        description: "Professional color correction and grading workflows",
        duration: "4 weeks",
        level: "Intermediate"
      }
    ]
  };

  return <DomainTemplate {...domainData} />;
};

export default Cinematography;