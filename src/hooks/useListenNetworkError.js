import React, { useEffect } from "react";

export default function useListenNetworkError() {
  //hook listerNetworkError is used to listen network error
  const [status, setStatus] = React.useState(null);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setStatus("offline");
    });
    window.addEventListener("online", (event) => {
      setStatus("online");
    });
  }, []);

  return status;
}
