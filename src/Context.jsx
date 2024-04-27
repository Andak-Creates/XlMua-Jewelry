import { createContext, useContext, useState } from "react";

export const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [isAsideOpen, setAside] = useState(false);
  const [isCompClicked, setComp] = useState(false);
  const [linkId, setLinkId] = useState();
  const [isModalOpen, setModalStatus] = useState(false);

  const handleModal = () => {
    isModalOpen === false ? setModalStatus(true) : setModalStatus(false);
  };

  return (
    <MyContext.Provider
      value={{
        handleModal,
        isModalOpen,
        setModalStatus,
        isAsideOpen,
        setAside,
        setComp,
        isCompClicked,
        linkId,
        setLinkId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
