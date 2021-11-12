import { Formik } from "formik";

const Feedback = () => {
  return (
    <div className="boddy">
      <h2>Student's Feedback Form</h2>

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
                <input onChange={handleChange} name="AcYr" type="text" />
              </div>
              <div className="subgrid">
                <label>Branch</label>
                <input onChange={handleChange} name="branch" type="text" />
              </div>
              <div className="subgrid">
                <label>Date of Feedback</label>
                <input onChange={handleChange} name="Dof" type="text" />
              </div>
              <div className="subgrid">
                <label>Semester</label>
                <input type="text" onChange={handleChange} name="Sem" />
              </div>
              <div className="subgrid">
                <label>Section</label>
                <input type="text" onChange={handleChange} name="Section" />
              </div>
            </div>
            <div>
              <table border="1px">
                <tr>
                  <th></th>
                  <th>Description</th>
                  <th>
                    <input
                      type="text"
                      placeholder="Subject"
                      onChange={handleChange}
                      name="Sub"
                    />
                    <input
                      type="text"
                      placeholder="Subject Code"
                      onChange={handleChange}
                      name="subCode"
                    />
                  </th>
                </tr>
                <tr>
                  <td width="10%">1</td>

                  <td>
                    Has the Teacher covered entire Syllabus as prescribed by
                    University?
                  </td>
                  <td width="200px">
                    <select
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
                  <th colspan="3">
                    Effectiveness of Teacher in terms of
                    <table width="100%" border="1px">
                      <tr>
                        <td width="10%">2.1</td>
                        <td>Technical content</td>
                        <td width="200px">
                          <select
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
                        <td>Communication skills</td>
                        <td width="200px">
                          <select
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
                        <td>
                          Availability beyond normal classes and co-operation to
                          solve individual problems
                        </td>
                        <td width="200px">
                          <select
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
                        <td>Pace on which contents were covered</td>
                        <td width="200px">
                          <select
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
                        <td>Overall effectiveness</td>
                        <td width="200px">
                          <select
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

                  <td>How do you rate the contents of the curricular ?</td>
                  <td>
                    <select
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

                  <td>How do you rate lab experiments, if applicable?</td>
                  <td width="200px">
                    <select
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

                  <td>Any Remarks</td>
                  <td width="200px">
                    <input type="text" name="t5" onChange={handleChange} />
                  </td>
                </tr>
              </table>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Feedback;
