import AdminSideBar from "./admin/AdminSideBar";

export default function Admin() {
  return (
    <>
      <>
        <AdminSideBar />
        <div
          className="move"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:"100vh"
          }}
        >
          <h1>Welcome Admin</h1>
        </div>
      </>
    </>
  );
}
