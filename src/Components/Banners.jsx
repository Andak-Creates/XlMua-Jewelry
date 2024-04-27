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

      <a href="https://wa.me/message/GR6HXD6GV350B1" className="whatsAppBanner">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default Banners;
