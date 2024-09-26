import { useEffect, useState } from 'react';
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

  function handleSubmit() {
    const formData = Object.keys(dayState).map((day) => {
      const {isChecked, addSlotsList, fullDayShift} = dayState[day]

      return {
        day, 
        isChecked,
        slots: fullDayShift ? "Activated Full Day Shift" : isChecked ? addSlotsList : "Unavailable"
      }
    })

    console.log(formData)
  }

  // useEffect(() => {
  //   localStorage.setItem("AvailabilityFormData", JSON.stringify(dayState))
  // },[dayState])

  return (
    <>
      <div className="Availability-form__Rows d-flex flex-column gap-3">
        { 
          days.map((item, index) => {
            return <AvailabilityRow key={index} day={item} dayState={dayState} updateDayState={updateDayState} />
          })
        }
        <button className="Availability-form__Submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default AvailabilityForm;
