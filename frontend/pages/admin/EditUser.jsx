import { useNavigate } from "react-router-dom";
import "../../css/edituser.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditUser() {
  let id = window.location.href.split("/")[5];
  console.log(id);
  let nav = useNavigate();
  let [data, setData] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost/users/getuser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("jwt"),
        },
      })
      .then((ev) => {
        if (ev.status == 200) {
          let values = ev.data;
          let value = values.filter((val) => val.id == id);
          console.log(value);
          setData(value);
        }
      })
      .catch((er) => {
        alert(er);
      });
  }, []);

  return (
    <>
      {data === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div id="entry-form">
            <h1>Edit User</h1>

            <label htmlFor="first-name">Name</label>
            <fieldset>
              <input
                type="text"
                id="fName"
                placeholder={data[0].name}
                defaultValue={data[0].name}
              />
            </fieldset>
            <label htmlFor="email-address">Email Address</label>
            <fieldset>
              <input
                type="text"
                id="eAddress"
                placeholder={data[0].email}
                defaultValue={data[0].email}
              />
            </fieldset>
            <label htmlFor="mobile-number">Mobile Number</label>
            <fieldset>
              <input
                type="text"
                id="busName"
                placeholder={data[0].mobile}
                defaultValue={data[0].mobile}
              />
            </fieldset>

            {/* SUBMIT BUTTON */}
            <div style={{ display: "flex" }}>
              <input
                style={{ margin: "1em" }}
                className="button"
                type="submit"
                defaultValue="Update"
                onClick={() => {
                  let name = document.querySelectorAll("input")[0].value;
                  let email = document.querySelectorAll("input")[1].value;
                  let mobile = document.querySelectorAll("input")[2].value;
                  let updated = { ...data[0], name, email, mobile };
                  console.log(updated);
                  axios
                    .put("http://localhost/users/updateuser/" + id, updated, {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Bearer " + window.localStorage.getItem("jwt"),
                      },
                    })
                    .then((ev) => {
                      if (ev.status == 200) {
                        nav("/admin/users");
                      }
                    })
                    .catch((er) => {
                      alert(er);
                    });
                }}
              />
              <input
                onClick={() => {
                  console.log("cli");
                  nav("/admin/modifyusers");
                }}
                style={{ margin: "1em" }}
                className="button"
                type="submit"
                value={"Cancel"}
                defaultValue="Cancel"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
