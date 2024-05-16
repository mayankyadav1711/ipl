import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import csk from "../components/images/csk.png"

const IPLStandings = () => {

  return (
    <>
    <div className='flex'>
   <div className="parent m-8">
        <div className="parentcard">
            <div className="logo">
                {/* <span className="parentcircle parentcircle1"></span> */}
                {/* <span className="parentcircle parentcircle2"></span> */}
                <span className="parentcircle parentcircle3"></span>
                <span className="parentcircle parentcircle4"></span>
                <span className="parentcircle parentcircle5">
                <h1 className='text-2xl font-bold text-white'>1</h1>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                        <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                        <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                        <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                      </svg> */}
                </span>

            </div>
            <div className="glass"></div>
            <div className="parentcontent flex text-center justify-center ">
                <span className="title flex justify-center mt-6 text-5xl">Chennai Super Kings</span>
                {/* <span className="text">Points : 14</span> */}
            </div>
            <div className="bottom">
                <div className='grid'>
                <div className="social-buttons-container w-full">
                
                    <button className="social-button .social-button1">
                        13</button>
                    <button className="social-button .social-button2">
                       7
                      </button> 
                      <button className="social-button .social-button3">
                        6
                      </button>
                      <button className="social-button .social-button3">
                        14
                      </button>
                </div>
                <div className="social-buttons-container w-full mt-2 -mb-2">
                
                <p className='text-white text-md'>Played</p>
                <p className='text-white text-md'>Won</p> 
                  <p className='text-white text-md'>Lost</p>
                  <p className='text-white text-md'>Points</p>
            </div></div>
                {/* <div className="view-more">
                    <button className="view-more-button">View more</button>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </div> */}
            </div>
            
        </div>
    </div>
    <div className="parent m-8">
        <div className="parentcard">
            <div className="logo">
                {/* <span className="parentcircle parentcircle1"></span> */}
                {/* <span className="parentcircle parentcircle2"></span> */}
                <span className="parentcircle parentcircle3"></span>
                <span className="parentcircle parentcircle4"></span>
                <span className="parentcircle parentcircle5">
                <h1 className='text-2xl font-bold text-white'>1</h1>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                        <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                        <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                        <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                      </svg> */}
                </span>

            </div>
            <div className="glass"></div>
            <div className="parentcontent flex text-center justify-center ">
                <span className="title flex justify-center mt-6 text-5xl">Chennai Super Kings</span>
                {/* <span className="text">Points : 14</span> */}
            </div>
            <div className="bottom">
                <div className='grid'>
                <div className="social-buttons-container w-full">
                
                    <button className="social-button .social-button1">
                        13</button>
                    <button className="social-button .social-button2">
                       7
                      </button> 
                      <button className="social-button .social-button3">
                        6
                      </button>
                      <button className="social-button .social-button3">
                        14
                      </button>
                </div>
                <div className="social-buttons-container w-full mt-2 -mb-2">
                
                <p className='text-white text-md'>Played</p>
                <p className='text-white text-md'>Won</p> 
                  <p className='text-white text-md'>Lost</p>
                  <p className='text-white text-md'>Points</p>
            </div></div>
                {/* <div className="view-more">
                    <button className="view-more-button">View more</button>
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </div> */}
            </div>
            
        </div>
    </div>
    </div>
    </>
  );
};

export default IPLStandings;
