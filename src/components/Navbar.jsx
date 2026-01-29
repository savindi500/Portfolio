import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Qualification" },
  { id: "contact", label: "Contact" },
];

// Scroll function for single-page sections
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on a project details page
  const isProjectDetailsPage = location.pathname.startsWith("/project/");

  // Handle navigation to home page with scroll
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      navigate("/");
      // Scroll to top after a small delay to ensure page is loaded
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // Handle navigation to sections - FIXED VERSION
  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // If on home page, just scroll
      scrollToSection(id);
    } else {
      // Navigate to home page first
      navigate("/");
      // Wait for home page to load, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Smooth scroll to the section
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150); // Increased delay to ensure page loads
    }
    setOpen(false);
  };

  // Handle back to projects - FIXED VERSION
  const handleBackToProjects = () => {
    if (isProjectDetailsPage) {
      // Navigate to home page and scroll to projects section
      navigate("/");
      setTimeout(() => {
        const projectsElement = document.getElementById("projects");
        if (projectsElement) {
          projectsElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }
  };

  // Handle back to home from any page
  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Center Wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "sticky",
          top: 16,
          zIndex: 1000,
        }}
      >
        <AppBar
          elevation={0}
          sx={{
            width: { xs: "95%", md: "80%", lg: "70%" },
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.35)",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            position: "static",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Brand/Logo with back button on project details page */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {isProjectDetailsPage ? (
                <>
                  <Button
                    onClick={handleBackToProjects}
                    sx={{
                      minWidth: "auto",
                      p: 0.5,
                      color: "#4C1D95",
                      fontWeight: 600,
                      "&:hover": {
                        background: "rgba(76, 29, 149, 0.1)",
                        transform: "translateX(-2px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    ← Back to Projects
                  </Button>
                </>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontFamily: "Poppins, sans-serif",
                    color: "#4C1D95",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                  onClick={handleHomeClick}
                >
                  Savindi<span style={{ color: "#0EA5E9" }}>.</span>
                </Typography>
              )}
            </Box>

            {/* Desktop Links - Only show on home page */}
            {!isProjectDetailsPage && (
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {navItems.map((nav) => (
                  <Button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#0f172a",
                      px: 2,
                      borderRadius: 2,
                      backdropFilter: "blur(6px)",
                      background: "rgba(255,255,255,0.35)",
                      "&:hover": {
                        background: "rgba(255,255,255,0.55)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {nav.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu - Show menu on home page, back button on project details */}
            {isProjectDetailsPage ? (
              <Button
                onClick={handleBackToProjects}
                sx={{
                  display: { xs: "block", md: "none" },
                  textTransform: "none",
                  color: "#4C1D95",
                  fontWeight: 600,
                  minWidth: "auto",
                  "&:hover": {
                    background: "rgba(76, 29, 149, 0.1)",
                  },
                }}
              >
                ← Back
              </Button>
            ) : (
              <IconButton
                sx={{
                  display: { xs: "block", md: "none" },
                  "&:hover": {
                    background: "rgba(255,255,255,0.5)",
                  },
                }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon sx={{ color: "#0f172a" }} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      
      {!isProjectDetailsPage && (
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: 260,
              backdropFilter: "blur(12px)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0.25))",
              borderLeft: "1px solid rgba(255,255,255,0.3)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                color: "#4C1D95",
                ml: 1,
              }}
            >
              Navigation
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ color: "#0f172a" }} />
            </IconButton>
          </Box>

          <List sx={{ px: 2 }}>
            {navItems.map((nav) => (
              <ListItem key={nav.id} sx={{ p: 0, mb: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ListItemButton
                    onClick={() => handleNavClick(nav.id)}
                    sx={{
                      textAlign: "center",
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 700,
                      color: "#071227",
                      background: "rgba(255,255,255,0.6)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      "&:hover": {
                        background: "rgba(255,255,255,0.85)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {nav.label}
                  </ListItemButton>
                </motion.div>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
