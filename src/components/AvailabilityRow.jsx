import { v4 as uuidv4 } from "uuid";
import Actions from "./Actions";
import AvailabilityDay from "./AvailabilityDay";
import { useState } from "react";
import TimeSlotsContainer from "./TimeSlotsContainer";

function AvailabilityRow({ day , dayState , updateDayState }) {

  const { isChecked, addSlotsList, fullDayShift } = dayState[day] || {
    isChecked: false,
    addSlotsList: [],
    fullDayShift: false
  }

  function handleAddTimeSlots() {
    if (fullDayShift) {
      // if on add, fullday shift is active so first disable it
      updateDayState(day, {
        fullDayShift: false
      })
    }
    // when the checkbox is unchecked and there are slots, now a slot is added, first slotmust be added rather appendng a slot in existing slots 
    // if(!isChecked){
      
    // }
    updateDayState(day, {
      addSlotsList: [...addSlotsList, { id: uuidv4() , startTime: "", endTime: ""}],
      isChecked: true
    })
  }

  function handleDelete(id) {
    let availableSlots = addSlotsList.filter((item) => {
      return item.id !== id;
    });
    updateDayState(day, {
      addSlotsList: availableSlots
    })

    if (availableSlots.length == 0) {
      updateDayState(day, {
        isChecked: false
      })
    }
  }

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    
    if (!checked) {  // conditons for when FDS is active and checkbox is unchecked
      updateDayState(day, {
        fullDayShift: false, // Deactivate full-day shift
        isChecked: false // Uncheck the checkbox
      })
    } else {  // Checkbox is checked
      updateDayState(day, {
        isChecked: true // Check the checkbox
      })
      
      // If no slots are present and full day shift is not active, add the first slot
      if (addSlotsList.length === 0 && !fullDayShift) {
        handleAddTimeSlots();
      }
    }
  }
  
  function handleFullDayShift(e) {
    // when fullday shift is active
    if(!fullDayShift) {
      updateDayState(day, {
        fullDayShift: true,
        isChecked: true,
        addSlotsList: []
      })
    }
    else {
      updateDayState(day, {
        fullDayShift: false,
        isChecked: false,
        addSlotsList: []
      })
    }
  }

  function handleCopySlots() {
    Object.keys(dayState).forEach((targetDay) => {
      if (dayState[targetDay].isChecked && targetDay !== day) {
        const isCurrentDayUnavailable = !isChecked && addSlotsList.length === 0 && !fullDayShift;

        updateDayState(targetDay, {
          addSlotsList: addSlotsList.map((slot) => ({ ...slot, id: uuidv4() })), // Copy slots but give copied slots new id
          fullDayShift: fullDayShift,
          isChecked: isCurrentDayUnavailable ? false : true,
        });
      }
      console.log("yess")
      console.log(addSlotsList);
    });
  }

  function handleSlots(id, updatedData) {
    const updatedSlots = addSlotsList.map((slot) =>
      slot.id === id ? { ...slot, ...updatedData } : slot
    );
    updateDayState(day, {
      addSlotsList: updatedSlots,
    });
  }

  return (
    <>
      <div className="Availability-form__Row d-flex gap-5">
        <AvailabilityDay day={day} isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

        <div className="Availability-form__Content">
          {fullDayShift ? (
            <p className="full-day-shift-text">24-hour shift activated</p>
          ) : isChecked ? (
            <TimeSlotsContainer addSlotsList={addSlotsList} deleteSlots={handleDelete} handleSlots={handleSlots} />
          ) : (
            <p className="Unavailable">Unavailable</p>
          )}
        </div>

        <Actions addSlots={handleAddTimeSlots} copySlots={handleCopySlots} fullDayShift={handleFullDayShift} />
      </div>
    </>
  );
}

export default AvailabilityRow;
