import AdminSideBar from "./AdminSideBar";
import "../../css/users.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  let [user, setUser] = useState(true);
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
          let data = ev.data;
          console.log(data);
          setUser(data);
        }
      })
      .catch((er) => {
        alert(er);
      });
  }, []);
  return (
    <>
      <AdminSideBar />
      <div className="move">
        <div className="container">
          <h1>All Users</h1>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>UID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
              </tr>

              {user === true ? (
                <td>Loading...</td>
              ) : user.length == 0 ? (
                <td>No gifts found</td>
              ) : (
                user.map((val, ind) => {
                  return (
                    <>
                      <tr>
                        <td>{ind + 1}</td>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.mobile}</td>
                        <td>{val.role}</td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
