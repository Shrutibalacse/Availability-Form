import AvailabilityRow from './AvailabilityRow'

function AvailabilityDays({ days }) {
  return (
    <>
      <div className="Availability-form__Rows">
        { 
          days.map((item, index) => {
            return <AvailabilityRow key={index} days={item} />
          })
        }
      </div>
    </>
  )
}

export default AvailabilityDays;
