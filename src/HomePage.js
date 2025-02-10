import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css'; // Add CSS for profile icon and general styling

function Homepage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  // Domains and descriptions
  const domains = [
    {
      name: "Cinematography",
      description: "Art of visual storytelling", path:"/domains/Cinematography"
    },
    {
      name: "Screenwriting",
      description: "Writing compelling scripts",path:"/domains/Screenwriting"
    },
    {
      name: "Directing",
      description: "Guiding film production",path:"/domains/Direction"
    },
    {
      name: "Editing",
      description: "Arranging visual footage",path:"/domains/Editing"
    },
    {
      name: "Production",
      description: "Managing film process",path:"/domains/Production"
    },
    {
      name: "Sound_Design",
      description: "Creating sound effects",path:"/domains/SoundDesign"
    },
    {
      name: "Visual_Effects",
      description: "Creating digital effects",path:"/domains/VisualEffects"
    },
    {
      name: "Costume Design",
      description: "Designing character costumes",path:"/domains/CostumeDesign"
    },
    {
      name: "Film Music",
      description: "Composing film scores",path:"/domains/FilmMusic"
    },
  ];

  // Handle domain click (navigate to a new page or update content)
  const handleDomainClick = (domain) => {
    navigate(`/domain/${domain.name}`); // Navigate to a domain-specific page
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjz2oifUiW_M37QTkFUm8vjs26409hashFRCFJ0W87Y3fZp0T0fCOC_8zzVm4pRBr920A&usqp=CAU')", // Updated background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the full screen
      }}
    >
      {/* Include Google Font for handwritten style */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
        rel="stylesheet"
      />

      {/* Updated heading with cursive font */}
      <h1
        style={{
          fontFamily: "'Dancing Script', cursive", // Apply the Dancing Script font
          fontSize: "3rem",
          color: "#fff", // White text color for contrast
          marginBottom: "2rem",
        }}
      >
        Welcome to ArtConnect
      </h1>

      {/* Search Bar and Profile Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center", // Ensure both are vertically aligned
          position: "absolute",
          top: "20px",
          right: "20px", // Align both items to the right
        }}
      >
        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          style={{
            padding: "0.5rem",
            borderRadius: "20px",
            border: "2px solid #fff",
            marginRight: "3cm", // Create 3 cm distance between search bar and profile image
            outline: "none",
            width: "200px",
          }}
        />

        {/* Profile Icon */}
        <div
          className="profile-icon"
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/profile")} // Navigate to profile page
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3Z1x2Gh1fwbXhqvNekPS4DfWm0rdweKQjA&s" // Updated profile icon URL
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor: "#fff",
              padding: "5px",
            }}
          />
        </div>
      </div>

      {/* Domains display */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {domains.map((domain) => (
          <div
            key={domain.name}
            onClick={() => handleDomainClick(domain)}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Lighter background shade
              margin: "1rem",
              padding: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "200px", // Larger domain boxes
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {domain.name}
            </h3>
            <p>{domain.description}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-icon" onClick={() => navigate("/chatbot")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
          alt="Chatbot"
        />
      </div>
    </div>
  );
}

export default Homepage;
