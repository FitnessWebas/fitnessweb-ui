import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState, useRef, useEffect } from "react";
import RegisterModal from "../ModalPopUp/RegisterModal";
import LoginModal from "../ModalPopUp/LogInModal";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSearch = () => setIsExpanded(!isExpanded);

  const handleOpenRegisterModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowRegisterModal(true);
    closeSidebar();
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleOpenLoginModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowLoginModal(true);
    closeSidebar();
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleOpenLoginModalHasAcc = () => {
    handleCloseRegisterModal();
    setShowLoginModal(true);
    closeSidebar();
  };

  const handleOpenRegisterModalNoAcc = () => {
    handleCloseLoginModal();
    setShowRegisterModal(true);
    closeSidebar();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>

      <div
        ref={searchRef}
        className={`${styles.searchContainer} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <button className={styles.searchIcon} onClick={toggleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
        <input type="text" placeholder="Search..." />
      </div>

      <label className={styles.openSidebarButton} onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      <div
        className={`${styles.overlay} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
        onClick={closeSidebar}
      ></div>

      <div
        className={`${styles.linksContainer} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <label className={styles.closeSidebarButton} onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>

        <Link to="/Exercises/Directory" onClick={closeSidebar}>
          Exercises
        </Link>

        <Link to="/Workouts/Generator" onClick={closeSidebar}>
          Workout Generator
        </Link>

        <Link to="/Register" onClick={handleOpenRegisterModal}>
          Register
        </Link>
        <Link to="/Login" onClick={handleOpenLoginModal}>
          Login
        </Link>
      </div>

      <RegisterModal
        show={showRegisterModal}
        onClose={handleCloseRegisterModal}
        onOpenLogin={handleOpenLoginModalHasAcc}
      />
      <LoginModal
        show={showLoginModal}
        onClose={handleCloseLoginModal}
        OnOpenRegister={handleOpenRegisterModalNoAcc}
      />
    </nav>
  );
}

export default NavBar;
