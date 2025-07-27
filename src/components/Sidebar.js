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



