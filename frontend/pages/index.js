import Admissions from "./admissions.js";
import Feedback from "./feedback.js";

import Link from "next/link";

const Home = () => {
  return (
    <div height="100vh">
      <div style={{ width: "60%", margin: "100px auto" }}>
        <h1 style={{ textAlign: "center" }}>DBMS Project</h1>
        <div
          style={{ fontSize: "large", fontWeight: "bold", margin: "100px 0" }}
        >
          <ul type="none">
            <li>
              <Link href="/admissions">Admissions</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Project by</h4>
          <ol>
            <li>Jatin Chhangani BT19CSE002</li>
            <li>Hemanshu Chaudhari BT19CSE056</li>
            <li>Parth Jha BT19CSE076</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
