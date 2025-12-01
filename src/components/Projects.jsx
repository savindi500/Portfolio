import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Assets
import dashboard from "../assets/dashboard.png";
import ecom from "../assets/ecom.png";
import backend from "../assets/backend.png";
import zara from "../assets/zara.png";
import kotlin from "../assets/kotlin.png";
import vibecare from "../assets/vibecare.png";

const projects = [
  {
    id: 1,
    title: "SmartSched Web - Academic Scheduler 🎓📅",
    description:
      "A conflict-free timetable management system — fully developed by me with modern UI and scheduling logic.",
    image:
      "https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&w=800&q=60",
    demoLink: "https://github.com/Sanka11/SmartSched.git",
  },

  {
    id: 2,
    title: "DesignHive – Skill Sharing & Learning Platform",
    description:
      "A modern UI/UX learning platform I developed focusing on clean layouts, skill sharing and responsive design.",
    image:
      "https://images.unsplash.com/photo-1604145187954-0c3e4e3d0c1a?auto=format&fit=crop&w=800&q=60",
    demoLink:
      "https://www.linkedin.com/posts/savindi-disanayake-552048315_uiux-designcommunity-skillsharing-activity-7347632914144092160-64oE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_rDQ4BZatLr_Kgdt0hNdILPCZqRrEBmBo",
  },

  {
    id: 3,
    title: "Aroma Haven – Café Website",
    description:
      "A cafe website I fully developed myself — focusing on UI/UX and elegant frontend styling using React.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    demoLink: "https://savindi500.github.io/cafe-website/",
  },

  {
    id: 4,
    title: "Farm Management System (MERN)",
    description:
      "A full-featured farm management dashboard using MERN Stack, CRUD, analytics and role-based UI.",
    image: dashboard,
    demoLink: "https://github.com/savindi500/Farm-Management.git",
  },

  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "Modern shopping UI with React & Redux — clean product flow and state management.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60",
    demoLink: "https://github.com/savindi500/Ecom",
  },

  {
    id: 6,
    title: "Spring Boot Backend API",
    description:
      "User profile backend system using Spring Boot — endpoints, controllers and secure APIs.",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=60",
    demoLink:
      "https://github.com/savindi500/userprofile-spring-boot-/tree/master",
  },

  {
    id: 7,
    title: "Zara Website Redesign (Figma)",
    description:
      "A modern redesign of Zara website screens — focusing on UI consistency and layout improvement.",
    image: zara,
    demoLink:
      "https://www.linkedin.com/posts/savindi-disanayake-552048315_uiuxdesign-humancomputerinteraction-designthinking-activity-7269327252834639874--Oag",
  },

  {
    id: 8,
    title: "VibeCare App (Designathon)",
    description:
      "Healthcare mobile UI/UX prototype designed for a competition.",
    image: vibecare,
    demoLink:
      "https://www.figma.com/design/u1j6trvTsFHxu1lHu35KYn/Zara-Website-Re-Designing?node-id=0-1",
  },
];


const Projects = () => {
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
                padding: "24px",
                borderRadius: "20px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow:
                  "0 20px 40px rgba(76,29,149,0.18), inset 0 1px 0 rgba(255,255,255,0.8)",
                height: "100%",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: "14px",
                  boxShadow: "0 12px 28px rgba(76,29,149,0.2)",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mt: 1,
                  textAlign: "center",
                  color: "#4C1D95",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  mb: 2,
                  textAlign: "center",
                  color: "#4B5563",
                  minHeight: "55px",
                  px: 1,
                }}
              >
                {project.description}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#4C1D95",
                  textTransform: "capitalize",
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "#3A0F7A",
                  },
                }}
                href={project.demoLink}
                target="_blank"
              >
                View Demo
              </Button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Projects;
