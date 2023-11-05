import email from '../logos/email.png';
import linked from '../logos/linkedin.png';
import profile from '../images/profile.jpg';

const Info = () => {
 return (  
 
    <div className="info-cont">
        <img src={profile} className='profile-pic'/>
        <h1>Ashley Jones</h1>
        <h2>Frontend Developer</h2>
        <small>www.ashjones1.com</small>
        <div className='buttons'>
            <button className='email'><img src={email} /><span>Email</span></button>
            <button className='linked'><img src={linked} /> LinkedIn</button>
        </div>
    </div>
    
    )

}

export default Info;