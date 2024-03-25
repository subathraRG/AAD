import Navbar from "./Navbar";
import "../css/sendgift.css";
import axios from "axios";

export default function SendGift() {
  function submit() {
    let data = {
      sid: JSON.parse(window.localStorage.getItem("profile")).id,
      rname: document.querySelectorAll("input")[0].value,
      gift: document.querySelectorAll("input")[1].value,
      weight: document.querySelectorAll("input")[2].value,
      description: document.querySelectorAll("input")[3].value,
      email: document.querySelectorAll("input")[4].value,
      mobile: document.querySelectorAll("input")[5].value,
    };
    // console.log(data);
    axios
      .post("http://localhost:8080/users/addgift", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("jwt"),
        },
      })
      .then((ev) => {
        console.log(ev);
        if (ev.status == 201) {
          alert("gift added");
        }
      })
      .catch((ev) => {
        alert("error occured", ev);
      });
  }

  return (
    <>
      <Navbar />
      <div
        onLoad={() => {
          window.location.reload();
        }}
        className="sendgift"
      >
        <div className="card">
          <div className="card-headerr">
            <h2>Gift Details</h2>
          </div>
          <div className="card-body">
            <form>
              <label htmlFor="name">Receiver Name:</label>
              <input type="text" id="name" name="name" required="" />
              <label htmlFor="gift">Gift:</label>
              <input type="text" id="gift" name="gift" required="" />
              <label htmlFor="weight">Weight:</label>
              <input type="text" id="weight" name="weight" required="" />
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required="" />
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" required="" />
            </form>
          </div>
          <div className="card-footer">
            <button
              onClick={() => {
                submit();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
