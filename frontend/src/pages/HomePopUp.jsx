import { useState } from "react";
import PopUpToast from "@components/PopUpToast";

export default function Home() {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div>
      {/* clique sur l'image ouvre le popUp */}
      {openPopUp && <PopUpToast closePopUp={setOpenPopUp} />}
      <img
        src="./src/assets/buttons/addToast.png"
        alt="Add your mood "
        onClick={() => {
          setOpenPopUp(true);
        }}
        aria-hidden="true"
        className="openPopUp addButton"
        width="50rem"
        height="50rem"
      />
    </div>
  );
}