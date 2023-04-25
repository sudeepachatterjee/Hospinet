import React from 'react';
import Logo from '../Images/logo.png'
import Video from '../Images/temp.mp4'

export default function Pharmacy () {
    return(
        <>
            <div class="animated-bg"></div>
                <img src={Logo} alt="" />

                <div class="welcome">
                    <h1>WELCOME!!</h1>
                </div>

            <nav>
                <div class="logo">
                    <a>HOSPINET</a>
                </div>
                <label for="nav-toggle" class="nav-toggle-label">
                </label>
                <ul class="navb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Prescription</a></li>
                    <li><a href="medicine.html" target="_blank">Medicine</a></li>
                    <li><a href="location.html" target="_blank">Location</a></li>
                </ul>
            </nav>
            <br/>
            <div class="input-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search Here..." />
                <button class="button">Search</button>
            </div>
            <div class="video">
                <iframe  src={Video} title="YouTube video player"></iframe>
            </div>
            <hr></hr>
            <div class="section destination-details">
      <div class="container">
        <div class="row">
          <div class="col-12 paragraph text-center"></div>
          <div class="col-12 paragraph text-center read-more-hide show">
            <p class="fst-italic" style={{color:"black"}}><b>The Pradhanmantri Bhartiya Jan Aushadhi Pari Yojana (PMBJP) aims to supply quality generic medications to the general public at reasonable costs, with a focus on the underprivileged and poorer
                segments of society. The programme intends to lower the average person's out-of-pocket healthcare costs by giving them access to affordable, high-quality medications.

                The PMBJP is a significant programme of the Indian government that aims to solve the problem of exorbitant drug costs, which frequently prevent the poor from accessing healthcare. The programme is being carried out by a network of
                Pradhanmantri Bhartiya Jan Aushadhi Kendras (PMBJKs), which have been established all over the nation to give people access to generic medications.


                The PMBJP is a component of the wider government initiatives.</b></p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>COMPANY</h4>
            <ul class="foots">
              <li><a style={{color: "#bbbbbb;"}}>About :-</a></li>
              <p style={{color: "#bbbbbb;"}}>Patients can connect with qualified medical specialists and obtain prescriptions for vital medications using this online prescription website. Before writing a prescription, medical practitioners will analyse the health
                questionnaires
                and medical histories that patients can submit. The website guarantees the security and privacy of user data. The website may also give patients with easy home delivery choices and discounts on prescription drugs.</p>
            </ul>
          </div>
          <div class="col">
            <h4>SUPPORT</h4>
            <ul class="foots">
              <li><a href="mailto:sachittarway2002@gmail.com">Contact Us</a></li>
              <li><a href="">Chat With Us</a></li>
              <li><a href="">We'll Do It For You</a></li>
              <li><a href="">Help Center</a></li>
              <li><a href="https://healthid.ndhm.gov.in/register">Get Your Own Health Card</a></li>
            </ul>
          </div>
          <div class="col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/HFWOdisha/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/MoHFW_INDIA"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/healthministryofindia/?hl=en"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/ministry-of-health-and-family-welfare-government-of-india/"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}