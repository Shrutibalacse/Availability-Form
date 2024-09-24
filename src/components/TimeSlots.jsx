import { RxCross2 } from "react-icons/rx";

function TimeSlots({ deleteSlots }) {
  return (
    <>
      <div className="Availability-form__slot d-flex gap-3">
        <div className="Start-time">
          <input type="time" className="" name="" id="" />
        </div>
        <div className="End-time">
          <input type="time" className="" name="" id="" />
        </div>
        <a className="Delete-Slots" onClick={deleteSlots}>
          <RxCross2 />
        </a>
      </div>
    </>
  );
}

export default TimeSlots;
