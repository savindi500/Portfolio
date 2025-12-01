
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React.js",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Firebase",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  {
    name: "Material UI",
    icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    name: "Java",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "C",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "C++",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Git",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "Spring Boot",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  },
  {
    name: "Express.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "MySQL",
    icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        px: 3,
        background: "#ffffff", // clean white
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          mb: 7,
          color: "#4C1D95",
          fontFamily: "Poppins",
        }}
      >
        Skills
      </Typography>

      {/* Skills Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.08, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            style={{
              padding: "22px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(126,34,206,0.25)", // purple border
              boxShadow:
                "0 12px 28px rgba(126,34,206,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
              textAlign: "center",
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: 45, // smaller icon size
                height: 45,
                marginBottom: 10,
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
              }}
            />
            <Typography sx={{ fontWeight: 700, color: "#4C1D95" }}>
              {skill.name}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;

