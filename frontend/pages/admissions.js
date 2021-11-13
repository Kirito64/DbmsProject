import { Formik } from "formik";

const Admissions = () => {
  return (
    <div className="boddy">
      <h1 className="titlee">Admission Web Portal</h1>
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
          JEESA: "",
          JEESM: "",
          JEESS: "",
          JEESY: "",
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
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className="hdiv" style={{ padding: "10px 50px" }} x>
              <div className="headingg">
                <h3>
                  Application form for addmission to B.tecg Progranne 2019-20
                </h3>
                <div className="aaw">
                  <label>Name in English</label>
                  <input
                    required
                    onChange={handleChange}
                    name="name"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <h4 style={{ margin: "5px auto" }}>Upload your photo</h4>
                <input
                  required
                  className="photo"
                  type="file"
                  id="photo"
                  onChange={handleChange}
                  name="photo"
                />
              </div>
            </div>
            <div className="grid">
              <div className="subgrid">
                <label>Gender</label>
                <input
                  required
                  onChange={handleChange}
                  name="gender"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Blood Group</label>
                <input
                  required
                  onChange={handleChange}
                  name="bloodGroup"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Date of Birth</label>
                <input
                  required
                  onChange={handleChange}
                  name="DOB"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Mobile-1</label>
                <input
                  required
                  onChange={handleChange}
                  name="Mob1"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Mobile-2</label>
                <input
                  required
                  onChange={handleChange}
                  name="Mob2"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Email Id</label>
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  type="email"
                />
              </div>
              <div className="subgrid">
                <label>Aadhar No</label>
                <input
                  required
                  onChange={handleChange}
                  name="aadhar"
                  type="text"
                />
              </div>
            </div>

            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(2,1fr)" }}
            >
              <div className="subgrid">
                <label>Father's name</label>
                <input
                  required
                  onChange={handleChange}
                  name="sname"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Occupation</label>
                <input
                  required
                  onChange={handleChange}
                  name="focc"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Mother's Name</label>

                <input
                  required
                  onChange={handleChange}
                  name="mname"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Occupation</label>
                <input
                  required
                  onChange={handleChange}
                  name="mocc"
                  type="text"
                />
              </div>
            </div>

            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(2,1fr)" }}
            >
              <div className="subgrid">
                <label>Branch</label>
                <input
                  required
                  onChange={handleChange}
                  name="branch"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>Minority Detail</label>
                <input
                  required
                  onChange={handleChange}
                  name="minDetail"
                  type="text"
                />
              </div>
              <div className="subgrid">
                <label>
                  Physically Challenged
                  <p style={{ padding: "1px", margin: "0", fontSize: "12px" }}>
                    (If Yes,Please attach verificatiion report Medical Committe
                    of IIIT Nagpur)
                  </p>
                </label>
                <textarea
                  required
                  onChange={handleChange}
                  name="phyChall"
                  type="text"
                  cols="30"
                  rows="3"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>

            <div>
              <h3 style={{ padding: "10px 50px" }}>JEE Mains Details</h3>
              <div
                className="grid"
                style={{ gridTemplateColumns: "repeat(2,1fr)" }}
              >
                <div className="subgrid">
                  <label>Round of Allotment</label>
                  <input
                    required
                    onChange={handleChange}
                    name="JEEAR"
                    type="text"
                  />
                </div>
                <div className="subgrid">
                  <label>JEE Roll Number</label>
                  <input
                    required
                    onChange={handleChange}
                    name="JEER"
                    type="text"
                  />
                </div>

                <div className="subgrid">
                  <label>Allotment Category</label>
                  <input
                    required
                    onChange={handleChange}
                    name="AllotCat"
                    type="text"
                  />
                </div>
                <div className="subgrid">
                  <label>Candidate Category</label>
                  <input
                    required
                    onChange={handleChange}
                    name="CandCat"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "10px 50px",
                }}
              >
                <label>JEE All India Score</label>

                <input
                  required
                  onChange={handleChange}
                  name="JEESA"
                  type="text"
                  placeholder="Air"
                />
                <input
                  required
                  onChange={handleChange}
                  name="JEESM"
                  type="text"
                  placeholder="Mark"
                />
                <input
                  required
                  onChange={handleChange}
                  name="JEESS"
                  type="text"
                  placeholder="Score"
                />
                <input
                  required
                  onChange={handleChange}
                  name="JEESY"
                  type="text"
                  placeholder="Year"
                />
              </div>
            </div>

            <div>
              <h3 style={{ padding: "10px 50px" }}>Details of Fee Payment</h3>
              <table className="feetable" border="1px">
                <tr>
                  <th>Sr.No</th>
                  <th>Detail</th>
                  <th>DD/ECS No.</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td style={{ textAlign: "start" }}>JoSSA 2019 counselling</td>
                  <td>
                    <input
                      required
                      onChange={handleChange}
                      name="JoDD"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      required
                      onChange={handleChange}
                      name="JoDate"
                      type="text"
                    />
                  </td>
                  <td>
                    Rs.&nbsp;&nbsp;
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="JoAmount"
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td style={{ textAlign: "start" }}>
                    At Institution Reporting for Admission
                  </td>
                  <td>
                    <input
                      required
                      onChange={handleChange}
                      name="InDD"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      required
                      onChange={handleChange}
                      name="InDate"
                      type="text"
                    />
                  </td>
                  <td>
                    Rs.&nbsp;&nbsp;
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="InAmount"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ padding: "10px 50px" }}>
              <h3>Address</h3>
              <div
                className="grid"
                style={{ gridTemplateColumns: "repeat(2,1fr)" }}
              >
                <table>
                  <th style={{ textAlign: "start" }}>
                    Address for corresondance
                  </th>

                  <tr>
                    <td>Address Line</td>
                    <td>
                      <textarea
                        required
                        onChange={handleChange}
                        name="cAdd"
                        cols="30"
                        rows="4"
                        style={{ resize: "none" }}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="cCity"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="cState"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>PINCODE</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="cPin"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile No</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="cMob"
                        type="text"
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <th style={{ textAlign: "start" }}>Permanent Address</th>
                  </tr>
                  <tr>
                    <td>Address Line</td>
                    <td>
                      <textarea
                        required
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
                      <input
                        required
                        onChange={handleChange}
                        name="pCity"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="pState"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>PINCODE</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="pPin"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile No</td>
                    <td>
                      <input
                        required
                        onChange={handleChange}
                        name="pMob"
                        type="text"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div>
              <h3 style={{ padding: "10px 50px" }}>Education</h3>
              <table className="feetable" border="1px">
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
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="sscb"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="sscs"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="sscy"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="sscm"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="sscp"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    12<sup>th</sup>/HSC
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="hscb"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="hscs"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="hscy"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="hscm"
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      onChange={handleChange}
                      name="hscp"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ padding: "10px 50px" }}>
              <div
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
              >
                <label style={{ fontSize: "large" }}>
                  Scanned copies of documents uploaded?
                  <p style={{ padding: "1px", margin: "0", fontSize: "12px" }}>
                    10<sup>th</sup> Marksheet / 12<sup>th</sup> Marksheet /
                    Aadhaar / Category Certificate / PWD Certificate / EWS (If
                    applicable)
                  </p>
                </label>
                &nbsp;
                <select
                  required
                  name="uploaded"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: "100px",
                    textAlign: "center",
                    height: "20px",
                  }}
                >
                  <option value="" label="Select" />
                  <option value="Yes" label="Yes" />
                  <option value="No" label="No" />
                </select>
              </div>
              <div
                className="subgrid"
                style={{ width: "50%", padding: "15px 0" }}
              >
                <label>
                  Whether suffering from any chronic disease: &nbsp;
                </label>
                <textarea
                  required
                  onChange={handleChange}
                  name="chronicD"
                  type="text"
                  cols="30"
                  rows="3"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
            <div style={{ padding: "10px 50px" }}>
              <h3>Declaration by the applicant:</h3>

              <p>
                <input
                  required
                  onChange={handleChange}
                  name="dec"
                  type="checkbox"
                />{" "}
                I certified that all information provided by me in this form is
                correct to the best of my knowledge and belief. I understand
                that any willful misrepresentation of facts will result in my
                dismissal from the Institute. If admitted,I shall abide by all
                rules and regulations of the Institute.
              </p>
              <h4>Upload our signature</h4>
              <div className="signdiv">
                <input
                  required
                  type="file"
                  onChange={handleChange}
                  name="sign"
                />
              </div>
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Admissions;
