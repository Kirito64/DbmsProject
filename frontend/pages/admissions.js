import { Formik } from "formik";
import axios from "axios";
const Admissions = () => {
  return (
    <div className="boddy">
      <Formik
        initialValues={{
          name: "",
          photo: null,
          gender: "",
          bloodGroup: "",
          DOB: "",
          Mob1: "",
          Mob2: "",
          email: "",
          aadhar: "",
          fname: "",
          focc: "",
          mname: "",
          mocc: "",
          branch: "",
          minDetail: "",
          phyChall: "",
          JEEAR: "",
          JEER: "",
          JEES: "",
          AlloctCat: "",
          CandCat: "",
          JoDD: "",
          JoDate: "",
          JoAmount: "",
          InDD: "",
          InDate: "",
          InAmount: "",
          cAdd: "",
          cCity: "",
          cState: "",
          cPin: "",
          cMob: "",
          pAdd: "",
          pCity: "",
          pState: "",
          pPin: "",
          pMob: "",
          sscb: "",
          sscs: "",
          sscy: "",
          sscm: "",
          sscp: "",
          hscb: "",
          hscs: "",
          hscy: "",
          hscm: "",
          hscp: "",
          uploaded: "",
          chronicD: "",
          dec: "",
          sign: null,
        }}
        onSubmit={async (values) => {
          const formdata = new FormData();
          formdata.append("photo", values.photo);
          formdata.append("sign", values.sign);
          const requestOptions = {
            values,
          };

          const res = await axios.post(
            "http://localhost:8000/api/admission/new",
            formdata
          );
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="hdiv">
              <div className="headingg">
                <h2>
                  Application form for addmission to B.tecg Progranne 2019-20
                </h2>
                <label>Name in English</label>
                <input onChange={handleChange} name="name" type="text" />
                <br />
                <label>Name in Hindi</label>
                <input type="text" />
              </div>

              <div className="photo">
                <input
                  type="file"
                  id="photo"
                  onChange={handleChange}
                  name="photo"
                />
              </div>
            </div>
            <div>
              <label>Gender</label>
              <input onChange={handleChange} name="gender" type="text" />
              <label>Blood Group</label>
              <input onChange={handleChange} name="bloodGroup" type="text" />
              <label>Date of Birth</label>
              <input onChange={handleChange} name="DOB" type="text" />
              <br />
              <label>Mobile-1</label>
              <input onChange={handleChange} name="Mob1" type="text" />
              <label>Mobile-2</label>
              <input onChange={handleChange} name="Mob2" type="text" />
              <label>Email Id</label>
              <input onChange={handleChange} name="email" type="email" />
              <br />
              <label>Aadhar No</label>
              <input onChange={handleChange} name="aadhar" type="text" />
            </div>

            <div>
              <label>Father's name</label>
              <input onChange={handleChange} name="sname" type="text" />

              <label>Occupation</label>
              <input onChange={handleChange} name="focc" type="text" />
              <br />
              <label>Mother's Name</label>
              <input onChange={handleChange} name="mname" type="text" />
              <label>Occupation</label>
              <input onChange={handleChange} name="mocc" type="text" />
            </div>

            <div>
              <label>Branch</label>
              <input onChange={handleChange} name="branch" type="text" />
              <label>Minority Detail</label>
              <input onChange={handleChange} name="minDetail" type="text" />
              <br />
              <label>Physically Challenged</label>
              <input onChange={handleChange} name="phyChall" type="text" />
              <br />
              <h6>
                (If Yes,Please attach verificatiion report Medical Committe f
                IIIT Nagpur)
              </h6>
            </div>

            <div>
              <h3>JEE Mains Details</h3>
              <div>
                <label>Round of Allotment</label>
                <input onChange={handleChange} name="JEEAR" type="text" />
                <label>JEE Roll Number</label>
                <input onChange={handleChange} name="JEER" type="text" />
                <label>JEE All India Score</label>
                <input onChange={handleChange} name="JEES" type="text" />
                <label>Allotment Category</label>
                <input onChange={handleChange} name="AllotCat" type="text" />
                <label>Candidate Category</label>
                <input onChange={handleChange} name="CandCat" type="text" />
              </div>
            </div>

            <div>
              <h3>Details of Fee Payment</h3>
              <table>
                <tr>
                  <th>Sr.No</th>
                  <th>Detail</th>
                  <th>DD/ECS No.</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>JoSSA 2019 counselling</td>
                  <td>
                    <input onChange={handleChange} name="JoDD" type="text" />
                  </td>
                  <td>
                    <input onChange={handleChange} name="JoDate" type="text" />
                  </td>
                  <td>
                    Rs.
                    <input
                      type="text"
                      onChange={handleChange}
                      name="JoAmount"
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>At Institution Reporting for Admission</td>
                  <td>
                    <input onChange={handleChange} name="InDD" type="text" />
                  </td>
                  <td>
                    <input onChange={handleChange} name="InDate" type="text" />
                  </td>
                  <td>
                    Rs.
                    <input
                      type="text"
                      onChange={handleChange}
                      name="InAmount"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <h3>Address</h3>
              <table>
                <tr>
                  <th>Address for corresondance</th>
                </tr>
                <tr>
                  <td>Address Line</td>
                  <td>
                    <textarea
                      onChange={handleChange}
                      name="cAdd"
                      cols="30"
                      rows="3"
                      style={{ resize: "none" }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <input onChange={handleChange} name="cCity" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>
                    <input onChange={handleChange} name="cState" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>PINCODE</td>
                  <td>
                    <input onChange={handleChange} name="cPin" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Mobile No</td>
                  <td>
                    <input onChange={handleChange} name="cMob" type="text" />
                  </td>
                </tr>
              </table>

              <table>
                <tr>
                  <th>Permanent Address</th>
                </tr>
                <tr>
                  <td>Address Line</td>
                  <td>
                    <textarea
                      onChange={handleChange}
                      name="cAdd"
                      cols="30"
                      rows="3"
                      style={{ resize: "none" }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <input onChange={handleChange} name="pCity" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>
                    <input onChange={handleChange} name="pState" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>PINCODE</td>
                  <td>
                    <input onChange={handleChange} name="pPin" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Mobile No</td>
                  <td>
                    <input onChange={handleChange} name="pMob" type="text" />
                  </td>
                </tr>
              </table>
            </div>

            <div>
              <h3>Education</h3>
              <table>
                <tr>
                  <th>Class</th>
                  <th>Name of Board</th>
                  <th>Subject</th>
                  <th>Year of Passing</th>
                  <th>Marks Obtained</th>
                  <th>Percentage/Grade</th>
                </tr>
                <tr>
                  <td>
                    10<sup>th</sup>/SSC
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="sscb" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="sscs" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="sscy" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="sscm" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="sscp" />
                  </td>
                </tr>
                <tr>
                  <td>
                    12<sup>th</sup>/HSC
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="hscb" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="hscs" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="hscy" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="hscm" />
                  </td>
                  <td>
                    <input type="text" onChange={handleChange} name="hscp" />
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <div>
                {" "}
                <p>
                  Scanned copies of documents uploaded?
                  <select
                    name="uploaded"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select" />
                    <option value="Yes" label="Yes" />
                    <option value="No" label="No" />
                  </select>
                </p>
                <p>
                  10<sup>th</sup> Marksheet / 12<sup>th</sup> Marksheet /
                  Aadhaar / Category Certificate / PWD Certificate / EWS (If
                  applicable)
                </p>
              </div>
              <div>
                <h5>
                  Whether suffering from any chronic disease:
                  <input onChange={handleChange} name="chronicD" type="text" />
                </h5>
              </div>
            </div>
            <div>
              <h3>Declaration by the applicant:</h3>

              <p>
                <input onChange={handleChange} name="dec" type="checkbox" /> I
                certified that all information provided by me in this form is
                correct to the best of my knowledge and belief. I understand
                that any willful misrepresentation of facts will result in my
                dismissal from the Institute. If admitted,I shall abide by all
                rules and regulations of the Institute.
              </p>
              <div>
                <input type="file" onChange={handleChange} name="sign" />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Admissions;
