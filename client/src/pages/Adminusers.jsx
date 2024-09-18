import { useState } from "react";
import { useEffect } from "react"
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
const URL="http://localhost:5000/api/admin/users";
export const Adminusers=()=>{
const [users,setUsers]=useState([]);

    const getallusersdata=async()=>{
        try {
            const response= await fetch(URL,{
                method:"GET",
            });
            const data=await response.json();
            console.log(`users ${data}`);
            setUsers(data);

            
        } catch (error) {
            console.log(error);
            
        }
    }
    //deleting user 
    const deleteuser=async(id)=>{
        try {
            
        const response= await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
            method:"DELETE",
        });
        const data=await response.json();
        console.log(`users after delete  ${data}`);
        if(response.ok){
            getallusersdata();
            toast.success("User deleted successfully");
        }
    }catch (error) {
            console.log(error); 
        }
    };
   useEffect(()=>{
    getallusersdata();
   },[]  );
    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1>ORDER-LIST</h1>
            </div>
    <div className="container admin-users">
        <table>
            <thead>
                <tr>
                    <td>USER ID </td>
                    <td>USER NAME</td>
                    <td>PRODUCT</td>
                    <td>QUANTITY</td>
                    
                </tr>
            </thead>
            <tbody>
            {users.map((curUser,index)=>{
     return( <tr key={index}>
        <td>{curUser.user_id}</td>
        <td>{curUser.user_name}</td>
        <td>{curUser.product}</td>
        <td>{curUser.quantity}</td>
        
        <td><NavLink to="/admin/update">Edit</NavLink></td>
        <td><button onClick={()=>deleteuser(curUser._id)}>Delete</button></td>
     </tr>);
          })}
            </tbody>
        </table>
   
</div>
    </section>
    </>
}