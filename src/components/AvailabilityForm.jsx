import { useEffect, useState } from 'react';
import AvailabilityRow from './AvailabilityRow'

function AvailabilityForm({ days }) {
  const [dayState, setDayState] = useState(
    days.reduce((acc, day) => {
      acc[day] = {isChecked: false, addSlotsList: [], fullDayShift: false}
      return acc;
    },{})
  )

  const [formError, setFormError] = useState("")

  function updateDayState(day, updatedSate) {
    setDayState((prevDayState)=> ({...prevDayState, [day]: {...prevDayState[day], ...updatedSate}}))
  }

  function handleSubmit() {
    const formData = Object.keys(dayState).map((day) => {
      const {isChecked, addSlotsList, fullDayShift} = dayState[day] // extracting values fromm daystate of current day

      return {
        day, 
        isChecked,
        slots: fullDayShift ? "Activated Full Day Shift" : isChecked ? addSlotsList : "Unavailable"
      }
    })

    const formErrorCheck = formData.some((day) => day.isChecked || day.slots != 'Unavailable')
    if(!formErrorCheck) {
      setFormError("Please select atleast one Time Slot")
      return // stops form submissiom
    }
    else {
      setFormError("")
    }

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
        <p className='formError'>{formError}</p>
        <button className="Availability-form__Submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default AvailabilityForm;
