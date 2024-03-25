import AdminSideBar from "./AdminSideBar";
import "../../css/users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modifygifts() {
  let [gift, setGift] = useState(true);
  let nav=useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost/users/getgift", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("jwt"),
        },
      })
      .then((ev) => {
        if (ev.status == 200) {
          let data = ev.data;
          console.log(data);
          setGift(data);
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
          <h1>Modify Gifts</h1>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Sender id</th>
                <th>Receiver Name</th>
                <th>Gift</th>
                <th>Weight</th>
                <th>Description</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
              {gift === true ? (
                <td>Loading...</td>
              ) : gift.length == 0 ? (
                <td>No Gifts found</td>
              ) : (
                gift.map((val, ind) => {
                  return (
                    <>
                      <tr>
                        <td>{ind + 1}</td>
                        <td>{val.sid}</td>
                        <td>{val.rname}</td>
                        <td>{val.gift}</td>
                        <td>{val.weight}</td>
                        <td>{val.description}</td>
                        <td>{val.email}</td>
                        <td>{val.mobile}</td>
                        <td>
                          <button
                            onClick={() => {
                              nav("/admin/editgift/" + val.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={(ev) => {
                              console.log(val.id);
                              axios
                                .delete(
                                  "http://localhost/users/deletegift/" + val.id,
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
