/**import React from 'react'

export function Header() {
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  )
}

export default Header**/
/**import React from 'react';
class Header extends React.Component
{
    render()
    {
        return(
            <div>Header</div>
        )       
    }
}**/
import React from 'react'
import './form.css'
import Form from './Form';
const Header = () => {
  // here Header is file name. whatever is your file name use it as class name and at export.
  return (
    <div>
      <div>
        <table align="center" id="t">
          <form>
            <tr>
              <td>
                <label for="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onblur="validateName(this)"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onblur="validateEmail(this)"
                  disabled
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="phone">Phone Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  onblur="validatePhoneNumber(this)"
                  disabled
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label for="branch">Branch:</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="aim"
                  name="branch"
                  value="AIML"
                  required
                ></input>
                <label for="aim">AIML</label>
                <input
                  type="radio"
                  id="cai"
                  name="branch"
                  value="CAI"
                  required
                ></input>
                <label for="cai">CAI</label>
                <input
                  type="radio"
                  id="cse"
                  name="branch"
                  value="CSE"
                  required
                ></input>
                <label for="cse">CSE</label>
                <input
                  type="radio"
                  id="cst"
                  name="branch"
                  value="CST"
                  required
                ></input>
                <label for="cst">CST</label>
              </td>
            </tr>

            <tr>
              <td>
                <label for="gender">Gender:</label>
              </td>
              <td>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                ></input>
                <label for="female">Female</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                ></input>
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                ></input>
                <label for="other">Other</label>
              </td>
            </tr>

            <tr>
              <td>
                <label for="dob">Date of Birth:</label>
              </td>
              <td>
                <input type="date" id="dob" name="dob"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="programming-languages">
                  Programming Languages:
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="c"
                  name="programming-languages[]"
                  value="C"
                ></input>
              </td>
              <td>
                <label for="c">C</label>
                <input
                  type="checkbox"
                  id="r"
                  name="programming-languages[]"
                  value="R"
                ></input>
              </td>
              <td>
                <label for="r">R</label>
                <input
                  type="checkbox"
                  id="python"
                  name="programming-languages[]"
                  value="Python"
                ></input>
              </td>
              <label for="python">Python</label>
              <input
                type="checkbox"
                id="java"
                name="programming-languages[]"
                value="Java"
              ></input>
              <label for="java">Java</label>
              <input
                type="checkbox"
                id="others"
                name="programming-languages[]"
                value="Others"
              ></input>
              <label for="others">Others</label>
            </tr>
            <tr>
              <td>
                <label for="english-speaking-skills">
                  English Speaking Skills (1-10):
                </label>
              </td>
              <td>
                <input
                  type="range"
                  id="english-speaking-skills"
                  name="english-speaking-skills"
                  min="1"
                  max="10"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="photo">Upload Photo:</label>
              </td>
              <td>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="certificates">Upload Certificates:</label>
              </td>
              <td>
                <input
                  type="file"
                  id="certificates"
                  name="certificates"
                  accept=".pdf,.doc,.docx"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="username">Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label for="student-id">Student ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="student-id"
                  name="student-id"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <Button>
                  <Routes>
                    <Route path="/Form" element={<Form />} />
                  </Routes>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/Form">Submit</Link>
                      </li>
                    </ul>
                  </nav>
                </Button>
                <input type="reset" value="Reset"></input>
              </td>
            </tr>
          </form>
        </table>
      </div>
    </div>
  )
}
export default Header