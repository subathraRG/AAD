import AdminSideBar from "./AdminSideBar";
import "../../css/users.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Gifts() {
  let [gift, setGift] = useState(true);
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
          <h1>All Gifts</h1>
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
              </tr>
              {gift === true ? (
                <td>Loading...</td>
              ) : gift.length == 0 ? (
                <td>No gifts found</td>
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
