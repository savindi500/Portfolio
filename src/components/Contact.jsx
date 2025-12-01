import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 4,
        background: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 3, color: "#4C1D95" }}
      >
        Get in Touch
      </Typography>

      <Typography sx={{ color: "#475569", mb: 6 }}>
        Have a project in mind or want to connect? Reach out anytime.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        maxWidth={900}
        mx="auto"
      >
        {[
          {
            icon: <FaPhoneAlt size={28} color="#4C1D95" />,
            title: "Call Me",
            content: "(+94) 740774451",
          },
          {
            icon: <FaEnvelope size={28} color="#4C1D95" />,
            title: "Email",
            content: (
              <a
                href="mailto:ssavindi660@gmail.com"
                style={{ color: "#475569" }}
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
          <Grid item xs={12} md={4} key={i}>
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "white",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
                "&:hover": { transform: "translateY(-6px)" },
                transition: "0.3s",
              }}
            >
              <Stack spacing={2} alignItems="center">
                {item.icon}
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#475569" }}>
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
