import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Adminupdate = () => {
  const [data, setData] = useState({
    user_id: "",
    user_name: "",
    product: "",
    quantity:""
  });
  const params=useParams();
  console.log("params single user",params);

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

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setData({
   ...data,
   [name]:value,
    });
  };

  // handle fomr getFormSubmissionInfo
 
//   const getsingleuserdata=async()=>{
//     try {
            
//         const response= await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
//             method:"GET",
//         });
//         const data=await response.json();
//         console.log(`users after delete  ${data}`);
//         setData(data);
//         // if(response.ok){
//         //     getallusersdata();
//         //     toast.success("User deleted successfully");
//         // }
//     }catch (error) {
//             console.log(error); 
//         }
//   };
  const handleSubmit = async(e) => {
    e.preventDefault();
try {
    const response=await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    }   
    );
    if(response.ok){
    toast.success("Updated Succefully");
    }
    else{
        toast.error("Failed to Update ");
    }
} catch (error) {
    console.log(error);
}
};

// useEffect(()=>{
//   getsingleuserdata();
// },[]);
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading"><u>Update user data</u></h1>
        </div>
   

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user_id">user_id</label>
                <input
                  type="number"
                  name="user_id"
                  id="user_id"
                  autoComplete="off"
                  value={data.user_id}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="name">user_name</label>
                <input
                  type="user_name"
                  name="user_name"
                  id="user_name"
                  autoComplete="off"
                  value={data.user_name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="product">product</label>
                <input 
                  type="text"
                  name="product"
                  id="product"
                  autoComplete="off"
                  value={data.product}
                  onChange={handleInput}
                  required

                />
              </div>
              <div>
                <label htmlFor="quantity">quantity</label>
                <input 
                  type="number"
                  name="quantity"
                  id="quantity"
                  autoComplete="off"
                  value={data.quantity}
                  onChange={handleInput}
                  required

                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        
        </section>
        </>
  );
};
