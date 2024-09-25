import { FaCirclePlus } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";

function Actions({ addSlots , copySlots , fullDayShift }) {
  return (
    <>
       <div className="Availability-form__actions d-flex gap-3">
          <a className="Add-Slots" onClick={addSlots}>
            {/* <img src="../assets/availability-plus-icon 3.38.52 PM.svg" alt="" /> */}
            <FaCirclePlus />
          </a>
          <a className="Copy-Slots" onClick={copySlots}>
            {/* <img src="../assets/availability-copy-icon.svg" alt="" /> */}
            <IoCopy />
          </a>
          <a className="FullDayShift-Slots" onClick={fullDayShift}>
            {/* <img src="../assets/availability-clock-icon.svg" alt="" /> */}
            <Ri24HoursFill />
          </a>
        </div>
    </>
  )
}

export default Actions;
