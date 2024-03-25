import AdminSideBar from "./AdminSideBar";
import "../../css/users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modifyusers() {
  let nav = useNavigate();

  let [user, setUser] = useState(true);
  // let [user, setUser] = useState([
  //   {
  //     id: 6,
  //     name: "testtest",
  //     email: "test",
  //     password: "$2a$10$YuTHiT4U1WAK8djGIjy56OH2DYpvcr3DGDoMbUTDm6uJCBmOax/oi",
  //     mobile: "test",
  //     role: "admin",
  //   },
  //   {
  //     id: 7,
  //     name: "bb",
  //     email: "b",
  //     password: "$2a$10$bLpQc6ahjZOMytBKhYKGZ.4NXVKLLxPsacnW0i81vhlUmFIWt0znC",
  //     mobile: "b",
  //     role: "user",
  //   },
  //   {
  //     id: 8,
  //     name: "demodemo",
  //     email: "demo",
  //     password: "$2a$10$DpAQFNIPM103rNTonOfMPONg7YZZ72MNh8cH/9QftD3HSO.QLDKWW",
  //     mobile: "demo",
  //     role: "user",
  //   },
  //   {
  //     id: 9,
  //     name: "cc",
  //     email: "c",
  //     password: "$2a$10$.KZttVcms.aQEYxScz/7FujwiSNbcNc1DXwuO4xGuXvEOp5hsfCYe",
  //     mobile: "c",
  //     role: "user",
  //   },
  // ]);

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
          <h1>Modify Users</h1>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>UID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
              {user === true ? (
                <td>Loading...</td>
              ) : user.length == 0 ? (
                <td>No Users found</td>
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
                        <td>
                          <button
                            onClick={() => {
                              nav("/admin/edituser/" + val.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={(ev) => {
                              console.log(val.id);
                              axios
                                .delete(
                                  "http://localhost/users/deleteuser/" + val.id,
                                  {
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization:
                                        "Bearer " +
                                        window.localStorage.getItem("jwt"),
                                    },
                                  }
                                )
                                .then((ev) => {
                                  console.log(ev);
                                  if (ev.status == 204) {
                                    window.location.reload();
                                  }
                                })
                                .catch((er) => {
                                  alert(er);
                                });
                            }}
                          >
                            Delete
                          </button>
                        </td>
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
