import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "../assets/savindi.png";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 12,
        px: 3,
        background:
          "radial-gradient(circle at 15% 20%, rgba(126,34,206,0.15), transparent 60%), linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 8,
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#4C1D95",
                fontFamily: "Poppins",
                lineHeight: 1.1,
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#7e22ce" }}>Savindi Disanayake</span>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                mb: 4,
                color: "#475569",
                maxWidth: 520,
                mx: { xs: "auto", md: "0" },
                fontSize: "1.05rem",
              }}
            >
              Software Engineer Intern at Dockyard Total Solutions, specializing
              in MERN stack development and modern UI engineering. Skilled in
              React (Redux), .NET, and C++, with a strong foundation in
              full-stack software development. Currently pursuing a BSc (Hons)
              in Information Technology at SLIIT, driven by a passion for
              building impactful, intuitive digital experiences.
            </Typography>

            {/* SOCIAL ICONS */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton href="mailto:ssavindi660@gmail.com">
                <MdEmail size={26} color="#7e22ce" />
              </IconButton>

              <IconButton href="https://github.com/savindi500" target="_blank">
                <FaGithub size={26} color="#1e293b" />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/savindi-disanayake-552048315/"
                target="_blank"
              >
                <FaLinkedin size={26} color="#7e22ce" />
              </IconButton>
            </Stack>

            {/* BUTTONS */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("projects")}
                style={{
                  background: "linear-gradient(90deg, #7e22ce, #4C1D95)",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "none",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(126,34,206,0.25)",
                }}
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("contact")}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(126,34,206,0.25)",
                  color: "#4C1D95",
                  fontWeight: 700,
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
              >
                Contact Me
              </motion.button>
            </Box>
          </motion.div>
        </Box>

        {/* RIGHT IMAGE: 3D FLOATING GLASS CARD */}
        <Box
          sx={{
            width: { xs: 280, sm: 340, md: 420 },
            perspective: 1200,
          }}
        >
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            style={{
              padding: 12,
              borderRadius: 18,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(247,244,255,0.4))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 25px 60px rgba(124,58,237,0.25)",
            }}
          >
            <motion.img
              src={Image}
              alt="Savindi"
              style={{
                width: "100%",
                height: 330,
                objectFit: "cover",
                borderRadius: 14,
                boxShadow: "0 15px 35px rgba(124,58,237,0.25)",
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
