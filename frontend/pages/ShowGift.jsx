import Navbar from "./Navbar";
import "../css/showgift.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowGift() {
  let [gift, setGift] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users/getgift", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("jwt"),
        },
      })
      .then((ev) => {
        if (ev.status == 200) {
          let data = ev.data;
          let id = JSON.parse(window.localStorage.getItem("profile")).id;
          let show = data.filter((val) => {
            console.log(val);
            return val.sid == id;
          });
          console.log(show);
          setGift(show);
        }
      })
      .catch((er) => {
        alert(er);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Your Gifts</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
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
              gift.map((val) => {
                return (
                  <>
                    <tr>
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
            {}
            {/* <tr>
              <td data-th="Supplier Code">UPS3449</td>
              <td data-th="Supplier Name">UPS South Inc.</td>
              <td data-th="Invoice Number">ASDF29301</td>
              <td data-th="Invoice Date">6/24/2016</td>
              <td data-th="Due Date">12/25/2016</td>
              <td data-th="Net Amount">$3,255.49</td>
            </tr>
            <tr>
              <td data-th="Supplier Code">BOX5599</td>
              <td data-th="Supplier Name">BOX Pro West</td>
              <td data-th="Invoice Number">ASDF43000</td>
              <td data-th="Invoice Date">6/27/2016</td>
              <td data-th="Due Date">12/25/2016</td>
              <td data-th="Net Amount">$45,255.49</td>
            </tr>
            <tr>
              <td data-th="Supplier Code">PAN9999</td>
              <td data-th="Supplier Name">Pan Providers and Co.</td>
              <td data-th="Invoice Number">ASDF33433</td>
              <td data-th="Invoice Date">6/29/2016</td>
              <td data-th="Due Date">12/25/2016</td>
              <td data-th="Net Amount">$12,335.69</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
