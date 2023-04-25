import './Navbar.css'
import {FaFilePrescription} from 'react-icons/fa';
import { AiFillProfile } from 'react-icons/ai';
import {MdInventory2} from 'react-icons/md';
import {ImProfile} from 'react-icons/im';
import {Link} from 'react-router-dom';
export default function Navbar (props) {
    console.log("in navbar");
    console.log(props.doctorid);
    return (
        <>
            <div className='navbar-start'>
                <div className="wrapper">
                    <div className="sidebar">
                        <h2>Hospinet</h2>
                        <ul>
                            <li><Link to="/prescriptiondoctor" state={{from:{props}}}><FaFilePrescription size={30}color='white'/>Prescription</Link></li>
                            <li><Link to="/allpatients" state={{from:{props}}}><AiFillProfile size={30}color='white'/>All Patients</Link></li>
                            <li><a href="/medicine"><MdInventory2 size={30}color='white'/>Inventory</a></li>
                            <li><Link to="/doctorprofile" state={{from:{props}}}><ImProfile size={30}color='white'/>My Profile</Link></li>
                        </ul> 
                        <div className="social_media">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    {/* <div className="main_content">
                        <div className="header">Welcome!! Have a nice day.</div>  
                    </div> */}
                </div>
            </div>
        </>
    )
}