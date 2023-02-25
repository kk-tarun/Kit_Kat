import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.containerr}>
      <div>
        {/* <h1>TimeTrackr</h1> */}
        <div className={styles.Home}>
          <Link to="/login" className={styles.loglink}>
            <button className="btn btn-primary btn-lg btn-block"> LogIn </button>
          </Link>{" "}
          <br />
          <br />{" "}
          <Link to="/signup" className={styles.signlink}>
            <button className="btn btn-outline-primary btn-lg btn-block">
              {" "}
              SignUp{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
