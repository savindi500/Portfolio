
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import timetable from "../assets/timetable.jpg";
import ecom from "../assets/ecom.png";
import skill from "../assets/skill.png";
import cafe from "../assets/aroma.png";
import zara from "../assets/zara.png";
import crop from "../assets/crop.jpg";
import vibecare from "../assets/vibecare.png";
import backend from "../assets/backend.png";

// Add placeholder imports for new projects

import qrOrderSystem from "../assets/QR.jpg";
import ecommerceShopping from "../assets/clothing.jpg";

const projects = [
  // New Project 1: QR-Based Restaurant Food Ordering System
  {
    id: 9,
    title: "QR-Based Restaurant Food Ordering System 🍽️📱",
    description:
      "Full-stack QR-based food ordering web app with real-time order tracking for customers, kitchen, and admin.",
    image: qrOrderSystem,
  },

  // New Project 2: E-Commerce Shopping Website
  {
    id: 10,
    title: "E-Commerce Shopping Website 🛍️",
    description:
      "Full-stack e-commerce platform for clothing with order tracking, return management, and admin dashboard.",
    image: ecommerceShopping,
  },

  // Existing projects
  {
    id: 1,
    title: "SmartSched Web - Academic Scheduler 🎓📅",
    description:
      "A conflict-free timetable management system — fully developed by me with modern UI and scheduling logic.",
    image: timetable,
  },
  {
    id: 2,
    title: "DesignHive – Skill Sharing & Learning Platform",
    description:
      "A modern UI/UX learning platform I developed focusing on clean layouts, skill sharing and responsive design.",
    image: skill,
  },
  {
    id: 3,
    title: "Aroma Haven – Café Website",
    description:
      "A cafe website I fully developed myself — focusing on UI/UX and elegant frontend styling using React.",
    image: cafe,
  },
  {
    id: 4,
    title: "Farm Management System (MERN)",
    description:
      "A full-featured farm management dashboard using MERN Stack, CRUD, analytics and role-based UI.",
    image: crop,
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "Modern shopping UI with React & Redux — clean product flow and state management.",
    image: ecom,
  },
  {
    id: 6,
    title: "Spring Boot Backend API",
    description:
      "User profile backend system using Spring Boot — endpoints, controllers and secure APIs.",
    image: backend,
  },
  {
    id: 7,
    title: "Zara Website Redesign (Figma)",
    description:
      "A modern redesign of Zara website screens — focusing on UI consistency and layout improvement.",
    image: zara,
  },
  {
    id: 8,
    title: "VibeCare App (Designathon)",
    description:
      "Healthcare mobile UI/UX prototype designed for a competition.",
    image: vibecare,
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleViewDemo = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        px: 3,
        background:
          "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.18), transparent 60%), linear-gradient(135deg, #F8F5FF 0%, #EFE8FF 100%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 900,
          mb: 8,
          color: "#4C1D95",
          fontFamily: "Poppins",
        }}
      >
        Projects 🚀
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{
          width: "90%",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              whileHover={{
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              style={{
                height: "100%", // Ensure full height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow:
                    "0 20px 40px rgba(76,29,149,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 25px 50px rgba(76,29,149,0.25)",
                  },
                }}
              >
                {/* Image Container with Fixed Height */}
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Box>

                {/* Card Content with Fixed Height */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                    pb: 2,
                  }}
                >
                  {/* Title with Fixed Height */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#4C1D95",
                      textAlign: "center",
                      mb: 2,
                      minHeight: "64px", // Fixed height for 2 lines
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Description with Fixed Height */}
                  <Typography
                    sx={{
                      color: "#4B5563",
                      textAlign: "center",
                      flexGrow: 1,
                      mb: 2,
                      minHeight: "80px", // Fixed height for description
                      maxHeight: "80px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: 1.5,
                      fontSize: "0.95rem",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                {/* Button - Fixed at Bottom */}
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleViewDemo(project.id)}
                    sx={{
                      bgcolor: "#4C1D95",
                      textTransform: "capitalize",
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "#3A0F7A",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(76, 29, 149, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Projects;