// src/components/ProjectDetails.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

// Import your local images
import timetable from "../assets/timetable.jpg";
import ecom from "../assets/ecom.png";
import skill from "../assets/skill.png";
import cafe from "../assets/aroma.png";
import zara from "../assets/zara.png";
import crop from "../assets/crop.jpg";
import vibecare from "../assets/vibecare.png";
import backend from "../assets/backend.png";
import qrOrderSystem from "../assets/QR.jpg";
import ecommerceShopping from "../assets/clothing.jpg";

// Project data with detailed information
const detailedProjects = [
  // New Project 1: QR-Based Restaurant Food Ordering System
  {
    id: 9,
    title: "QR-Based Restaurant Food Ordering System 🍽️📱",
    shortDescription: "Full-stack QR-based food ordering web application",
    fullDescription: `This project is a full-stack QR-based food ordering web application designed to improve the restaurant dining experience. Customers can scan a QR code placed on their table to directly access the ordering website without installing any mobile application.

Once scanned, customers can browse the menu, place orders, and track their order status in real time. The system also provides dedicated interfaces for kitchen staff and administrators to manage and process orders efficiently.`,
    image: qrOrderSystem, // Use placeholder if image not available
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "ASP.NET Core",
      "C#",
      "MySQL",
      "RESTful APIs",
    ],
    features: [
      "QR Code Scanning for contactless ordering",
      "Real-time order tracking system",
      "Customer interface for menu browsing and ordering",
      "Kitchen interface for order preparation",
      "Admin dashboard for menu and order management",
      "Role-based access (Customer, Kitchen, Admin)",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/savindi500/food-ordering-system.git",
    liveDemo: null,
    category: "Full Stack",
    date: "2025-07",
    screenshots: [
      "🏠 Home Page",
      "👕 Product / Food Listing",
      "📄 Food Details",
      "🛒 Shopping Cart",
      "🚚 Order Tracking",
      "🔁 Order Status View",
      "🛠️ Admin Dashboard",
    ],
    workflow: [
      "Customer scans QR code on restaurant table",
      "QR code redirects to food ordering website",
      "Browse menu and place order",
      "Kitchen receives order in real-time",
      "Order status updated (Preparing → Ready → Completed)",
      "Customer tracks status using order ID",
      "Admin manages all system operations",
    ],
  },

  // New Project 2: E-Commerce Shopping Website
  {
    id: 10,
    title: "E-Commerce Shopping Website 🛍️",
    shortDescription: "Full-stack E-Commerce Shopping Web Application",
    fullDescription: `A full-stack E-Commerce Shopping Web Application developed using TypeScript, Tailwind CSS, .NET (C#), and MySQL. The system allows users to order clothing items online, track order status, request returns, while administrators can manage products, users, orders, and return requests.`,
    image: ecommerceShopping, // Use placeholder if image not available
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "C#",
      "ASP.NET Core",
      "MySQL",
      "REST APIs",
      "Entity Framework",
    ],
    features: [
      "User registration and authentication",
      "Product browsing with category filters",
      "Shopping cart functionality",
      "Order tracking (Pending, Processing, Shipped, Delivered)",
      "Return request management",
      "Admin dashboard for product and user management",
      "Responsive design for mobile and desktop",
    ],
    githubLink: "https://github.com/savindi500/E-Commerce-Shopping-.git",
    liveDemo: null,
    category: "Full Stack",
    date: "2025-05",
    userFeatures: [
      "Browse clothing products with filters",
      "Place orders online securely",
      "Track order status in real-time",
      "Request product returns",
      "View order history",
      "User-friendly responsive interface",
    ],
    adminFeatures: [
      "Manage users and their roles",
      "Add/edit/delete products",
      "Manage categories and subcategories",
      "Process orders and update status",
      "Handle return requests",
      "View system analytics",
    ],
    databaseEntities: [
      "Users table for authentication",
      "Products table with categories",
      "Orders and OrderItems tables",
      "Returns table for management",
      "Categories and Subcategories",
    ],
  },

  
  {
    id: 1,
    title: "SmartSched Web - Academic Scheduler 🎓📅",
    shortDescription: "A conflict-free timetable management system",
    fullDescription:
      "A comprehensive academic scheduling system that automatically generates conflict-free timetables for educational institutions. The system includes features like room allocation, teacher assignment, and student enrollment management with an intuitive drag-and-drop interface.",
    image: timetable,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
    features: [
      "Automated conflict detection",
      "Drag-and-drop scheduling interface",
      "Multiple export formats (PDF, Excel)",
      "Real-time updates",
      "Role-based access control",
    ],
    githubLink: "https://github.com/Sanka11/SmartSched.git",
    liveDemo: "https://smartsched-demo.com",
    category: "Full Stack",
    date: "2025-01",
  },
  {
    id: 2,
    title: "DesignHive – Skill Sharing & Learning Platform",
    shortDescription: "A modern UI/UX learning platform",
    fullDescription:
      "An interactive platform for designers and developers to share skills, collaborate on projects, and learn from each other. Features include video tutorials, project sharing, mentorship programs, and community forums.",
    image: skill,
    technologies: ["React", "Firebase", "Framer Motion", "Sass", "Redux"],
    features: [
      "Interactive video tutorials",
      "Project collaboration tools",
      "Skill assessment tests",
      "Community forums",
      "Mentorship matching",
    ],
    githubLink: "https://github.com/savindi500/designhive",
    liveDemo: "https://designhive-demo.com",
    category: "Frontend",
    date: "2025-01",
  },
  {
    id: 3,
    title: "Aroma Haven – Café Website",
    shortDescription: "A fully responsive cafe website",
    fullDescription:
      "An elegant online presence for a local café featuring menu browsing, online ordering, table reservation system, and events calendar. The design focuses on creating a warm, inviting atmosphere that reflects the café's brand.",
    image: cafe,
    technologies: ["React", "CSS3", "React Router", "Context API"],
    features: [
      "Online ordering system",
      "Table reservation",
      "Menu with dietary filters",
      "Events calendar",
      "Gallery showcase",
    ],
    githubLink: "https://github.com/savindi500/cafe-website",
    liveDemo: "https://savindi500.github.io/cafe-website/",
    category: "Frontend",
    date: "2025-11",
  },
  {
    id: 4,
    title: "Farm Management System (MERN)",
    shortDescription: "Full-featured farm management dashboard",
    fullDescription:
      "A comprehensive farm management solution that helps farmers track crops, livestock, expenses, and revenue. Includes analytics dashboard, inventory management, and weather integration.",
    image: crop,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    features: [
      "Crop cycle tracking",
      "Livestock management",
      "Financial analytics",
      "Inventory control",
      "Weather forecast integration",
    ],
    githubLink: "https://github.com/savindi500/Farm-Management.git",
    liveDemo: "https://farm-management-demo.com",
    category: "Full Stack",
    date: "2024-03",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    shortDescription: "Modern shopping UI with React & Redux",
    fullDescription:
      "A fully functional e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Focuses on smooth user experience and responsive design.",
    image: ecom,
    technologies: ["React", "Redux", "Stripe API", "Tailwind CSS", "Node.js"],
    features: [
      "Product search and filters",
      "Shopping cart with persistence",
      "User reviews and ratings",
      "Order tracking",
      "Admin dashboard",
    ],
    githubLink: "https://github.com/savindi500/Ecom",
    liveDemo: "https://ecom-demo.com",
    category: "Full Stack",
    date: "2023-11",
  },
  {
    id: 6,
    title: "Spring Boot Backend API",
    shortDescription: "User profile backend system",
    fullDescription:
      "A robust RESTful API for user management with authentication, authorization, and profile management features. Built with Spring Boot following best practices for security and scalability.",
    image: backend,
    technologies: ["Spring Boot", "Java", "MySQL", "JWT", "Spring Security"],
    features: [
      "JWT authentication",
      "Role-based authorization",
      "File upload handling",
      "Email verification",
      "API documentation",
    ],
    githubLink: "https://github.com/savindi500/userprofile-spring-boot-",
    liveDemo: null,
    category: "Backend",
    date: "2023-10",
  },
  {
    id: 7,
    title: "Zara Website Redesign (Figma)",
    shortDescription: "Modern redesign of Zara website",
    fullDescription:
      "A complete UI/UX redesign proposal for Zara's e-commerce platform, focusing on improved navigation, product discovery, and checkout flow. Includes user research and prototype testing.",
    image: zara,
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    features: [
      "Improved navigation structure",
      "Enhanced product display",
      "Streamlined checkout",
      "Mobile-first design",
      "Accessibility improvements",
    ],
    githubLink: null,
    liveDemo:
      "https://www.figma.com/proto/u1j6trvTsFHxu1lHu35KYn/Zara-Website-Re-Designing",
    category: "UI/UX Design",
    date: "2023-09",
  },
  {
    id: 8,
    title: "VibeCare App (Designathon)",
    shortDescription: "Healthcare mobile UI/UX prototype",
    fullDescription:
      "A healthcare mobile application designed during a designathon competition. Focuses on mental health tracking, appointment scheduling, and medication reminders with an empathetic user interface.",
    image: vibecare,
    technologies: ["Figma", "Adobe Illustrator", "User Testing", "Wireframing"],
    features: [
      "Mood tracking",
      "Appointment scheduling",
      "Medication reminders",
      "Health journal",
      "Emergency contacts",
    ],
    githubLink: null,
    liveDemo: "https://www.figma.com/proto/vibecare-demo",
    category: "UI/UX Design",
    date: "2023-08",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);

  const project = detailedProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4">Project not found</Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8F5FF 0%, #EFE8FF 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        

        {/* Main Content */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Chip
              label={project.category}
              sx={{
                bgcolor: "#4C1D95",
                color: "white",
                mb: 2,
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#4C1D95",
                mb: 1,
                fontFamily: "Poppins",
              }}
            >
              {project.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#6B7280", mb: 3 }}>
              {project.shortDescription} • {project.date}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column - Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(76, 29, 149, 0.25)",
                  height: "100%",
                  minHeight: 400,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* Right Column - Details */}
            <Grid item xs={12} md={6}>
              {/* Description */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#4C1D95",
                    mb: 2,
                    fontFamily: "Poppins",
                  }}
                >
                  Project Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#374151",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.fullDescription}
                </Typography>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#4C1D95",
                    mb: 2,
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        bgcolor: "rgba(76, 29, 149, 0.1)",
                        color: "#4C1D95",
                        fontWeight: 500,
                        border: "1px solid rgba(76, 29, 149, 0.2)",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Features */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#4C1D95",
                    mb: 2,
                  }}
                >
                  Key Features
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <Typography
                        sx={{
                          color: "#374151",
                          mb: 1,
                          fontSize: "1rem",
                        }}
                      >
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Box>

              {/* Special sections for new projects */}
              {project.id === 9 && project.workflow && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#4C1D95",
                      mb: 2,
                    }}
                  >
                    System Workflow
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.workflow.map((step, index) => (
                      <li key={index}>
                        <Typography
                          sx={{
                            color: "#374151",
                            mb: 1,
                            fontSize: "0.95rem",
                          }}
                        >
                          {step}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              )}

              {project.id === 10 && project.userFeatures && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#4C1D95",
                      mb: 2,
                    }}
                  >
                    User Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.userFeatures.map((feature, index) => (
                      <li key={index}>
                        <Typography
                          sx={{
                            color: "#374151",
                            mb: 1,
                            fontSize: "0.95rem",
                          }}
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              )}

              {project.id === 10 && project.adminFeatures && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#4C1D95",
                      mb: 2,
                    }}
                  >
                    Admin Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {project.adminFeatures.map((feature, index) => (
                      <li key={index}>
                        <Typography
                          sx={{
                            color: "#374151",
                            mb: 1,
                            fontSize: "0.95rem",
                          }}
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Links */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
                {project.githubLink && (
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href={project.githubLink}
                    target="_blank"
                    sx={{
                      bgcolor: "#4C1D95",
                      "&:hover": { bgcolor: "#3A0F7A" },
                      px: 3,
                      py: 1.2,
                    }}
                  >
                    View Code on GitHub
                  </Button>
                )}

                {project.liveDemo && (
                  <Button
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    href={project.liveDemo}
                    target="_blank"
                    sx={{
                      borderColor: "#4C1D95",
                      color: "#4C1D95",
                      "&:hover": {
                        borderColor: "#3A0F7A",
                        bgcolor: "rgba(76, 29, 149, 0.04)",
                      },
                      px: 3,
                      py: 1.2,
                    }}
                  >
                    Live Demo
                  </Button>
                )}

                {!project.liveDemo && (
                  <Button
                    variant="outlined"
                    disabled
                    sx={{
                      borderColor: "#9CA3AF",
                      color: "#9CA3AF",
                      px: 3,
                      py: 1.2,
                    }}
                  >
                    Demo Coming Soon
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>

          {/* Additional Information Section */}
          {project.id === 9 && project.screenshots && (
            <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#4C1D95",
                  mb: 3,
                  fontFamily: "Poppins",
                }}
              >
                Interface Screenshots
              </Typography>
              <Grid container spacing={2}>
                {project.screenshots.map((screenshot, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "rgba(76, 29, 149, 0.05)",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#4C1D95",
                          mb: 1,
                        }}
                      >
                        {screenshot}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6B7280",
                          fontStyle: "italic",
                        }}
                      >
                        Fully responsive interface with intuitive design
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {project.id === 10 && project.databaseEntities && (
            <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#4C1D95",
                  mb: 3,
                  fontFamily: "Poppins",
                }}
              >
                Database Architecture
              </Typography>
              <Grid container spacing={2}>
                {project.databaseEntities.map((entity, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "rgba(76, 29, 149, 0.05)",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#4C1D95",
                          mr: 1.5,
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#4C1D95",
                        }}
                      >
                        {entity}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ProjectDetails;