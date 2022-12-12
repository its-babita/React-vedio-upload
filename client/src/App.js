import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import UploadsList from "./components/UploadsList";
import { BACKEND_URI } from "./config/constants";

const App = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened");
      });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
          <div className="card-body">
            <UploadForm getAllMedias={getAllMedias} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
          <div className="card-body">
            <UploadsList medias={medias} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
