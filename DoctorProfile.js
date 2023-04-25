import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "./DoctorProfile.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';

function DoctorProfile() {
    const {state} = useLocation();
  return (
    <div>
        <Navbar doctorid = {state.from.props.doctorid}/>
      <Container className="top-details">
        <Box
          sx={{
            backgroundColor: "#cfe8fc",
            height: 900,
            marginLeft: -22,
            marginRight: -22
          }}
        >
          <Stack className="profile-top" spacing={1}>
            <Typography variant="h3">Doctor Profile</Typography>
            <Avatar
              src="https://cdn.leonardo.ai/users/64fbf9b4-0eba-4e28-9f1e-997cf65d4a1c/generations/5bf21084-8746-46b3-b32b-909208c4a6c4/Leonardo_Diffusion_An_experienced_doctor_profile_picture_for_h_0.jpg"
              sx={{ width: 300, height: 300 }}
            />
            <Typography variant="h6">Dr. Arun Kumar</Typography>
            <Typography variant="h6">Heart Specialist</Typography>
          </Stack>
          <Container
            fixed
            className="info-plate"
            sx={{ marginLeft: 25, marginTop: 3, marginRight: 10 }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                height: 55,
                borderRadius: 3,
                paddingTop: 2
              }}
            >
              <Stack direction="row" spacing={5} sx={{ marginLeft: 7 }}>
                <Typography variant="h6">Doctor ID: #20BCTC58</Typography>
                <Typography variant="h6">Gender: Male</Typography>
                <Typography variant="h6">Contact No.: 1234567890</Typography>
                <Typography variant="h6">Email: sachitDoc@gmail.com</Typography>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
  );
}

export default DoctorProfile;