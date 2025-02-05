import React from 'react';
import { Stack, Grid, Box, Typography, Button, Avatar, IconButton, Tabs, Tab } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import {  Autoplay } from "swiper/modules";

// Import assets
import project1 from "../assets/dashboard.png";
import project2 from "../assets/ecom.png";
import project3 from "../assets/backend.png";
import project4 from "../assets/zara.png";
import project5 from "../assets/kotlin.png";
import project6 from "../assets/vibecare.png";
import Image1 from "../assets/savi.png";
import Image2 from "../assets/savi.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Smooth scroll helper function
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
  const [tabValue, setTabValue] = React.useState(0);

  // Skills data
  const skills = [
    { name: "React js", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: 'Firebase',icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "Material-UI", icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Spring Boot', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
    { name: 'Express.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'MySQL', icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    
  ];

  // Education data
  const educationData = [
    {
      title: "Bachelor of Science in Information Technology | Specializing in Information Technology",
      institution: "SLIIT",
      date: "2022 - Present",
    },
    {
      title: "G.C.E Advanced Level",
      institution: "G/Krandeniya Central College",
      date: "2021",
    },
    {
      title: "G.C.E Ordinary Level",
      institution: "G/Krandeniya Central College",
      date: "2018",
    },
  ];

  // Certifications data
  const certificationsData = [
    {
      title: "2nd Runner-Up at CODEFEST - Designathon",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      date: "2025",
    },
    {
      title: "Learning SQL Programming",
      institution: "LinkedIn",
      date: "2024",
    },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Farm Management System (MERN Stack)',
      description: 'A full-fledged farm management system built individually using the MERN stack, featuring pages for crops, staff, fields, and a home page to manage farm data efficiently.',
      image: project1,
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7282793505624621057/',
    },
    {
      id: 2,
      title: 'E-commerce Website (React & Redux)',
      description: 'A frontend e-commerce platform built with React and Redux, offering a seamless shopping experience with efficient state management.',
      image: project2,
      demoLink: 'https://github.com/savindi500/Ecom',
    },
    {
      id: 3,
      title: 'User Profile Management System (Spring Boot)',
      description: 'A backend-only system developed with Spring Boot, enabling user profile management for organizations.',
      image: project3,
      demoLink: 'https://github.com/savindi500/userprofile-spring-boot-/tree/master',
    },
    {
      id: 4,
      title: 'Zara Website Redesign',
      description: 'A redesign of Zara’s website, including pages like "Contact Us", "Edit Address", and "Product Page", using Figma.',
      image: project4,
      demoLink: 'https://www.linkedin.com/posts/savindi-disanayake-552048315_uiuxdesign-humancomputerinteraction-designthinking-activity-7269327252834639874--Oag?utm_source=share&utm_medium=member_desktop',
    },
    {
      id: 5,
      title: 'Recipe Mobile App (Kotlin)',
      description: 'A mobile app developed in Kotlin, offering users a curated collection of recipes to explore and try out.',
      image: project5,
      demoLink: '/demo-link-2',
    },
    {
      id: 6,
      title: 'VibeCare Mobile App (Figma)',
      description: 'Collaborated with a team during a designathon competition to create a user-centric mobile app prototype using Figma.',
      image: project6,
      demoLink: '/demo-link-2',
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          p: 4,
          bgcolor: 'background.paper',
          background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', // Gradient background
        }}
      >
        <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
          <Typography
            variant="h4"
            component={motion.h4}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{ fontWeight: 'bold', color: '#2d3748' }}
          >
            Hi, I'm Savindi Disanayake
          </Typography>
          <br></br>
          <Typography
            sx={{
              mt: 2,
              mb: 4,
              textAlign: 'left',
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#6b7280',
              maxWidth: '400px',
              margin: '0 auto',
            }}
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I'm an Undergraduate Software Engineer specializing in Information Technology, with a strong focus on software development and web technologies. Passionate about crafting innovative, user-centric solutions, I leverage my expertise in React, Node.js, and the MERN stack to build impactful digital experiences.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton href="mailto:ssavindi660@gmail.com" target="_blank">
              <MdEmail size={30} color="#EA4335" />
            </IconButton>
            <IconButton href="https://github.com/savindi500" target="_blank">
              <FaGithub size={30} color="#333" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/savindi-disanayake-552048315/" target="_blank">
              <FaLinkedin size={30} color="#0A66C2" />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            sx={{ bgcolor: 'primary.main', color: 'white', px: 4,textTransform: 'capitalize'}}
            onClick={() => handleScroll(contained.toLowerCase())}
          >
            Contact Me
          </Button>
        </Box>
        <Avatar
          src={Image2}
          alt="About Me"
          sx={{
            width: 360,
            height: 360,
            borderColor: 'primary.main',
            borderRadius: '20%',
            mr: { md: 10 },
            mb: { xs: 4, md: 0 },
          }}
        />
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 8,
          px: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.main',
        }}
      >
        <Avatar
          src={Image1}
          alt="About Me"
          sx={{
            width: 350,
            height: 350,
            borderColor: 'primary.main',
            borderRadius: '20%',
            mr: { md: 10 },
            mb: { xs: 4, md: 0 },
          }}
        />
        
        <Box sx={{ maxWidth: 600, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'text.primary',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              mb: 2,
              lineHeight: 1.7,
              color: 'text.secondary',
            }}
          >
            Hi, I'm Savindi Disanayake, an enthusiastic undergraduate software engineer with a strong foundation in programming, software development, and web technologies. Currently pursuing my degree at Sri Lanka Institute of Information Technology (SLIIT), I have hands-on experience in building innovative and impactful solutions using modern frameworks and tools.
          </Typography>
          <Button
            variant="contained"
            href="cv/Savindi_Disanayake_CV.pdf"
            download
            sx={{
              mt: 3,
              bgcolor: 'primary.main',
              color: 'white',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>

    {/* Skills Section */}
<Box
id="skills"
  sx={{
    py: { xs: 6, sm: 8 },
    px: { xs: 3, sm: 4 },
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    borderRadius: 4,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 'bold',
      mb: 4,
      color: '#2d3748',
      fontFamily: 'Poppins, sans-serif',
      fontSize: { xs: '1.5rem', sm: '2rem' },
    }}
  >
    Skills
  </Typography>
  
  {/* Scrollable Container for Skills */}
  <Box
    sx={{
      maxHeight: 400, // Limits the height
      overflowY: 'auto', // Allows scrolling
      padding: '0 4px', // Keeps a bit of padding for smooth scrolling
    }}
  >
    <Stack
      direction="row"
      spacing={4}
      rowGap={5}
      sx={{
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        mx: 'auto',
        gap: { xs: 3, sm: 4 },
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 3,
              background: 'white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
              },
              width: { xs: '80%', sm: '200px' },
            }}
          >
            <Avatar
              src={skill.icon}
              alt={skill.name}
              sx={{
                width: 70,
                height: 70,
                mb: 2,
                mx: 'auto',
                background: '#e2e8f0',
                padding: 1.2,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: '600',
                color: '#4a5568',
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Stack>
  </Box>
</Box>


{/* project */}
<Box id="projects" sx={{ py: 10, px: 4, bgcolor: 'background.default' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 6,
          color: 'primary.main',
        }}
      >
        Projects 🚀
      </Typography>

      {/* Check if projects exist before rendering Swiper */}
      {projects.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ width: '90%', margin: 'auto' }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: 'text.secondary',
                    height: '60px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack Badges */}
                <Box
                  sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}
                >
                  {Array.isArray(project.techStack) &&
                    project.techStack.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{ bgcolor: 'primary.light', color: 'white' }}
                      />
                    ))}
                </Box>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  href={project.demoLink}
                  target="_blank"
                  fullWidth
                  sx={{
                    mt: 3,
                    bgcolor: 'primary.main',
                    '&:hover': { bgcolor: 'primary.dark' },
                    textTransform: 'capitalize',
                  }}
                >
                  View Demo
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}
        >
          No projects available
        </Typography>
      )}
    </Box>
 

      
      {/* qulification */}
      <Box id="education" sx={{ py: 8, px: 4, background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'}}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Qualification
      </Typography>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
        <Tab icon={<FaGraduationCap />} label="Education" />
        <Tab icon={<FaCertificate />} label="Certifications" />
      </Tabs>

      <Box sx={{ mt: 6 }}>
        {tabValue === 0 && (
          <Timeline position="alternate">
            {educationData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < educationData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                                   
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.date}
                      </Typography>
                    
                 </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}

        {tabValue === 1 && (
          <Timeline position="alternate">
            {certificationsData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  {index < certificationsData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  
                    
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.date}
                      </Typography>
                  
                 
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Box>
    </Box>

   {/*contact us*/}   
    <Box id="contact" sx={{ py: 10, px: 4, bgcolor: "background.default", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "primary.main" }}>
        Get in Touch
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 6, fontSize: "1.2rem" }}>
        Have a project in mind or just want to say hello? Feel free to reach out!
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 900, mx: "auto" }}>
        {[{
          icon: <FaPhoneAlt size={28} color="#3b82f6" />,
          title: "Call Me",
          content: "(+94) 740774451",
        }, {
          icon: <FaEnvelope size={28} color="#3b82f6" />,
          title: "Email",
          content: (
            <a href="mailto:ssavindi660@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
              ssavindi660@gmail.com
            </a>
          ),
        }, {
          icon: <FaMapMarkerAlt size={28} color="#3b82f6" />,
          title: "Location",
          content: "Galle, Sri Lanka",
        }].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "background.paper",
                boxShadow: 2,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 4,
                },
              }}
            >
              <Stack direction="column" alignItems="center" spacing={2}>
                {item.icon}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>{item.content}</Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
   
  );
};

export default Home;
