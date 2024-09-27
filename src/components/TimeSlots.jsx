import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

function TimeSlots({ deleteSlots, handleSlots, slot , addSlotsList }) {
  const [error, setError] = useState({}); 

  function handleStartTime(event) { // handles start time when input value changes
    const startTime = event.target.value;
    const { endTime } = slot; // fetches endTime from slots
    handleSlots(slot.id, { startTime });
    
    validateTimeSlot(startTime, endTime);  
  }

  function handleEndTime(event) {
    const endTime = event.target.value;
    const { startTime } = slot;
    handleSlots(slot.id, { endTime });

    validateTimeSlot(startTime, endTime);  
  }

  function validateTimeSlot(startTime, endTime) {
    let errorMessages = {};
    if (!startTime) {
      errorMessages.startTimeError = "Required";
    }
    else if (!endTime) {
      errorMessages.endTimeError = "Required";
    } 
    else if (startTime > endTime) {
      errorMessages.startTimeError = "Start time must be less than end time.";
      errorMessages.endTimeError = "End time must be greater than start time"
    } 
    else if (endTime === startTime) {
      errorMessages.endTimeError = "Start and End  time both cann't be same"
    }
    else {
      const isOverlapping = addSlotsList.some((existingSlot) => {
        if (existingSlot.id === slot.id) return false; // skipping the editing slot

        return (
          (startTime < existingSlot.endTime && endTime > existingSlot.startTime)
        );
      });

      if (isOverlapping) {
        errorMessages.startTimeError = "Time slot overlaps with another slot.";
        errorMessages.endTimeError = "Time slot overlaps with another slot.";
      }
    }
    setError(errorMessages);  
  }

  useEffect(() => {
    const { startTime, endTime } = slot;
    validateTimeSlot(startTime, endTime);  
  }, [slot.startTime, slot.endTime]); // trigger validation automatically in real time

  return (
    <>
      <div className="Availability-form__slot d-flex gap-3" id={slot.id}>
        <div className="Start-time">
          <input 
            type="time" 
            name="startTime" 
            value={slot.startTime} 
            onChange={handleStartTime} 
          />
          {/* {error.required && <p className="formError">{error.required}</p>}  */}
          {error.startTimeError && <p className="formError">{error.startTimeError}</p>}  
        </div>
        <div className="End-time">
          <input 
            type="time" 
            name="endTime" 
            value={slot.endTime} 
            onChange={handleEndTime} 
          />
          {/* {error.required && <p className="formError">{error.required}</p>}   */}
          {error.endTimeError && <p className="formError">{error.endTimeError}</p>}
        </div>
        <a className="Delete-Slots" onClick={deleteSlots}>
          <RxCross2 />
        </a>
      </div>
    </>
  );
}

export default TimeSlots;
