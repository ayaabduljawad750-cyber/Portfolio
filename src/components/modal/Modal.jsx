import "./modal.css";

/**
 * Modal Component
 * Renders a full-screen overlay with navigation links for mobile devices
 */

export default function Modal({ closeModel }) {
  return (
    <div className="parent-modal" role="dialog" aria-modal="true">
      <div className="modal">
        <ul className="modal-links">
          {/* Close Button - First item for proper positioning */}
          <li>
            <button 
              className="close-btn"
              onClick={closeModel}
              aria-label="Close navigation menu"
            >
              <i className="icon-close"></i>
            </button>
          </li>
          
          {/* Navigation Links */}
          <li><a href="#about" onClick={closeModel}>About</a></li>
          <li><a href="#articles" onClick={closeModel}>Articles</a></li>
          <li><a href="#projects" onClick={closeModel}>Projects</a></li>
          <li><a href="#speaking" onClick={closeModel}>Speaking</a></li>
          <li><a href="#contact" onClick={closeModel}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}