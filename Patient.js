import React from "react";
import { useNavigate } from "react-router-dom";
import './Patient.css';
import sachit from '../Images/download.jpg'
import sachits from '../Images/downloads.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import PatientCards from "./PatientCards";

export default function Patient () {
    const navigate = useNavigate();
    const handleClick = async (event) => {
        event.preventDefault();
        navigate("/patientprescription");

    }
    const handleClicks = async (event) => {
        event.preventDefault();
        navigate("/patientprofile");

    }
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4){
            counter = 1;
        }
    },5000);
    return(
        <div className="patient-div">
{/* 
marginTop: 3, marginLeft:5 */}

            <Grid container spacing={3} sx={{marginLeft:2, marginTop:-1, backgroundColor: "#cfe8fc"}}>
                <Grid item xs={9}><Typography variant="h6">HOSPINET</Typography></Grid>
                <Grid item>
                    <Stack direction="row" spacing={2} sx={{marginLeft:0}}>
                        <Button variant="contained" onClick={(event) => handleClick(event)}>My Prescriptions</Button>
                        <Button variant="outlined" onClick={(event) => handleClicks(event)}>My Profile</Button>
                    </Stack>
                </Grid>
            </Grid>

            <div className="temp">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <div className="slide first">
                        <img src="https://www.dailyexcelsior.com/wp-content/uploads/2019/12/31.jpg" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/BDV2FF5NFBGBBIU6QCIBUFIPQY.jpg" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://media.istockphoto.com/id/1344413214/photo/doctor-listening-to-little-boys-heart.jpg?s=612x612&w=0&k=20&c=3YVwTwHLNAxQ0AF-MTf_PLwgpxIzSPe2r0EgjBFnAbo=" alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://excelmg.excel-medical.com/1665051006203.jpg" alt="" />
                    </div>
                    <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>
                </div>
            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>

            </div>
        </div>
        </div>

            <Stack direction="row" spacing={5} sx={{marginLeft:20}}>
            <PatientCards src={sachits} title="Mission Indradhanush Programme" content="To strengthen and re-energize the programme and achieve full immunization coverage for all children."/>

            <PatientCards src={sachits} title="Rashtriya Swasthya Bima Yojana" content="Government of India to provide health insurance coverage for Below Poverty Line (BPL) families."/>

            <PatientCards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx8IzFFmtVWcuLFzzmlAsNG2edtJ0ai9AHw&usqp=CAU" title="Universal Immunization Programme" content="It is the process whereby a person is made immune to an infectious disease by the administration of a vaccine."/>

            </Stack>

            <div class="grid">
                {/* <div class="grid-item">
                    <div class="card">
                        <img class="card-img"  src= {sachits} alt="Rome" />
                        <div class="card-content">
                            <h1 class="card-header">Mission Indradhanush Programme</h1>
                            <p class="card-text">To strengthen and re-energize the programme and achieve full immunization coverage for all children.</p>
                            <button class="card-btn"  onclick="location.href='https://www.nhp.gov.in/mission-indradhanush1_pg';">Visit <span>&rarr;</span></button>
                        </div>
                    </div>
                </div> */}
                <div class="grid-item">
                    {/* <div class="card">
                        <img class="card-img" src= {sachits} alt="" />
                        <div class="card-content">
                            <h1 class="card-header">Rashtriya Swasthya Bima Yojana</h1>
                            <p class="card-text">Government of India to provide health insurance coverage for Below Poverty Line (BPL) families.</p>
                            <button class="card-btn" onclick="location.href='https://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana';">Visit <span>&rarr;</span></button>
                        </div>
                    </div> */}
                </div>
                <div class="grid-item">
                    {/* <div class="card">
                        <img class="card-img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx8IzFFmtVWcuLFzzmlAsNG2edtJ0ai9AHw&usqp=CAU" alt="Maldives" />
                        <div class="card-content">
                            <h1 class="card-header">Universal Immunization Programme</h1>
                            <p class="card-text">It is the process whereby a person is made immune to an infectious disease by the administration of a vaccine.</p>
                            <button class="card-btn" onclick="location.href='https://www.nhp.gov.in/universal-immunisation-programme_pg'" >Visit <span>&rarr;</span></button>
                        </div>
                    </div> */}
                    
             
        </div>
    </div>
    <Footer />
    </div>
    )
}