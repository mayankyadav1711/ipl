import React from 'react';
import csk from "../components/images/csk.png"
import rcb from "../components/images/rcb.png"

const Teams = () => {
  return (
    <>
    <div className='container m-4 ml-10 flex gap-8'>
    <div className="card csk">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={csk} alt='csk logo' className='w-[70%]'/>
          <strong className='text-xl text-center'>Chennai Super Kings</strong>
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
              2022 &nbsp; | &nbsp; 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card rcb">
    <div className="content">
      <div className="back">
        <div className="back-content">
<img src={rcb} alt='csk logo' className='h-[40%]'/>
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
              2022 &nbsp; | &nbsp; 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  );
};

export default Teams;
