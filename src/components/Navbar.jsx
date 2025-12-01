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

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Qualification" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            {/* Brand */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                color: "#4C1D95",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("about")}
            >
              Savindi<span style={{ color: "#0EA5E9" }}>.</span>
            </Typography>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navItems.map((nav) => (
                <Button
                  key={nav.id}
                  onClick={() => scrollToSection(nav.id)}
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
                    },
                  }}
                >
                  {nav.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "#0f172a" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Drawer */}
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "#0f172a" }} />
          </IconButton>
        </Box>

        <List>
          {navItems.map((nav) => (
            <ListItem key={nav.id} sx={{ justifyContent: "center" }}>
              <motion.div whileHover={{ scale: 1.06, x: 4 }}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(nav.id);
                  }}
                  sx={{
                    textAlign: "center",
                    py: 1.4,
                    borderRadius: 2,
                    fontWeight: 700,
                    color: "#071227",
                    background: "rgba(255,255,255,0.6)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.85)",
                    },
                  }}
                >
                  {nav.label}
                </ListItemButton>
              </motion.div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
