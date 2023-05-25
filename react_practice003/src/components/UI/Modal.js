import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}>
    {props.children}
  </div>
);
const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElement = document.querySelector("#overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
