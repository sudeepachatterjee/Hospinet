import './PatientProfile.css';

export default function PatientProfile() {
    return(
        <div className="body">
            <div class="container">
            <h1 class="form-title">PATIENT FORM</h1>
            <img src="https://media.istockphoto.com/id/1301555107/photo/offering-patient-centred-care-that-proves-effective-and-efficient.jpg?s=612x612&w=0&k=20&c=ZQ-XMynZeFaYYLHfEhDpiBnjGd8DODsCb57r2ZmZkjw=" alt=" "class="container-img" />
            <form>
                <div className="main-user-info">
                    <div className="user-input-box">
                        <span>Full Name : </span>
                        <span class="a">Init Silicon</span>                    
                    </div>
                    <div class="user-input-box">
                        <span>Email Id :</span>
                        <span class="a">silicon07init@gmail.com</span> 
                    </div>
                            
                    <div class="user-input-box">
                        <span>Gender : </span>
                        <span class="a">Male</span>
                    </div>
                    <div class="user-input-box">
                        <span>Phone Number : </span>
                        <span class="a"> 8789821018</span>
                    </div>
                                    
                    <div class="user-input-box">
                        <span>Age : </span>
                        <span class="a">21</span>
                    </div>
                    <div class="user-input-box">
                        <span>Past Disease : </span>
                        <span class="a">Diabetes,cold</span>
                    </div>
                                            
                </div>
            </form>    
        </div>
        </div>
    )
}