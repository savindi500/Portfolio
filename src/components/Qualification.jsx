import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBriefcase } from "react-icons/fa";

const Qualification = () => {
  const [tab, setTab] = useState(0);

  // Education
  const education = [
    {
      title: "BSc (Hons) Information Technology",
      institution: "SLIIT – Sri Lanka Institute of Information Technology",
      date: "2022 – Present",
      icon: <FaGraduationCap size={22} color="#7e22ce" />,
    },
  ];

 
  const experience = [
    {
      title: "Software Engineering Intern",
      institution: "Dockyard Total Solutions",
      date: "September 2025  – March 2025",
      icon: <FaBriefcase size={22} color="#7e22ce" />,
    },
  ];

  
  const certifications = [
    {
      title: "2nd Runner-Up – CODEFEST Designathon",
      institution: "SLIIT",
      date: "2025",
      icon: <FaCertificate size={22} color="#7e22ce" />,
    },
    {
      title: "AWS Academy Graduate – Cloud Web Application Builder",
      institution: "AWS Academy Training Badge ",
      date: "2025",
      icon: <FaCertificate size={22} color="#7e22ce" />,
    },

    {
      title: "Learning SQL Programming",
      institution: "LinkedIn",
      date: "2024",
      icon: <FaCertificate size={22} color="#7e22ce" />,
    },
  ];

  // Card Renderer
  const renderCards = (items) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={10} md={8} key={index}>
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "white",
              border: "1px solid rgba(126,34,206,0.15)",
              boxShadow:
                "0 25px 45px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Icon */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",
                  border: "1px solid rgba(126,34,206,0.25)",
                  boxShadow: "0px 10px 30px rgba(126,34,206,0.15)",
                }}
              >
                {item.icon}
              </Box>
            </Box>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                textAlign: "center",
                color: "#4C1D95",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "#475569",
                mt: 1,
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {item.institution}
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                mt: 1,
                fontWeight: 700,
                color: "#7e22ce",
              }}
            >
              {item.date}
            </Typography>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        px: 3,
        background:
          "radial-gradient(circle at 20% 20%, rgba(126,34,206,0.15), transparent 60%), linear-gradient(135deg, #faf5ff, #f3e8ff)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 900,
          mb: 4,
          color: "#4C1D95",
          fontFamily: "Poppins",
        }}
      >
        Qualification
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        centered
        TabIndicatorProps={{ style: { backgroundColor: "#7e22ce" } }}
        sx={{
          "& .MuiTab-root": {
            fontWeight: 700,
            color: "#4C1D95",
            textTransform: "none",
          },
          "& .Mui-selected": {
            color: "#7e22ce",
          },
        }}
      >
        <Tab icon={<FaGraduationCap />} label="Education" />
        <Tab icon={<FaBriefcase />} label="Experience" />
        <Tab icon={<FaCertificate />} label="Certifications" />
      </Tabs>

      {/* Render Cards */}
      {tab === 0 && renderCards(education)}
      {tab === 1 && renderCards(experience)}
      {tab === 2 && renderCards(certifications)}
    </Box>
  );
};

export default Qualification;
