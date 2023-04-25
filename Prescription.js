import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './Prescription.css'; 



export default function Prescription () {
  console.log("Prescription1");
  const {state} = useLocation();
  console.log("in Prescription  ");
  // console.log(state);
  // console.log(state.id);
    const [inputs, setInputs] = useState([{ value: "" }]);
    
    const [values,setValues] = useState({
      patient_id: "",
      days:"",
      note:"",
      // did: state.id.text.text.id.user.username
    });
    console.log(values);
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    };
    //console.log(inputs)
    const handleChange = (i, event) => {
      const values = [...inputs];
      values[i].value = event.target.value;
      setInputs(values);
    };
  
    const handleChanged = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    //console.log(values);
    const handleAddClick = () => {
      setInputs([...inputs, { value: "" }]);
    };
  
    const handleRemoveClick = (i) => {
      const values = [...inputs];
      values.splice(i, 1);
      setInputs(values);
    };
    console.log("sac")
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
    //console.log(hello);
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(validateForm()) {
        const { data } = await axios.post('http://localhost:1234/prescription',{ex1:values,inputs});
        if(data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if(data.status === true) {
          console.log("Sucess");
        }
      }
    };
    return (
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            Patient Id: <input
                    type="text"
                    placeholder="Patient Id"
                    name="patient_id"
                    onChange={(e) => handleChanged(e)}
                    min="3"
                  />
          </div>
          <div>
            {inputs.map((input, i) => (
              <div key={i}>
                <input
                  type="text"
                  value={input.value}
                  onChange={(event) => handleChange(i, event)}
                />
                <button onClick={() => handleRemoveClick(i)}>-</button>
              </div>
            ))}
            <button onClick={handleAddClick}>Add field</button>
          </div>
          <div>
              No. of Days <input
                    type="text"
                    placeholder="Days"
                    name="days"
                    onChange={(e) => handleChanged(e)}
                  />
          </div>
          <div>
              Note:<input
                    type="text"
                    placeholder="Note"
                    name="note"
                    onChange={(e) => handleChanged(e)}
                  />
          </div>
          <button type="submit">Prescribe</button>
          </form>
      </div>
    );
  };
  