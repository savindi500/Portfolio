import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: "#FFFFFF",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          mb: 2,
          color: "#4C1D95",
          fontFamily: "Poppins",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        Get in Touch
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          color: "#475569",
          mb: { xs: 5, md: 6 },
          maxWidth: "600px",
          mx: "auto",
          px: 2,
          fontSize: { xs: "0.95rem", md: "1rem" },
        }}
      >
        Have a project in mind or want to connect? I'm always open to new
        opportunities.
      </Typography>

      {/* Contact Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        maxWidth={1000}
        mx="auto"
      >
        {[
          {
            icon: <FaPhoneAlt size={28} color="#4C1D95" />,
            title: "Call Me",
            content: "(+94) 762628344",
          },
          {
            icon: <FaEnvelope size={28} color="#4C1D95" />,
            title: "Email",
            content: (
              <a
                href="mailto:ssavindi660@gmail.com"
                style={{
                  color: "#475569",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                ssavindi660@gmail.com
              </a>
            ),
          },
          {
            icon: <FaMapMarkerAlt size={28} color="#4C1D95" />,
            title: "Location",
            content: "Galle, Sri Lanka",
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                width: "100%",
                maxWidth: 350,
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Stack spacing={2} alignItems="center">
                <Box sx={{ fontSize: { xs: "24px", md: "28px" } }}>
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {item.content}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
