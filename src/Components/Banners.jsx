import React from "react";
import { useMyContext } from "../Context";

const Banners = () => {
  const { linkId, setLinkId, isModalOpen, setModalStatus, handleModal } =
    useMyContext();
  const backToHome = () => {
    setLinkId();
    window.scrollTo({
      top: "0",
      behavior: "instant",
    });
  };
  return (
    <div className="banners">
      {linkId == null ? (
        ""
      ) : (
        <div className="homeBanner" onClick={backToHome}>
          <i className="bi bi-house-fill"></i>
        </div>
      )}

      <div className="contactBanner" onClick={handleModal}>
        <i className="bi bi-telephone-outbound-fill"></i>
        <i className="bi bi-telephone-fill"></i>
      </div>
    </div>
  );
};

export default Banners;
