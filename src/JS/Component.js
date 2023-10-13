import React from "react";
function Component() {
  return (
    <div>
      <h1 align='center'>student register form</h1>
       <form>
      <table align='center' width='800' height='550' bgcolor='skyblue' >
        <tr>
          <td><label>Enter Full Name :</label></td>
          <td><input type="text" name="t1" id="f1"/><br></br></td> 
        </tr>
        <tr>
          <td><label>first Name :</label></td>
          <td><input type="text" name="t1" id="f1"/><br></br></td> 
        </tr>
        <tr>
          <td><label>second Name :</label></td>
          <td><input type="text" name="t1" id="f1"/><br></br></td> 
        </tr>
        <tr>
          <td><label>Enter rollno :</label></td>
           <td><input type="number" name="t2" id="f2"/><br></br></td> 
        </tr>
        <tr>
          <td><label>Enter blood group:</label></td>  
          <td><input type="text" name="t3" id="f3"/><br></br></td>  
        </tr><tr>
           <td><label>Enter phno  :</label></td>  
           <td><input type="number" name="t2" id="f2"/><br></br></td>  
        </tr><tr>
            <td>KNOWN SKILLS:</td>
           <td><textarea rows={5} column={20} placeholder='enter your skills'></textarea></td>
       </tr>
       <tr>
         <td>select branch :</td>
          <td>
          <select>
                    <option value="Branches" length="50">Branches</option>
                    <option value="AIM">AIM</option>
                    <option value="CAI">CAI</option>
                    <option value="CSE">CSE</option>
          </select>
          </td>
       </tr>
       <tr>
          <td>Gender</td>
          <td><input type="radio" />Male</td>
          <td><input type="radio" />Female</td>
        </tr>
       <tr>
          <td><button type="submit"><a href="/form2.html" target="_blank"></a></button></td>
       </tr>


  </table>
  </form>
  </div>
  )
}

export default Component;