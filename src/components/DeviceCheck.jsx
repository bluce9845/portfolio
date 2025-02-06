import React, { useEffect, useState } from "react";
import "../css/ErrorPage.css";
import { PiSmileyXEyesFill } from "react-icons/pi";

const DeviceCheck = ({ children }) => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent);
    setIsLaptop(!isMobile);
  }, []);

  return isLaptop ? (
    children
  ) : (
    <div class="error-page d-flex align-items-center justify-content-center">
      <div class="error-container text-center p-4">
        <h1 class="error-code mb-0">
          <PiSmileyXEyesFill />
        </h1>
        <h2 class="display-6 error-message mb-3">Page Not Found</h2>
        <p class="lead error-message mb-5">Not accessible on mobile, only accessible on desktop!</p>
        <div class="d-flex justify-content-center gap-3">
          <a href="#" class="btn btn-glass px-4 py-2">
            Report Problem
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeviceCheck;
