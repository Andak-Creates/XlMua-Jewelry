import React from "react";
import { jewelries } from "./Tools";
import { useMyContext } from "../Context";
import { myComponents } from "./Tools";

const Body = () => {
  const { linkId, setLinkId, isModalOpen, setModalStatus, handleModal } =
    useMyContext();

  return (
    <div className="body">
      {linkId == null ? (
        <div className="innerBody">
          <img src="AP-men1.jpg" className="image" alt="" />
          <div className="hero">
            <h2>Quality Over Quantity</h2>
            <button onClick={handleModal}>Contact Us!</button>
          </div>

          <div className="itemSection">
            <div className="innerSection">
              <h3>BEST SELLERS</h3>
              <div className="bestSeller">
                {window.innerWidth < 900
                  ? jewelries &&
                    jewelries
                      .map((item, idx) => (
                        <div className="best" key={idx}>
                          <img src={item.img} alt="" />
                          <p>{item.name}</p>
                        </div>
                      ))
                      .slice(0, 6)
                  : jewelries &&
                    jewelries.map((item, idx) => (
                      <div className="best" key={idx}>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="thecomp">
          {myComponents.map((comp, idx) =>
            comp.id == linkId ? (
              <div className="innerComp" key={idx}>
                <h2 style={{ textAlign: "center", margin: 20 }}>{comp.name}</h2>
                <div className="itemHolder" key={idx}>
                  {comp.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="item"
                      title="contact us for more information about item"
                    >
                      <img src={item.img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      )}

      <div
        className="contactModal"
        style={
          isModalOpen === true ? { display: "block" } : { display: "none" }
        }
      >
        <div className="cancelBtn" onClick={handleModal}>
          <i className="bi bi-x-lg"></i>
        </div>
        <div className="modal">
          <div className="innerModal">
            <h2>Contact Us</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              voluptates delectus voluptate qui iusto dignissimos ratione eius
              nemo deserunt quibusdam.
            </p>

            <div className="modalLinks">
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a href="">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
