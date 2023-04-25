import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationBar from "./LocationBar";
import SearchBar from "./SearchBar";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
import ChipsArray from "./ChipsArray";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import "./myStyle.css";

function ContainerBelow() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setInProp(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fade in={inProp} timeout={1500}>
      <Container fixed className="container-below">
        <Box
          sx={{
            bgcolor: "white", //#FAF9F9 #f3f5f8
            height: "30vh",
            paddingTop: -5,
            marginTop: -15,
            borderRadius: 5
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", paddingTop: 3, paddingLeft: 55 }}
          >
            Directory Services
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{ paddingLeft: 35, paddingTop: 2 }}
          >
            <Avatar
              alt="Ambulance-img"
              src="https://i.pinimg.com/736x/42/37/20/423720c364d3e60c78490b5ce7aaf9d6.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" sx={{ paddingTop: 1.5 }}>
              Ambulance
            </Typography>
            <Avatar
              alt="Helpline-img"
              src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-telephone-vector-icon-in-solid-style-png-image_2055981.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" sx={{ paddingTop: 1.5 }}>
              Helpline
            </Typography>
            <Avatar
              alt="Hospitals-img"
              src="https://i.pinimg.com/originals/85/10/ac/8510ac43daf03bb83dd73c8aad169061.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" sx={{ paddingTop: 1.5 }}>
              Hospitals
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Fade>
  );
}

export default ContainerBelow;
