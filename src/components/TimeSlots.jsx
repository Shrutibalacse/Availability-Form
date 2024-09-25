import { RxCross2 } from "react-icons/rx";

function TimeSlots({ deleteSlots , handleSlots , slot }) {

  function handleStartTime(event) {
    handleSlots(slot.id, {startTime: event.target.value})
  }
  function handleEndTime(event) {
    handleSlots(slot.id, {endTime: event.target.value})
  }

  return (
    <>
      <div className="Availability-form__slot d-flex gap-3" id={slot.id}>
        <div className="Start-time">
          <input type="time" value={slot.startTime} onChange={handleStartTime} />
        </div>
        <div className="End-time">
          <input type="time" value={slot.endTime} onChange={handleEndTime} />
        </div>
        <a className="Delete-Slots" onClick={deleteSlots}>
          <RxCross2 />
        </a>
      </div>
    </>
  );
}

export default TimeSlots;
