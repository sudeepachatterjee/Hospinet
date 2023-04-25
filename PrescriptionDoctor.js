/*Prescription of patient uploaded by doctor in doctor dashboard */

import Navbar from "./Navbar";
import "./PrescriptionDoctor.css"


import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
export default function PrescriptionDoctor () {

    console.log("Prescription1");
    const {state} = useLocation();
    console.log("in Prescription  ");
    console.log(state);

    const [inputs, setInputs] = useState([{ value: "" }]);
    
    const [values,setValues] = useState({
      patient_id: "",
      days:"",
      note:"",
      did: state.from.props.doctorid
    });
    console.log(values);
    
    const handleChange = (i, event) => {
      const values = [...inputs];
      values[i].value = event.target.value;
      setInputs(values);
    };
  
    const handleChanged = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    
    const handleAddClick = () => {
      setInputs([...inputs, { value: "" }]);
    };
  
    const handleRemoveClick = (i) => {
      const values = [...inputs];
      values.splice(i, 1);
      setInputs(values);
    };
    
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      };

    const validateForm = () => {
      const { patient_id, days, note } = values;
      if (patient_id === "") {
          toast.error("Patient Id is required.", toastOptions);
          return false;
      } else if (days === "") {
              toast.error("Number of days medicine would continue is required.", toastOptions);
              return false;
          }
      return true;
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(validateForm()) {
        const { data } = await axios.post('http://localhost:1234/prescription',{ex1:values,inputs});
        if(data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if(data.status === true) {
            toast.success(data.msg, toastOptions);
        }
      }
    }
    return(
        <>
            <div className="prescriptionFolder">
            <div className="prescription-doctor-navbar">
            <Navbar doctorid = {state.from.props.doctorid}/>
            </div>
            <div className="prescription-doctor-mainContent">
                <div className="form-_header">Prescription Form</div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="prescription-doctor-PatientId">
                        <h3>Patient Id: </h3><br /> <input className="input_fields"
                            type="text"
                            name="patient_id"
                            onChange={(e) => handleChanged(e)}
                            min="3"
                        />
                    </div>
                    <div className="prescription-doctor-medicine"> <h3>Medicines:</h3>
                        {inputs.map((input, i) => (
                        <div key={i}>
                            <input className="input_medicine"
                                type="text"
                                value={input.value}
                                onChange={(event) => handleChange(i, event)}
                            />
                        <button className="medicine_button"onClick={() => handleRemoveClick(i)}>Remove</button>
                    </div>
                    
            ))}
            <button className="medicine_button_add" onClick={handleAddClick}>Add field</button>
          </div>
                    <div className="prescription-doctor-Days">
                        <h3>No. of Days:</h3> <br /> <input className="input_fields"
                            type="text"
                            name="days"
                            onChange={(e) => handleChanged(e)}
                        />
                    </div>
                    <div className="prescription-doctor-Note">
                       <h3>Note:</h3>  <br /><input className="input_fields"
                            type="text"
                            name="note"
                            onChange={(e) => handleChanged(e)}
                        />
                    </div>
                    <button className="medicine_button_prescribe" type="submit">Prescribe</button>
                </form>
            </div>
            </div>
            <ToastContainer />
        </>
    )
}