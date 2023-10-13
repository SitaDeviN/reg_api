import React from "react";
const Signin=()=>
{
    return(
        <div>
    <div class="d1">
        <form>
            <label for="t1">Personal Details</label>
            <br></br>
            <br></br>
            <table id="t1">
                <tr>
                    <td>Name</td>
                    <td>Thea Kennedy</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>theakennedy23@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>1-455-345-345</td>
                </tr>
               
            </table>
        </form>
        </div>
       <div class="d2">
        <form>
            Educational Information
            <table id="t2">
                <tr>
                    <td>SSC</td>
                    <td>Riverside High</td>
                </tr>
                <tr>
                    <td>Intermediate</td>
                    <td>Sri chaithanya junior college</td>
                </tr>
                <tr>
                    <td>Bachelors</td>
                    <td>Sri Vasavi Engineering College</td>
                </tr>
               
            </table>
          </form>
        </div>
    </div>
    
    )
}
export default Signin;