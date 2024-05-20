export default function Download() {
  const downloadButton = async () => {
    const response = await fetch("../api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    console.log(await response.json());
  };
  return (
    <div className="container-fluid">
      <div className="row mt-0 justify-content-center mh-100">
        <div
          className="col-10 col-lg-11 mh-100"
          style={{ backgroundColor: "red" }}
        >
          red!
        </div>
      </div>
    </div>
  );
}
