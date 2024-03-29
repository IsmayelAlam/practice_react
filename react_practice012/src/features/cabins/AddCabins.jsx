// import { useState } from "react";

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// export default function AddCabins() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Button onClick={setIsOpen.bind(null, !isOpen)}>Add new Cabin</Button>
//       {isOpen && (
//         <Modal onClose={setIsOpen.bind(null, !isOpen)}>
//           <CreateCabinForm onClose={setIsOpen.bind(null, !isOpen)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default function AddCabins() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}
