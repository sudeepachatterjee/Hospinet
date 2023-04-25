import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import './AllPatients.css';

export default function AllPatients () {
    console.log("inallpatient")
    const {state} = useLocation();
    console.log("in all",state);
    const [values,setValues] = useState({
        id: ""
    });
    const [pres, setPres] = useState([]);
    const handleChanged = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    console.log(values);
    

    const handleResultClick = () => {
        // Call an API to fetch the result based on the ID
        fetch(`http://localhost:1234/getpres/${values.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('API response:', data);
          if (data.status) {
            setPres(data.pres);
          } else {
            setPres([]);
          }
        })
        .catch((error) => console.error(error));
    };
    console.log("hello");
    //console.log(result);
    console.log("hello1");
    return(
        <>
            <Navbar doctorid = {state.from.props.doctorid}/>
            <div className="AllPatientsStart">
                <div className="search">
                    <input className="Patient_id"
                        type="text"
                        placeholder='Patient Id'
                        name="id"
                        onChange={(e) => handleChanged(e)}
                    />
                </div>
                <button className="submit-search" onClick={handleResultClick}>Search</button>
            </div>
            {pres.length > 0 ? (
            <div className='searchresult'>
                {pres.map((prescription) => (
                    <div key={prescription._id} className="prescription-item">
                        <h3>{prescription.createdAt}</h3>
                        <div>{prescription.note}</div>
                        <ul>
                            {prescription.inputs.map((input) => (
                                <li key={input._id}>{input.value}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
      ) : (
        <div className='ifnot'>No prescription found.</div>
      )}
        
        </>
    )
}