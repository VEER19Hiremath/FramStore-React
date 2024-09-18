import { useState } from "react";
//import { useAuth } from "../store/auth";
//this is add coourse page
import {  toast } from 'react-toastify';
export const Service = () => {
  const [faculty, setFaculty] = useState({
   fruit_id:"",
   faculty_name:"",
   price:"",
  });
  
// const {user} =useAuth();
// const [userData, setUserData] = useState(true);
//  if (userData && user) {
//     setData({
//       username: user.username,
//       email: user.email,
//       message: "",
//     });
//     setUserData(false);
//   }
  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFaculty({
      ...faculty,
      [name]: value,
    });
    if (name === "fruit_name" && !/^[a-zA-Z]+$/.test(value)) {
      toast.error("name should contain only letters");
      return;
    }
  
    
   
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();
    if ( !faculty.fruit_id ||!faculty.fruit_name || !faculty.price ) {
      toast.error("All filds are Compulsory");
      return;
    }

    console.log(faculty);
    try {
      const response= await fetch( "http://localhost:5000/api/faculty",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(faculty),

      });
      if(response.ok){
        setFaculty({ fruit_id:"",
        fruit_name:"",
        price:"",
        });
        const res_data= await response.json();
      console.log("response from server",res_data);
      toast.success("Fruit added successfully");
      }
    } catch (error) {
      toast.error("Fruit failed to add ");
    }
  };


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>FRUITS</u></h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/fruit.png" width="350px" height="500px" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fruit_id">fruit_id</label>
                <input
                  type="number"
                  name="fruit_id"
                  id="fruit_id"
                  autoComplete="off"
                  value={faculty.fruit_id}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="fruit_name">fruit_name</label>
                <input
                  type="text"
                  name="fruit_name"
                  id="fruit_name"
                  autoComplete="off"
                  value={faculty.fruit_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
              <label htmlFor="price">Price per quantity</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="off"
                  value={faculty.price}
                  onChange={handleInput}
                  required
                />
                
              </div>
              

              <div>
                <button type="submit">Add Fruits</button>
              </div>
            </form>
          </section>
        </div>
        </section>
        </>
  );
};
