import React, { useEffect } from "react";

export default function useListenNetworkError() {
  //hook listerNetworkError is used to listen network error

  const [status, setStatus] = React.useState(null);
  console.log("statdasdsadasdaus: ", status);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setStatus("offline");
    });
    window.addEventListener("online", (event) => {
      setStatus("online");
      console.log("adsasda");
    });
  }, []);

  return status;
}
