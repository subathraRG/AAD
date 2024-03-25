import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/adminsidebar.css";

export default function AdminSideBar() {
  useEffect(() => {
    console.clear();

    const nav = document.getElementById("side-nav");
    const showNavBtn = document.getElementById("show-nav");
    const container = document.getElementById("container");
    const navWidth = 15; // rems
    const navGutter = 1;

    nav.addEventListener("click", (event) => {
      if (event.target.classList.contains("sub-menu-link")) {
        event.target.classList.toggle("active");
        const subMenu = event.target.nextElementSibling;
        subMenu.classList.toggle("active");
      }
    });

    showNavBtn.addEventListener(
      "click",
      (event) => {
        if (nav.style.left !== "0px") {
          showNavBtn.classList.toggle("open");
          nav.classList.toggle("open");
          container.classList.toggle("nav-open");
          document.body.style.overflow = "hidden";
        } else {
          showNavBtn.classList.toggle("open");
          nav.classList.toggle("open");
          container.classList.toggle("nav-open");
          document.body.style.overflow = "auto";
        }
      },
      nav
    );
  }, []);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <nav id="side-nav" className="open">
        <ul>
          <Link className="rrd" to={"/"}>
            <li>
              <a href="#">Home </a>
            </li>
          </Link>
          {/* <Link className="rrd" to={"/admin/profile"}>
            <li>
              <a href="#">Profile</a>
            </li>
          </Link> */}
          {/* <li>
            <a href="#">Users </a>
          </li> */}
          <li className="sub-menu-link">
            <a href="#">DB</a>
          </li>
          <ul className="side-nav-sub-menu">
            <Link className="rrd" to={"/admin/users"}>
              <li>
                <a href="#">Users</a>
              </li>
            </Link>
            <Link className="rrd" to={"/admin/gifts"}>
              <li>
                <a href="#">Gifts</a>
              </li>
            </Link>
          </ul>
          <li className="sub-menu-link">
            <a href="#">Modify</a>
          </li>
          <ul className="side-nav-sub-menu">
            <Link className="rrd" to={"/admin/modifyusers"}>
              <li>
                <a href="#">Users</a>
              </li>
            </Link>
            <Link className="rrd" to={"/admin/modifygifts"}>
              <li>
                <a href="#">Gifts</a>
              </li>
            </Link>
          </ul>
          <Link className="rrd" to={"/signin"}>
            <li>
              <a href="#">Log Out</a>
            </li>
          </Link>
        </ul>
        <span id="show-nav">
          {/* <i className="material-icons">arrow_forward</i> */}
        </span>
      </nav>
      {/* <div className="welcome">
        <h1>
          Welcome{" "}
          {JSON.parse(window.localStorage.getItem("profile")).name || "name"}
        </h1>
      </div> */}
    </>
  );
}
