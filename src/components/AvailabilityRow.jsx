import { v4 as uuidv4 } from 'uuid';
import Actions from "./Actions";
import AvailabilityDay from "./AvailabilityDay";
import { useState } from "react";
import TimeSlotsContainer from "./TimeSlotsContainer";

function AvailabilityRow({ days }) {
  const [isChecked, setIsChecked] = useState(false);
  const [addSlotsList, setAddSlotsList] = useState([]);

  function handleAddTimeSlots() {
    setAddSlotsList([...addSlotsList, { id:uuidv4() }]);
    setIsChecked(true)
  }

  function handleDelete(id) {
    let availableSlots = addSlotsList.filter((item) => {
      return item.id !== id
    })
    setAddSlotsList(availableSlots)

    if(availableSlots.length == 0) {
      setIsChecked(false)
    }
  }

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    setIsChecked(checked); //updating state(true/false)
  
    // If checkbox is checked and no slots are present, add the first slot
    if (checked && addSlotsList.length === 0) {
      handleAddTimeSlots();
    }
  }
  
  return (
    <>
      <div className="Availability-form__Row d-flex gap-5">
        <AvailabilityDay 
          days={days} 
          isChecked = {isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        {isChecked ? 
          <TimeSlotsContainer addSlotsList={addSlotsList} deleteSlots={handleDelete} /> 
            : 
          <p className="Unavailable">Unavailable</p>}
        <Actions addSlots={handleAddTimeSlots} /> 
      </div>
    </>
  );
}

export default AvailabilityRow;
