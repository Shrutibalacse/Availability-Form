import { v4 as uuidv4 } from 'uuid';
import Actions from "./Actions";
import AvailabilityDay from "./AvailabilityDay";
import { useRef, useState } from "react";
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

  function check() {
    console.log(isChecked)
  }

  return (
    <>
      <div className="Availability-form__Row d-flex gap-5">
        <AvailabilityDay 
          days={days} 
          isChecked = {isChecked}
          setIsChecked = {setIsChecked}
          check={check}
        />
        {isChecked ? 
          <TimeSlotsContainer addSlots={handleAddTimeSlots} addSlotsList={addSlotsList} deleteSlots={handleDelete} /> 
            : 
          <p className="Unavailable">Unavailable</p>}
        <Actions addSlots={handleAddTimeSlots} /> 
      </div>
    </>
  );
}

export default AvailabilityRow;
