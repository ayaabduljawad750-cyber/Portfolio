import { useState } from "react";
import Modal from "../modal/Modal";
import "./header.css";

/**
 * Header Component
 * Main navigation header with responsive menu, navigation links, and theme toggle
 */
export default function Header({theme,setTheme}) {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }
  
  

  /**
   * Opens the mobile navigation modal
   */
  const handleShowModal = () => setShowModal(true);

  /**
   * Closes the mobile navigation modal
   */
  const handleCloseModal = () => setShowModal(false);

  return (
    <header className="header" id="header">
      {/* Mobile Menu Toggle Button */}
      <button
        className="menu-btn"
        onClick={handleShowModal}
        aria-label="Open navigation menu"
      >
        <i className="icon-menu1"></i>
      </button>

      {/* Spacer for layout alignment */}
      <div className="padding-div" />

      {/* Desktop Navigation */}
      <nav aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#speaking">Speaking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      <button
        className="mode-btn"
        aria-label="Toggle theme"
        onClick={changeTheme}
      >
      {theme==="dark"?<i className="icon-moon"/>:<i className="icon-sun"/>}  
      </button>

      {/* Mobile Navigation Modal */}
      {showModal && <Modal closeModel={handleCloseModal} />}
    </header>
  );
}
