import React from 'react';

export default function Index(props) {
  const data = props.dataFetchApi;
    console.log(data);
  // Check if data is an array before mapping over it
  if (!Array.isArray(data)) {
    return null; // or handle the case when data is not an array
  }

  return (
    <div className="container">
      <div className="row justify-content-between">
        {data.map((item, index) => (
          item.image && (item.name === "hostsale" || item.name === "salebest") ? (
            <div key={index} className="col-md-4 mb-5">
              <section className="banner__area pt-20 pb-5">
                <div className="banner__item p-relative w-img">
                  <div className="banner__img">
                    <a href="shop">
                      <img src={item.image} alt="" />
                    </a>
                  </div>
                  <div className="banner__content">
                    <h6>
                    
                    
                    </h6>
                    {/* <p>Limited Time: Online Only!</p> */}
                  </div>
                </div>
              </section>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

