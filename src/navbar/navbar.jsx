import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CContainer,
} from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <CNavbar
      expand="lg"
      className={`relative z-40 ${visible ? "bg-white" : "bg-transparent"} transition-colors duration-300 sticky top-0`}
    >
      <CContainer>
        <CNavbarBrand href="#" className="font-bold text-3xl text-black">
          KP RAHUL
        </CNavbarBrand>
        <CNavbarToggler
          onClick={handleToggle}
          className="text-black"
          aria-label="Toggle navigation"
          style={{ zIndex: 1050 }}
        >
          {visible ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </CNavbarToggler>

        {/* Menu for large screens */}
       

        {/* Menu for small screens */}
        <AnimatePresence>
          {visible && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white text-black shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 1040 }}
            >
              <CNavbarNav className="flex flex-col p-4">
                <CNavItem>
                  <CNavLink href="#" className="py-2">Home</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" className="py-2">About</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" className="py-2">Services</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" className="py-2">Portfolio</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" className="py-2">Contact</CNavLink>
                </CNavItem>
              </CNavbarNav>
            </motion.div>
          )}
        </AnimatePresence>
      </CContainer>
    </CNavbar>
    
  );
}
