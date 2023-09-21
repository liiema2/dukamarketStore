import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import Selling from '../../../slider/selling'
import { useState } from 'react'
export default function index(props) {
  
    const [flags,setFlags] = useState('')
    const handleOnClick = ()=>{
        setFlags('Computers & Technologies');
    }
    const handleOnClickPhone = ()=>{
        setFlags('Phones & Accessories');
    }
    const handleOnClickBook = ()=>{
        setFlags('Books & Office');
    }
    const handleOnClickConsumer  = ()=>{
        setFlags('Consumer Electrics');
    }
  return (
    <div>


<section className="topsell__area-2 pt-15">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile">Top Selling Products </h5>
                            </div>
                            <div className="product__nav-tab"> 
                                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button  onClick={handleOnClick} className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="false">computer</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button  onClick={handleOnClickPhone} className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">Phone</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button  onClick={handleOnClickBook}  className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">Books</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button onClick={handleOnClickConsumer}   className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Consumer electrics</button>
                                    </li>
                                    
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12" >
                     
                        <Selling data={props} flag={flags}></Selling>
                       
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
