import React from "react";
//import {Routes,Route,Link} from "react-router-dom";
//import Button from '@mui/material/Button';
//import Signin from "./Signin";
const Project=()=>{
       return (
         <div>
           <form>
             <br></br>
             <br></br>
             <br></br>
             <table align="center">
               <tr>
                 <td class="a1"> Email</td>
                 <td>
                   {' '}
                   <input
                     type="text"
                     class="a1"
                     placeholder="email or username"
                   ></input>
                 </td>
               </tr>
               <tr>
                 <td class="a2"> Password</td>
                 <td>
                   {' '}
                   <input
                     type="password"
                     class="a2"
                     placeholder="password"
                   ></input>
                 </td>
               </tr>
               <br></br>
               <br></br>
               <tr>
                 <td></td>
               </tr>
             </table>
           </form>
         </div>
       )
}
export default Project