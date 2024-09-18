export const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                
                <h1>Welcome to Our Farm-Store </h1>
                <p>"Farm store management involves overseeing the operations of a retail outlet 
that sells agricultural products, equipment, and supplies directly to farmers 
and the general public. Responsibilities include inventory management, ordering stock, customer service,
 staff supervision, marketing, and maintaining the store's financial health."
                </p>
                <h1>Get Started Today</h1>
                <br></br><br></br>
                <div className="btn btn-group">
                  <a href="/register">
                    <button className="btn">start now</button>
                  </a>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="/images/farm1.png"
                  alt="coding together"
                  width="500"
                  height="600"
                />
              </div>
            </div>
          </section>
        </main>
  
        {/* 2nd section */}
        <section className="section-analytics">
            <div className="container grid grid-four-cols">
            <div >
                <img
                  src="/images/1st.png"
                  alt="coding together"
                  width="400"
                  height="200"
                />
              </div>
              <div >
                <img
                  src="/images/2nd.png"
                  alt="coding together"
                  width="350"
                  height="200"
                />
              </div>
              <div >
                <img
                  src="/images/3rd.png"
                  alt="coding together"
                  width="300"
                  height="200"
                />
              </div>  


            </div>
        </section>

  
       
      </>
    );
  };