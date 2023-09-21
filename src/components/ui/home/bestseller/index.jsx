import React from 'react'

export default function index() {
  return (
    <div>
   <section className="banner__area banner__area-d pb-10">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner__item p-relative w-img mb-30">
                            <div className="banner__img">
                                <a href="product-details.html"><img src="assets/img/banner/banner-4.jpg" alt=""/></a>
                            </div>
                            <div className="banner__content">
                                <span>Bestseller Products</span>
                                <h6><a href="product-details.html">PC & Docking Station</a></h6>
                                <p>Discount 20% Off, Top Quality Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">

                        <div className="banner__item p-relative mb-30 w-img  ">
                            <div className="banner__img">
                                <a href="product-details.html"><img src="assets/img/banner/banner-5.jpg" alt=""/></a>
                            </div>
                            <div className="banner__content">
                                <span>Featured Products</span>
                                <h6><a href="product-details.html">Accessories iPhone</a></h6>
                                <p>Free Shipping All Order Over $99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}
