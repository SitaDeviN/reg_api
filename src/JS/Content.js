import React from "react";
import './Content.css';
/**const Content=()=>
{
    return(
        <div>Content</div>
    )
}**/
/**const Content=()=>
{
    const name="Sita"
    return(
        <div>
            <p>{name}</p>
            <p>[10,20,30]</p>
        </div>
    )
}**/

/**const Content=()=>
{
    function func1()
    {
        const arr=['sita','anu','vinnu'];
        const name=Math.floor(Math.random()*3);
        return arr[name];
    }
    const handleChange=()=>
    {
        console.log("thanks");
    }
    return(
        <div>Name:{func1()}
        <button onClick={handleChange()}>Submit</button>
        </div>
    )
}**/
/**const Content=()=>
{
    function func1()
    {
        const a=['salve','arrivederci','figlio'];
        const i=Math.floor(Math.random()*3);
        return a[i];
    }
    const handle1=()=>
    {
        console.log("hi");
    }
    return(
        <div>Name:{func1()}
        <button onClick={handle1()}>submit</button>
        </div>
    )
}**/
function Content() {
    return (
      <div>
    <h1 align='center'>New Registration Form</h1>
    <form>
        <table align='center' width='800' height='550' bgcolor='pink'>
            <tr>
                <td><label for="full_name">Full Name:</label></td>
                <td><input type="text" name="full_name" id="full_name"></input><br></br><br></br></td>
            </tr>
            <tr>
                <td><label for="email">Email:</label></td>
                <td><input type="email" name="email" id="email"></input><br></br><br></br></td>
            </tr>
            <tr>
                <td><label for="username">Username:</label></td>
                <td><input type="text" name="username" id="username"></input><br></br><br></br></td>
            </tr>
            <tr>
                <td><label for="password">Password:</label></td>
                <td><input type="password" name="password" id="password"></input><br></br><br></br></td>
            </tr>
            <tr>
                <td><label for="confirm_password">Confirm Password:</label></td>
                <td><input type="password" name="confirm_password" id="confirm_password"></input><br></br><br></br></td>
            </tr>
            <tr>
                <td>Country:</td>
                <td>
                    <select name="country">
                        <option value="Select Country">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Other">Other</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td><input type="radio" name="gender" id="male"></input>Male</td>
                <td><input type="radio" name="gender" id="female"></input>Female</td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit">Submit</button></td>
            </tr>
        </table>
    </form>
    </div>
    )
  }
export default Content;