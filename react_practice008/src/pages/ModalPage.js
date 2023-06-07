import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(!showModal);

  return (
    <div className="relative">
      <Button onClick={handleClick} primary rounded>
        Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClick}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            expedita amet cum exercitationem ad aut ut odio eligendi fugiat
            veniam. Ex fugit quo nisi nemo debitis deleniti porro dicta eos?
          </p>
          <Button primary onClick={handleClick}>
            close
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
