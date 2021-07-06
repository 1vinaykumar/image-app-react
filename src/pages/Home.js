import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppState } from "../App";

export const ImageContainer = ({ image, link }) => {
  return (
    <div className={`col-12 ${link ? "col-md-3 card" : ""} m-2`}>
      <div className="card-body">
        <h3 className="card-text">{image?.imgName}</h3>
        <figure className="figure">
          {link ? (
            <NavLink to={`/show/${image?.id}`}>
              {/* eslint-disable-next-line */}
              <img
                src={image?.imgURL}
                alt={image?.imgName}
                className="figure-img rounded col-12"
                height="240"
              />
            </NavLink>
          ) : (
            /* eslint-disable-next-line */
            <img
              src={image?.imgURL}
              alt={image?.imgName}
              className="figure-img rounded col-12"
              style={{ height: "60vh", width: "80vw" }}
            />
          )}

          <figcaption className="figure-caption">
            {image?.imgDetails}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

function Home() {
  const [state, setState] = useAppState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => setState({ images: response.data }))
      .catch((error) => setState({ images: [] }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row justify-content-center mx-5">
      {state?.images?.length > 0 ? (
        state?.images?.map?.((image) => (
          <ImageContainer key={image?.id} image={image} link />
        ))
      ) : (
        <h3 className="my-5 text-center text-warning">No Images</h3>
      )}
    </div>
  );
}

export default Home;
