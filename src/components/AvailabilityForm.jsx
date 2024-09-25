import { useState } from 'react';
import AvailabilityRow from './AvailabilityRow'

function AvailabilityForm({ days }) {
  const [dayState, setDayState] = useState(
    days.reduce((acc, day) => {
      acc[day] = {isChecked: false, addSlotsList: [], fullDayShift: false}
      return acc;
    },{})
  )

  function updateDayState(day, updatedSate) {
    setDayState((prevDayState)=> ({...prevDayState, [day]: {...prevDayState[day], ...updatedSate}}))
  }

  return (
    <>
      <div className="Availability-form__Rows d-flex flex-column gap-3">
        { 
          days.map((item, index) => {
            return <AvailabilityRow key={index} day={item} dayState={dayState} updateDayState={updateDayState} />
          })
        }
      </div>
    </>
  )
}

export default AvailabilityForm;
