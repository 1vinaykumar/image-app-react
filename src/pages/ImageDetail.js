import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../App";
import { ImageContainer } from "./Home";

function ImageDetail() {
  const [state, setState] = useAppState();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  useEffect(() => {
    const imageFromState = state?.images?.find(
      (item) => item.id === Number(id)
    );
    console.log(image, state, id);
    if (imageFromState) {
      setImage(imageFromState);
    } else {
      axios
        .get(process.env.REACT_APP_API_URL)
        .then((response) => {
          setState({ images: response.data });
          console.log(response.data);
          setImage(response.data?.find((item) => item.id === Number(id)));
        })
        .catch((error) => setState({ images: [] }));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {image ? (
        <ImageContainer image={image} />
      ) : (
        <h3 className="text-center my-5">Loading..</h3>
      )}
    </div>
  );
}

export default ImageDetail;
