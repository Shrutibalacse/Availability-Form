import { FaCirclePlus } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";

function Actions() {
  return (
    <>
       <div className="Availability-form__actions d-flex gap-3">
          <div className="Add-Slots">
            {/* <img src="./assets/availability-plus-icon 3.38.52 PM.svg" alt="" /> */}
            <FaCirclePlus />
          </div>
          <div className="Copy-Slots">
            {/* <img src="./assets/availability-copy-icon.svg" alt="" /> */}
            <IoCopy />
          </div>
          <div className="FullDayShift-Slots">
            {/* <img src="./assets/availability-clock-icon.svg" alt="" /> */}
            <Ri24HoursFill />
          </div>
        </div>
    </>
  )
}

export default Actions;
