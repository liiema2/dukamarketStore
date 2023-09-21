import React from 'react'
import Recommended from '../../../slider/recommended'
export default function index(Props) {
  return (
    <div>
           <section className="recomand-product-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10">
                            <div className="section__title">
                                <h5 className="st-titile">Recommended For You</h5>
                            </div>
                            <div className="button-wrap">
                                <a href="shop">See All Product <i className="fal fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="product-bs-slider-2">
                        <div className="product-slider-3 swiper-container">
                           
                          
<Recommended data={Props}></Recommended>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
