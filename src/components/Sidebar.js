import React from "react";

function Sidebar({ toggleSidebar }) {

    const handleLinkClick = () => {
  if (window.innerWidth <= 768) {
    toggleSidebar();
  }
};

  return (
    <div className={`sidebar ${ "open" }`}>
        <div className="sidebar-profile">
        <img src="/profile_photo.jpeg" alt="Profile" className="profile-img" />
      </div>
      <nav>
        <ul>
            <li><a href="#header" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;



// import React, { useState, useEffect } from "react";


// function Sidebar({ isOpen, toggleSidebar }) {
//   const [activeSection, setActiveSection] = useState("about");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-50% 0px -50% 0px",
//         threshold: 0.5,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <div className="sidebar-profile">
//         <img src={profilePic} alt="Profile" className="profile-img" />
//         <h3 className="profile-name">Isha Vanjare</h3>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <a
//               href="#about"
//               onClick={toggleSidebar}
//               className={activeSection === "about" ? "active-link" : ""}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               onClick={toggleSidebar}
//               className={activeSection === "projects" ? "active-link" : ""}
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               onClick={toggleSidebar}
//               className={activeSection === "contact" ? "active-link" : ""}
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
