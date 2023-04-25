import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ProductContext from "./ProductContext";
import { PresShow } from './presShow';
import './PatientPrescription.css';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

export default function PatientPrescription () {
    const ProductCtx = useContext(ProductContext)
    useEffect(()=>{
        console.log('useEffect')
        getProducts();
    },[])
    const getProducts = async () => {
      //console.log("hello");
      const data = await fetch(`http://localhost:1234/getpres`);
      const products_data = await data.json();
      console.log(products_data);
      //console.log("hello1");
      ProductCtx.setProducts(products_data.pres);
      //console.log("hello world");
    }
    return(
      //   <div>
      //       {ProductCtx.Products.map((item) => {
      //   if (!item.children) {
      //     return (
      //       <div key={item.id}>
      //         <p>{item.patient_id}</p>
      //       </div>
      //     );
      //   }
      // })}
       
      // {ProductCtx.Products.map((item) => {
      //   console.log(item);
      //   if (item.inputs) {
      //     console.log("hello:");
      //     return (
      //       <div key={item.inputs}>
      //         {item.inputs.map((child) => (
      //           <div key={child.inputs}>
      //             <p>{child.value}</p>
      //           </div>
      //         ))}
      //       </div>
      //     );
      //   }
      // })}
      //   </div>
      <div className="prescription-details">
      <Typography variant='h3'>Prescription Data</Typography>
      <ul >

        {ProductCtx.Products.map(prescription => (
          <Typography variant='body1'><li key={prescription._id} className="prescription-item"> 
            <h3>{prescription.createdAt}</h3>
            <p>{prescription.days} days</p>
            <ul >
              {prescription.inputs.map(input => (
                <li key={input._id}>
                  <p>{input.value}</p>
                </li>
              ))}
            </ul><br/>
          </li></Typography>
        ))}
      </ul>
    </div>
    )
}