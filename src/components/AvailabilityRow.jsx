import { v4 as uuidv4 } from "uuid";
import Actions from "./Actions";
import AvailabilityDay from "./AvailabilityDay";
import { useState } from "react";
import TimeSlotsContainer from "./TimeSlotsContainer";

function AvailabilityRow({ day }) {
  const [isChecked, setIsChecked] = useState(false);
  const [addSlotsList, setAddSlotsList] = useState([]);
  const [fullDayShift, setFullDayShift] = useState(false);

  function handleAddTimeSlots() {
    if (fullDayShift) {
      // if on add, fullday shift is active so first disable it
      setFullDayShift(false);
    }
    setAddSlotsList([...addSlotsList, { id: uuidv4() }]);
    setIsChecked(true);
  }

  function handleDelete(id) {
    let availableSlots = addSlotsList.filter((item) => {
      return item.id !== id;
    });
    setAddSlotsList(availableSlots);

    if (availableSlots.length == 0) {
      setIsChecked(false);
    }
  }

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    
    if (!checked) {  // conditons for when FDS is active and checkbox is unchecked
      setFullDayShift(false);  // Deactivate full-day shift
      setIsChecked(false);  // Uncheck the checkbox
    } else {  // Checkbox is checked
      setIsChecked(true);  // Check the checkbox
      
      // If no slots are present and full day shift is not active, add the first slot
      if (addSlotsList.length === 0 && !fullDayShift) {
        handleAddTimeSlots();
      }
    }
  }
  

  function handleFullDayShift(e) {
    // when fullday shift is active
    if(!fullDayShift) {
      setFullDayShift(true)
      setIsChecked(true)
      setAddSlotsList([])
    }
    else {
      setFullDayShift(false)
      setIsChecked(false)
      setAddSlotsList([])
    }
  }

  return (
    <>
      <div className="Availability-form__Row d-flex gap-5">
        <AvailabilityDay day={day} isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

        {fullDayShift ? (
          <p className="full-day-shift-text">24-hour shift activated</p>
        ) : isChecked ? (
          <TimeSlotsContainer addSlotsList={addSlotsList} deleteSlots={handleDelete} />
        ) : (
          <p className="Unavailable">Unavailable</p>
        )}

        <Actions addSlots={handleAddTimeSlots} fullDayShift={handleFullDayShift} />
      </div>
    </>
  );
}

export default AvailabilityRow;
