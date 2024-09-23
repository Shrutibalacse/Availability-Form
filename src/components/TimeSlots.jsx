import { RxCross2 } from "react-icons/rx";

function TimeSlots() {
  return (
    <>
      <div className="Availability-form__Timeslots d-flex gap-3">
        <div className="Start-time">
          <input type="time" className="" name="" id="" />
        </div>
        <div className="End-time">
          <input type="time" className="" name="" id="" />
        </div>
        <div className="Delete-Slots">
          <RxCross2 />
        </div>
      </div>
    </>
  );
}

export default TimeSlots;
