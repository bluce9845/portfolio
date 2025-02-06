import React, { useEffect, useState } from "react";

const DeviceCheck = ({ children }) => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent);
    setIsLaptop(!isMobile);
  }, []);

  return isLaptop ? children : <h1>Akses hanya diperbolehkan di laptop/desktop</h1>;
};

export default DeviceCheck;
