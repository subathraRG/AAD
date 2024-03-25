import Navbar from "./Navbar";
import "../css/profile.css";

export default function Profile() {
  let data = JSON.parse(window.localStorage.getItem("profile"));
  return (
    <>
      <Navbar />
      <div className="card" data-state="#about">
        <div className="card-header">
          <div
            className="card-cover"
            style={{
              backgroundImage: 'url("https://random.imagecdn.app/500/150")',
            }}
          />
          <img
            className="card-avatar"
            src="https://random.imagecdn.app/500/150"
            alt="avatar"
          />
          <h1 className="card-fullname">{data.name}</h1>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">
                <h3>Email</h3>
                <h4>{data.email}</h4>
              </div>
              <div className="card-subtitle">
                <h3>Mobile</h3>
                <h4>{data.mobile}</h4>
              </div>
              <div className="card-subtitle">
                <h3>Role</h3>
                <h4>{data.role}</h4>
              </div>
              <div className="card-subtitle">
                <h3>UID</h3>
                <h4>{data.id}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
