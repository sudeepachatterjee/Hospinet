import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
export default function MyPatient () {
    const [values,setValues] = useState({
        patient_id: ""
      });
    const handleChanged = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
          const { data } = await axios.post('http://localhost:1234/search',{values});
          if(data.status === false) {
            //toast.error(data.msg, toastOptions);
          }
          if(data.status === true) {
              //toast.success(data.msg, toastOptions);
          }
        }
    return(
        <>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="prescription-doctor-PatientId">
                <h3>Patient Id: </h3><br /> <input className="input_fields"
                type="text"
                name="patient_id"
                onChange={(e) => handleChanged(e)}
                min="3"
                />
            </div>
            <button type="submit">Search</button>
            </form>
        </>
    )
}