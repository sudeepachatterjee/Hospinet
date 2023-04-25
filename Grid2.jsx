import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./myStyle.css";
import CardSearch from "./CardSearch";
import Stack from "@mui/material/Stack";
import lungsImg from "../Images/lungs.png";
import dentist_tooth_img from "../Images/dentist_tooth.jpg";
import dermatologyImg from "../Images/dermatology.jpg";
import generalMedicineImg from "../Images/general_medicine.jpg";
import neurologyImg from "../Images/neurology-1.png";
import noseImg from "../Images/nose-vector.jpg";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";

const searchCardContent = [
  {
    id: 1,
    img: "https://static.thenounproject.com/png/1676840-200.png",
    content: "Paperless Prescription"
  },
  {
    id: 2,
    img:
      "https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-shield-with-a-check-mark-safe-and-protect-logo-on-white-png-image_1870454.jpg",
    content: "Secured System"
  },
  {
    id: 3,
    img:
      "https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=2000",
    content: "Home Delivery"
  }
];

function createPopularSearhCard(cardContent) {
  return (
    <CardSearch
      key={cardContent.id}
      img={cardContent.img}
      content={cardContent.content}
    />
  );
}

function Grid2() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setInProp(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      sx={{ bgcolor: "#f3f5f8", marginTop: -15, height: "100vh" }}
      className="grid2"
    >
      <Slide in={inProp} direction="right" timeout={1500}>
        <Grid item sx={{ paddingLeft: 20, paddingTop: 30, paddingBottom: 3 }}>
          <Typography variant="h4">Current features we provide</Typography>
        </Grid>
      </Slide>
      <Grid item>
        <Fade in={inProp} timeout={1500}>
          <Stack
            direction="row"
            sx={{
              paddingLeft: 5,
              paddingRight: 1,
              marginTop: 40,
              marginLeft: -55
            }}
            spacing={5}
          >
            {searchCardContent.map(createPopularSearhCard)}
          </Stack>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Grid2;
