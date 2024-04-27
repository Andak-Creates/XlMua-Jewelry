import React, { useEffect, useState } from "react";
import { myComponents } from "./Tools";
import { useMyContext } from "../Context";
import Aside from "./Aside";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const { isAsideOpen, setAside, linkId, setLinkId } = useMyContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrolledDown || currentScrollPos < 200);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleLinks = (compId) => {
    const clickedComp = myComponents.map((comp) => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      if (comp.id === compId) {
        setLinkId(compId);
      } else {
        return;
      }
    });
  };

  const openAside = () => {
    isAsideOpen == false ? setAside(true) : setAside(false);
  };

  return (
    <>
      <div
        className="Nav"
        style={isVisible ? { height: "auto" } : { height: 0, padding: 0 }}
      >
        <div className="title">
          <h2>XL Mua & Jewelry</h2>
        </div>

        <label className="hamburger">
          <input type="checkbox" onClick={openAside} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        <div className="components">
          {myComponents &&
            myComponents.map((comp) => (
              <p
                className={comp.id == linkId ? "active" : ""}
                onClick={() => handleLinks(comp.id)}
                key={comp.id}
              >
                {comp.name}
              </p>
            ))}
        </div>
      </div>
      <Aside />
    </>
  );
};

export default NavBar;
