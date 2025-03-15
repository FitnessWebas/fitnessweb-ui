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
        <Link to="/Profile" onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
          </svg>
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
