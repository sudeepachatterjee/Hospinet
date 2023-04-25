import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import doctor1 from "../Images/doctor.jpg";
import Avatar from "@mui/material/Avatar";
import ActionAreaCard from "./ActionAreaCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Link from "@mui/material/Link";
import "./myStyle.css";

function Grid1() {
  const [setProp, setInProp] = useState(false);

  React.useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Grid
      container
      sx={{ padding: 2, bgcolor: "#cfe8fc", height: "110vh" }}
      className="grid1"
    >
      <Grid item sm={6}>
        <Box sx={{ padding: 5 }}>
          <Slide in={setProp} direction="right" timeout={2000}>
            <Typography variant="h1">
              Feel better about finding healthcare
            </Typography>
          </Slide>
          <Slide in={setProp} direction="right" timeout={3000}>
            <Typography variant="h6" sx={{ color: "grey" }}>
              <p>
                At healthcare, we take the guesswork out of finding the right
                doctors, hospitals, and care for you and your family.
              </p>
            </Typography>
          </Slide>
          <Grow in={setProp} timeout={4500}>
            <Stack direction="row" spacing={2}>
              <Link href="https://www.aarogya.com/" underline="hover">
                <ActionAreaCard
                  cardText={"Join our community for the new change"}
                />
              </Link>
              <ActionAreaCard
                cardText={"Number of users who joined the change: 0000"}
              />
            </Stack>
          </Grow>
        </Box>
      </Grid>
      <Grid item sm={4} sx={{ marginLeft: 13 }}>
        <Grow in={setProp} timeout={2000}>
          <Box>
            <Avatar
              src={doctor1}
              alt="doctor_img"
              sx={{ width: 600, height: 600 }}
            />
          </Box>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default Grid1;
