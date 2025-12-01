import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        px: 3,
        background:
          "radial-gradient(circle at 80% 20%, rgba(126,34,206,0.12), transparent 60%), #ffffff",
      }}
    >
      <Box
        sx={{
          maxWidth: 850,
          mx: "auto",
          textAlign: "center",
          p: 4,
          borderRadius: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.4))",
          backdropFilter: "blur(8px)",
          boxShadow: "0 18px 45px rgba(124,58,237,0.18)",
          border: "1px solid rgba(255,255,255,0.65)",
        }}
      >
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              mb: 3,
              color: "#4C1D95",
              fontFamily: "Poppins",
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Typography
            sx={{
              color: "#475569",
              lineHeight: 1.8,
              mb: 4,
              fontSize: "1.05rem",
            }}
          >
            I am an undergraduate at the Sri Lanka Institute of Information
            Technology (SLIIT), specializing in Information Technology, with a
            strong passion for building modern, scalable, and user-centered
            digital solutions. During my internship at Dockyard Total Solutions,
            I gained hands-on experience working on real-world software
            projects, strengthening my skills in full-stack development,
            problem-solving, and collaborative engineering.
            <br />I enjoy creating clean, intuitive UI/UX experiences and
            developing robust applications using technologies such as the MERN
            stack, Java, Kotlin, and cloud-based tools. With a continuous drive
            to learn and improve, I strive to deliver impactful solutions that
            combine performance, usability, and thoughtful design.
          </Typography>
        </motion.div>

        {/* BUTTON */}
        <motion.div whileHover={{ scale: 1.04 }}>
          <Button
            variant="contained"
            href="/cv/Savindi_Disanayake_CV.pdf"
            download
            sx={{
              background: "linear-gradient(90deg, #7e22ce, #4C1D95)",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { background: "#6d28d9" },
            }}
          >
            Download CV
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
