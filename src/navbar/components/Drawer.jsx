import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Nav, Container,  } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar expand="lg" className="bg-white sticky-top">
      <Container>
        <Navbar.Brand href="#" className="font-bold text-3xl">KP RAHUL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-96 gap-4 d-none d-lg-flex ">
            <Nav.Link href="#" className="py-2">Home</Nav.Link>
            <Nav.Link href="#" className="py-2">About</Nav.Link>
            <Nav.Link href="#" className="py-2">Services</Nav.Link>
            <Nav.Link href="#" className="py-2">Portfolio</Nav.Link>
            <Nav.Link href="#" className="py-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="d-lg-none bg-white shadow-lg absolute top-100 left-0 right-0 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Nav className="flex flex-col">
                <Nav.Link href="#" className="py-2">Home</Nav.Link>
                <Nav.Link href="#" className="py-2">About</Nav.Link>
                <Nav.Link href="#" className="py-2">Services</Nav.Link>
                <Nav.Link href="#" className="py-2">Portfolio</Nav.Link>
                <Nav.Link href="#" className="py-2">Contact</Nav.Link>
              </Nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Navbar>
  );
}
