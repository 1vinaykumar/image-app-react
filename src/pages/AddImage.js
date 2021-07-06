import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddImage() {
  const [imgName, setImgName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [imgDetails, setImgDetails] = useState("");
  const history = useHistory();

  return (
    <div className="container">
      <form
        className="row form-group justify-content-center my-5"
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(process.env.REACT_APP_API_URL, {
              imgName,
              imgURL,
              imgDetails,
            })
            .then((response) => {
              if (response.status === 200) {
                history.push("/");
              }
            })
            .catch((error) => {});
        }}
      >
        <div className="col-10 col-md-7 my-2">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={imgName}
            required
            onChange={(event) => setImgName(event.target.value)}
          />
        </div>
        <div className="col-10 col-md-7 my-2">
          <label className="form-label">URL</label>
          <input
            className="form-control"
            value={imgURL}
            required
            type="url"
            onChange={(event) => setImgURL(event.target.value)}
          />
        </div>
        <div className="col-10 col-md-7 my-2">
          <label className="form-label">Details</label>
          <textarea
            className="form-control"
            value={imgDetails}
            required
            onChange={(event) => setImgDetails(event.target.value)}
          />
        </div>

        <div className="col-10 col-md-7 my-2">
          <button
            className="btn btn-primary my-3 w-100"
            disabled={imgName === "" || imgURL === "" || imgDetails === ""}
            type="submit"
          >
            Submit
          </button>
          <button
            className="btn btn-warning my-3 w-100"
            type="reset"
            onClick={() => {
              setImgName("");
              setImgURL("");
              setImgDetails("");
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddImage;
