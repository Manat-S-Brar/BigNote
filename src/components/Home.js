import React from "react";
import { NavLink } from "react-router-dom";
import pencil from "./pencil.png";
import td from "./to-do-list.png";

function Home() {
  // const [url1, setUrl] = useState(
  //   "https://images.pexels.com/photos/3361483/pexels-photo-3361483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  // );

  // function handleUrl() {
  //   setUrl(
  //     `https://source.unsplash.com/collection/4723208/1280x${
  //       Math.floor(Math.random() * 722) + 720
  //     }`
  //   );
  // }
  // setInterval(handleUrl, 10000);
  return (
    <>
      <div
        className="home"
        // style={{
        //   background: "url(" + url1 + ") center center/cover no-repeat",
        // }}
      >
        {/* <img
          src="https://images.pexels.com/photos/3361483/pexels-photo-3361483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
        <h1 className="text-light text-center">NOTE IT OUT</h1>
        <p className="text-light text-center">What are you waiting for?</p>
        <span>
          <a href="#ab">
            <i className="fas fa-chevron-down"></i>
          </a>
        </span>
      </div>
      <div className="about text-center bg-dark" id="ab">
        <h1 className="text-light">About Us</h1>
        <p className="text-light">
          We provide the best service to keep yourself arranged and up-to-date
          with your ever-active life and activities.Our services include a Notes
          Panel and a To-Do-List Panel with versatile functions which you always
          needed
        </p>
      </div>
      <div className="services text-center " id="ab">
        <h1>Our Services</h1>
        <span className="row">
          <span className="col-sm-12 col-md-6 ">
            <NavLink
              to="/notes"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <img src={pencil} alt="" width="20%" className="pb-4" />

              <br />
              <p style={{ color: "#FF9900", fontWeight: "bolder" }}>
                NOTES PANEL
              </p>
            </NavLink>
            <p
              style={{ width: "30%", margin: "0 auto", paddingBottom: "100px" }}
            >
              Note down important things here
            </p>
          </span>
          <span className="col-sm-12 col-md-6 ">
            <NavLink
              to="/todo"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <img src={td} alt="" width="20%" className="pb-4" />
              <br />
              <p style={{ color: "#FF9900", fontWeight: "bolder" }}>
                TO-DO-LIST
              </p>
            </NavLink>
            <p
              style={{ width: "30%", margin: "0 auto", paddingBottom: "100px" }}
            >
              Make sure your list is upto mark!
            </p>
          </span>
        </span>
      </div>
    </>
  );
}

export default Home;
