import React from "react";
import { myComponents } from "./Tools";
import { useMyContext } from "../Context";

const Aside = () => {
  const { isAsideOpen, setAside, linkId, setLinkId } = useMyContext();

  const handleLinks = (compId) => {
    const checkbox = document.querySelector(".hamburger input[type=checkbox]");
    if (checkbox) {
      checkbox.checked = false;
    }
    const clickedComp = myComponents.map((comp) => {
      window.scrollTo({
        top: "0",
        behavior: "instant",
      });
      if (comp.id === compId) {
        setLinkId(compId);
      } else {
        return;
      }

      isAsideOpen == false ? setAside(true) : setAside(false);
    });
  };
  return (
    <div
      className="aside"
      style={isAsideOpen == false ? { bottom: "100%" } : { bottom: "0" }}
    >
      <div className="mediaComp">
        {myComponents &&
          myComponents.map((comp) => (
            <a onClick={() => handleLinks(comp.id)} key={comp.id}>
              {comp.name}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Aside;
