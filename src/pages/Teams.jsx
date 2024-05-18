import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom'; 
import csk from "../components/images/csk.png"
import rcb from "../components/images/rcb.png"
import dc from "../components/images/dc.png"
import gt from "../components/images/gt.png"
import kkr from "../components/images/kkr.png"
import lsg from "../components/images/lsg.png"
import mi from "../components/images/mi.png"
import pk from "../components/images/pk.png"
import rr from "../components/images/rr.png"
import srh from "../components/images/srh.png"
import Loader from "../components/Loader.jsx";

// sample API response 
const sampleData = [
  {
    "name": "Chennai Super Kings",
    "logoUrl": "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    "abbreviation": "CSK"
  },
  {
    "name": "Delhi Capitals",
    "logoUrl": "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    "abbreviation": "DC"
  },
  {
    "name": "Gujarat Titans",
    "logoUrl": "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
    "abbreviation": "GT"
  },
  {
    "name": "Kolkata Knight Riders",
    "logoUrl": "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    "abbreviation": "KKR"
  },
  {
    "name": "Lucknow Super Giants",
    "logoUrl": "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
    "abbreviation": "LSG"
  },
  {
    "name": "Mumbai Indians",
    "logoUrl": "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    "abbreviation": "MI"
  },
  {
    "name": "Punjab Kings",
    "logoUrl": "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    "abbreviation": "PBKS"
  },
  {
    "name": "Rajasthan Royals",
    "logoUrl": "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
    "abbreviation": "RR"
  },
  {
    "name": "Royal Challengers Bengaluru",
    "logoUrl": "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    "abbreviation": "RCB"
  },
  {
    "name": "Sunrisers Hyderabad",
    "logoUrl": "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    "abbreviation": "SRH"
  }
]

const Teams = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const images = [csk, rcb, dc]; // Add all your image paths here
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(promises)
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => console.error('Error loading images', error));
  }, []);
  return (
    <>
 
      {isLoading ? (
         <Loader/>
        ) : (
    <div className='container lg:m-6 mt-6 flex flex-wrap lg:gap-6 gap-6 justify-center sm:items-center'
    style={{marginTop:'120px'}}>
    <Link to="/teams/chennai-super-kings">
    <div className="card csk">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={csk} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Chennai Super <br /> Kings</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">CSK</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Chennai Super Kings</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2023 &nbsp; | &nbsp; 2021 | &nbsp; 2018 | &nbsp; 2011 | &nbsp; 2010
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> </Link>
  <Link to="/teams/royal-challengers-bangalore">
  <div className="card rcb">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={rcb} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Royal Challengers Bengaluru</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">RCB</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Royal Challengers Bengaluru</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
            Ee Sala Cup Namde
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/delhi-capitals">
  <div className="card dc">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={dc} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Delhi Capitals</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">DC</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Delhi Capitals</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/gujarat-titans">
  <div className="card gt">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={gt} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Gujarat Titans</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">GT</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Gujarat Titans</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2022 &nbsp; 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/kolkata-knight-riders">
  <div className="card kkr">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={kkr} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Kolkata Knight <br /> Riders</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">KKR</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Kolkata Knight Riders</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2014 &nbsp; | &nbsp; 2012
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/lucknow-super-giants">
  <div className="card lsg">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={lsg} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center text-blue-900'>Lucknow Super <br /> Giants</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">LSG</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Lucknow Super Giants</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/mumbai-indians">
  <div className="card mi">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={mi} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Mumbai Indians</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">MI</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Mumbai Indians</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2020 &nbsp; | &nbsp; 2019  | &nbsp; 2017  | &nbsp; 2015  | &nbsp; 2013
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/punjab-kings">
  <div className="card pk">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={pk} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Punjab Kings</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">PK</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Punjab Kings</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/rajasthan-royals">
  <div className="card rr">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={rr} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Rajasthan Royals</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">RR</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Rajasthan Royals</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2008 &nbsp; 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/teams/sunrisers-hyderabad">
  <div className="card srh">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={srh} alt='csk logo' className='h-[60%]'/>
          <strong className='text-xl text-center'>Sunrisers <br /> Hyderabad</strong>
        </div>
      </div>
      <div className="front">
        
        <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div>
  
        <div className="front-content">
          <small className="badge">SRH</small>
          <div className="description">
            <div className="title">
              <p className="title">
                <strong>Sunrisers Hyderabad</strong>
              </p>
              {/* <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
            </div>
            <p className="card-footer text-md">
              2016 &nbsp; 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>

  </div>
)}
    </>
  );
};

export default Teams;
