import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardDoctor from './components/DashboardDoctor';
import Doctordashboard from './components/DoctorDashboard';
import Login from './components/login';
import LoginPatient from './components/loginpatient';
import Patient from './components/Patient';
import PatientPrescription from './components/PatientPrescription';
import PatientProfile from './components/PatientProfile';
import PrescriptionDoctor from './components/PrescriptionDoctor';
import { ProductState } from './components/ProductState';
import Prescription from './Prescription';
import Landing from './components/Landing';
import MyPatient from './components/MyPatient';
import Medicine from './components/Medicine';
import AllPatients from './components/AllPatients';
import DoctorProfile from './components/DoctorProfile';
import Pharmacy from './components/Pharmacy';
export default function App(){
  return(
    <BrowserRouter>
      <ProductState>
      <Routes>
      <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/patientLogin" element = {<LoginPatient />} />
        <Route path="/dashboarddoctor" element={<DashboardDoctor/>} />
        <Route path="/prescriptiondoctor" element={<PrescriptionDoctor/>} />
        <Route path="/doctordashboard" element = {<Doctordashboard />} />
        <Route path="/patient" element = {<Patient/>} />
        <Route path="/prescription" element = {<Prescription/>} />
        <Route path="/patientprescription" element = {<PatientPrescription/>} />
        <Route path="/patientprofile" element = {<PatientProfile/>} />
        <Route path="/mypatient" element = {<MyPatient/>} />
        <Route path="/medicine" element = {<Medicine/>} />
        <Route path="/allpatients" element = {<AllPatients/>} />
        <Route path="/doctorprofile" element = {<DoctorProfile/>} />
        <Route path="/pharmacy" element = {<Pharmacy/>} />
      </Routes>
      </ProductState>
    </BrowserRouter>
  )
}