import { Formik } from "formik";

const Feedback = () => {
  return (
    <div className="boddy">
      <h1 className="titlee">Student's Feedback Form</h1>

      <Formik
        initialValues={{
          AcYr: "",
          branch: "",
          Dof: "",
          Sem: "",
          Section: "",
          Sub: "",
          subCode: "",
          t1: "",
          t21: "",
          t22: "",
          t23: "",
          t24: "",
          t25: "",
          t3: "",
          t4: "",
          t5: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="subgrid">
                <label>Academic Year</label>
                <input
                  required
                  onChange={handleChange}
                  name="AcYr"
                  type="text"
                />
              </div>
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
                <label>Date of Feedback</label>
                <input
                  required
                  onChange={handleChange}
                  name="Dof"
                  type="date"
                />
              </div>
              <div className="subgrid">
                <label>Semester</label>
                <input
                  required
                  type="text"
                  onChange={handleChange}
                  name="Sem"
                />
              </div>
              <div className="subgrid">
                <label>Section</label>
                <input
                  required
                  type="text"
                  onChange={handleChange}
                  name="Section"
                />
              </div>
            </div>
            <div>
              <table border="1px" className="feedbacktable">
                <tr>
                  <th></th>
                  <th style={{ textAlign: "center" }}>Description</th>
                  <th>
                    <input
                      required
                      type="text"
                      placeholder="Subject"
                      onChange={handleChange}
                      name="Sub"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Subject Code"
                      onChange={handleChange}
                      name="subCode"
                    />
                  </th>
                </tr>
                <tr>
                  <td width="5%">1</td>

                  <td style={{ textAlign: "start", fontWeight: "normal" }}>
                    Has the Teacher covered entire Syllabus as prescribed by
                    University?
                  </td>
                  <td width="250px">
                    <select
                      required
                      name="t1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" label="Select any One" />
                      <option value="Excellent" label="Excellent" />
                      <option value="Very Good" label="Very Good" />
                      <option value="Good" label="Good" />
                      <option value="Average" label="Average" />
                      <option value="Below Average" label="Below Average" />
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <th
                    colSpan="3"
                    style={{
                      textAlign: "start",
                      fontWeight: "normal",
                      padding: "10px 4px",
                    }}
                  >
                    Effectiveness of Teacher in terms of
                    <table className="innerTable" border="1px">
                      <tr>
                        <td width="10%">2.1</td>
                        <td
                          style={{ textAlign: "start", fontWeight: "normal" }}
                        >
                          Technical content
                        </td>
                        <td>
                          <select
                            required
                            name="t21"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select any One" />
                            <option value="Excellent" label="Excellent" />
                            <option value="Very Good" label="Very Good" />
                            <option value="Good" label="Good" />
                            <option value="Average" label="Average" />
                            <option
                              value="Below Average"
                              label="Below Average"
                            />
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td width="10%">2.2</td>
                        <td
                          style={{ textAlign: "start", fontWeight: "normal" }}
                        >
                          Communication skills
                        </td>
                        <td width="250px">
                          <select
                            required
                            name="t22"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select any One" />
                            <option value="Excellent" label="Excellent" />
                            <option value="Very Good" label="Very Good" />
                            <option value="Good" label="Good" />
                            <option value="Average" label="Average" />
                            <option
                              value="Below Average"
                              label="Below Average"
                            />
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td width="10%">2.3</td>
                        <td
                          style={{ textAlign: "start", fontWeight: "normal" }}
                        >
                          Availability beyond normal classes and co-operation to
                          solve individual problems
                        </td>
                        <td>
                          <select
                            required
                            name="t23"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select any One" />
                            <option value="Excellent" label="Excellent" />
                            <option value="Very Good" label="Very Good" />
                            <option value="Good" label="Good" />
                            <option value="Average" label="Average" />
                            <option
                              value="Below Average"
                              label="Below Average"
                            />
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td width="10%">2.4</td>
                        <td
                          style={{ textAlign: "start", fontWeight: "normal" }}
                        >
                          Pace on which contents were covered
                        </td>
                        <td>
                          <select
                            required
                            name="t24"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select any One" />
                            <option value="Excellent" label="Excellent" />
                            <option value="Very Good" label="Very Good" />
                            <option value="Good" label="Good" />
                            <option value="Average" label="Average" />
                            <option
                              value="Below Average"
                              label="Below Average"
                            />
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td width="10%">2.5</td>
                        <td
                          style={{ textAlign: "start", fontWeight: "normal" }}
                        >
                          Overall effectiveness
                        </td>
                        <td>
                          <select
                            required
                            name="t25"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" label="Select any One" />
                            <option value="Excellent" label="Excellent" />
                            <option value="Very Good" label="Very Good" />
                            <option value="Good" label="Good" />
                            <option value="Average" label="Average" />
                            <option
                              value="Below Average"
                              label="Below Average"
                            />
                          </select>
                        </td>
                      </tr>
                    </table>
                  </th>
                </tr>
                <tr>
                  <td>3</td>

                  <td style={{ textAlign: "start", fontWeight: "normal" }}>
                    How do you rate the contents of the curricular ?
                  </td>
                  <td>
                    <select
                      required
                      name="t3"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" label="Select any One" />
                      <option value="Excellent" label="Excellent" />
                      <option value="Very Good" label="Very Good" />
                      <option value="Good" label="Good" />
                      <option value="Average" label="Average" />
                      <option value="Below Average" label="Below Average" />
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>4</td>

                  <td style={{ textAlign: "start", fontWeight: "normal" }}>
                    How do you rate lab experiments, if applicable?
                  </td>
                  <td width="200px">
                    <select
                      required
                      name="t4"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" label="Select any One" />
                      <option value="Excellent" label="Excellent" />
                      <option value="Very Good" label="Very Good" />
                      <option value="Good" label="Good" />
                      <option value="Average" label="Average" />
                      <option value="Below Average" label="Below Average" />
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>5</td>

                  <td style={{ textAlign: "start", fontWeight: "normal" }}>
                    Any Remarks
                  </td>
                  <td>
                    <textarea
                      required
                      onChange={handleChange}
                      name="t5"
                      cols="30"
                      rows="3"
                      style={{ resize: "none" }}
                    ></textarea>
                  </td>
                </tr>
              </table>
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

export default Feedback;
