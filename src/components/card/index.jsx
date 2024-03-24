import "./styles.css";

import { useState } from "react";
import Modal from "react-modal";

export const Card = ({ title, body, image, bodyStyle, hasModal }) => {
  const classe = bodyStyle == null ? "" : bodyStyle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const content =
    window.screen.width > 480
      ? {
          width: "50%",
          height: "80%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${image})`,
          color: "#fff",
          backgroundRepeat: "no-repeat",
          padding: "0",
          display: "grid",
          alignContent: "space-between",
          justifyItems: "end",
        }
      : {
          width: "90%",
          height: "70%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${image})`,
          color: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "0",
          display: "grid",
          alignContent: "space-between",
          justifyItems: "end",
        };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 100000,
    },
    content: content,
  };

  const openModal = () => {
    if (hasModal == null) return;
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName="modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
          className="modal-close"
          onClick={closeModal}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        <div className="modal-text">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Modal>
      <div className={"card " + classe} onClick={openModal}>
        <img src={image} alt={title} />
        <div className="grid-center">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};
