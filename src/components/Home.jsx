import React from 'react';
import { Stack } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Box, Typography, Button, Avatar, IconButton, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

import project1 from "../assets/dashboard.png";
import project2 from "../assets/ecom.png";
import project3 from "../assets/backend.png";
import project4 from "../assets/zara.png";
import project5 from "../assets/kotlin.png";
import project6 from "../assets/vibecare.png";
import Image1 from "../assets/savi1.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';



// Smooth scroll helper function
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const skills = [
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "Material-UI", icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { name: 'C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Spring Boot', icon: 'https://spring.io/images/favicon.ico' },
  { name: 'Express.js', icon: 'https://expressjs.com/images/express-facebook-share.png' },
  { name: 'Tailwind CSS', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-logotype.c7b4a6c9f1b6c259c92d680b94d764f5.svg' },
  
  { name: 'MySQL', icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
  { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  ];

  const educationData = [
    {
      title: "Bachelor of Science in Information Technology|Specializing in Information Technology",
      institution: "SLIIT",
      date: "2022 - Present",
    },
    {
      title: "G.C.E Advanced Level",
      institution: "G/Krandeniya central college",
      date: "2021",
    },
    {
      title: "G.C.E Ordinary Level",
      institution: "G/Krandeniya central college",
      date: "2018",
    },
  ];

  const certificationsData = [
    {
      title: "2nd Runner-Up at CODEFEST - Designathon",
      institution: " Sri Lanka Institute of Information Technology (SLIIT)",
      date: "2025",
    },
    {
      title: "Learning SQL Programming",
      institution: "LinkedIn",
      date: "2024",
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Farm Management System (MERN Stack)',
      description: 'A full-fledged farm management system built using the MERN stack, featuring pages for crops, staff, fields, and a home page to manage farm data efficiently. It allows farmers to organize their operations, track crops, and monitor staff.',
      image: project1,
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7282793505624621057/',
    },
    {
      id: 2,
      title: 'E-commerce Website (Redux)',
      description: 'An e-commerce platform built with React and Redux, providing a seamless shopping experience with state management. It includes features such as product listing, cart management, and order processing, all integrated with error handling for a smooth user experience.',
      image: project2,
      demoLink: 'https://github.com/savindi500/Ecom',
    },
    {
      id: 3,
      title: 'User Profile Management System (Spring Boot)',
      description: 'A backend-only system developed with Spring Boot, enabling user profile management for organizations. It offers API endpoints to create, update, retrieve, and delete user records, allowing administrators to easily manage user data.',
      image: project3,
      demoLink: 'https://github.com/savindi500/userprofile-spring-boot-/tree/master',
    },
    {
      id: 4,
      title: 'Zara Website Redesign',
      description: 'A redesign of Zara’s website, including pages like "Contact Us", "Edit Address", and "Product Page", using Figma for the design process. Focused on modern aesthetics and user-friendly interfaces, this project enhances the online shopping experience.',
      image: project4,
      demoLink: 'https://www.linkedin.com/posts/savindi-disanayake-552048315_uiuxdesign-humancomputerinteraction-designthinking-activity-7269327252834639874--Oag?utm_source=share&utm_medium=member_desktop',
    },
    {
      id: 5,
      title: 'Recipe Mobile App(Kotlin)',
      description: 'A mobile app developed in Kotlin, providing users with a collection of recipes. The app allows users to search for recipes based on ingredients and dietary preferences, offering a simple and intuitive interface for meal planning.',
      image: project5,
      demoLink: '/demo-link-2',
    },
    {
      id: 6,
      title: 'VibeCare Mobile App(figma) ',
      description: 'Collaborated with a team during a designathon competition to create a user-centric mobile app prototype using Figma. Worked together to address specific user challenges through intuitive design, innovative features, and a seamless user experience. Contributed to brainstorming, designing, and refining the prototype, showcasing teamwork, creativity, and problem-solving skills within a limited timeframe.',
      image: project6,
      demoLink: '/demo-link-2',
    },
    // Add more projects as needed
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
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
          <Typography
            variant="h4"
            component={motion.h4}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{ fontWeight: 'bold' }}
          >
            Hi, I'm Savindi Disanayake
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 2 }}
            component={motion.h6}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I'm an Undergraduate Software Engineer
          </Typography>
          <Typography
  sx={{
    mt: 2,
    mb: 4,
    textAlign: 'left',
    fontSize: '1rem', // Adjust font size
    lineHeight: '1.8', // Increase line spacing for better readability
    color: '#6b7280', 
    maxWidth: '400px', // Set the width of the paragraph
    margin: '0 auto',// Use a grayish tone for the text
  }}
  component={motion.p}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
            I specialize in Information Technology, with a focus on software development and web technologies. I’m passionate about crafting innovative, user-friendly solutions and leveraging my skills in React, Node.js, and the MERN stack to create impactful digital experiences. My goal is to combine technical expertise and creative design to solve real-world problems and drive meaningful change.


          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton href="ssavindi660@gmail.com" target="_blank">
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
  sx={{ bgcolor: 'primary.main', color: 'white', px: 4 }}
  onClick={() => {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Contact Me
</Button>


        </Box>
        <Avatar
  src={Image1}
  alt="About Me"
  sx={{
    width: 360,
    height: 360,
    borderColor: 'primary.main',
    borderRadius: '20%', // Squircle shape
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
    bgcolor: 'background.default',
  }}
>
  {/* Avatar Section */}
  <Avatar
  src={Image1}
  alt="About Me"
  sx={{
    width: 350,
    height: 350,
    borderColor: 'primary.main',
    borderRadius: '20%', // Squircle shape
    mr: { md: 10 },
    mb: { xs: 4, md: 0 },
  }}
/>

  {/* Text Content Section */}
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
      Hi, I'm Savindi Disanayke, an enthusiastic undergraduate software engineer with a strong foundation in programming, software development, and web technologies. Currently pursuing my degree at Sri Lanka Institute of Information Technology (SLIIT), I have hands-on experience in building innovative and impactful solutions using modern frameworks and tools.

I thrive on challenges and enjoy working on projects that require creativity, problem-solving, and a user-centric approach. 
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
      
    </Typography>

    <Button
      variant="contained"
      href="cv/Savindi Disanayaka.pdf"
      download
      sx={{
        mt: 3,
        bgcolor: 'primary.main',
        color: 'white',
        px: 4,
        py: 1.5,
        fontWeight: 'bold',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
    >
      Download CV
    </Button>
  </Box>
</Box>


<Box
  id="skills"
  sx={{
    py: 8,
    px: 4,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensures full viewport height for vertical centering
  }}
>
  <Typography
    variant="h4"
    sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
  >
    Skills
  </Typography>
  <Stack
    direction="row"
    spacing={9}
    sx={{
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth: '1000px',
    }}
  >
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        whileHover={{ scale: 1.2, rotate: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src={skill.icon}
            alt={skill.name}
            sx={{ width: 80, height: 80, mb: 2 }}
          />
          <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
            {skill.name}
          </Typography>
        </Box>
      </motion.div>
    ))}
  </Stack>
</Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, px: 4, bgcolor: 'background.main' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Projects
        </Typography>
        <Swiper
      modules={[Navigation, Pagination]} // Initialize modules here
      navigation // Enable navigation
      pagination={{ clickable: true }} // Enable clickable pagination
      spaceBetween={30}
      slidesPerView={1}
      style={{ width: '80%', margin: 'auto' }}
    >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Box>
                <Box sx={{ flex: 1, textAlign: 'left' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, maxWidth: '400px' }}>
                    {project.description}
                  </Typography>
                  <Button variant="contained" href={project.demoLink} target="_blank">
                    Demo
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      {/* qulification */}
      <Box id="education" sx={{ py: 8, px: 4, bgcolor: 'background.paper' }}>
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
      
    
{/* contact us */}    
<Box id="Contact" sx={{ py: 8, px: 4, bgcolor: 'background.default' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
        Contact me
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 4 }}>
        Get in touch
      </Typography>

      <Stack
        direction="column"
        spacing={6}
        
        
        sx={{ maxWidth: 600, mx: 'auto' }}
      >
        {/* Phone */}
        <Stack direction="row"spacing={2}>
          <FaPhoneAlt size={24} color="#3b82f6" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Call me
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              (+94) 740774451
            </Typography>
          </Box>
        </Stack>

        {/* Email */}
        <Stack direction="row"  spacing={2}>
          <FaEnvelope size={24} color="#3b82f6" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              E-mail
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              <a
                href="ssavindi660@gmail.com"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                ssavindi660@gmail.com
              </a>
            </Typography>
          </Box>
        </Stack>

        {/* Location */}
        <Stack direction="row"  spacing={2}>
          <FaMapMarkerAlt size={24} color="#3b82f6" />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Location
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
             Galle, Sri Lanka
            </Typography>
          </Box>
        </Stack>
      </Stack>
      </Box>
    </Box>
  );
};

export default Home;
