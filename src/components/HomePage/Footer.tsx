import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import styles from "./Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>FitnessApp</h3>
            <p className={styles.footerDescription}>
              Your personal fitness companion for a healthier lifestyle.
            </p>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#" className={styles.footerLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Useful Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Follow us on social media</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 BombiniaiBebrai. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms
            </a>
            <a href="#" className={styles.legalLink}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
