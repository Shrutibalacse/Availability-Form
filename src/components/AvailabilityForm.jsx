import AvailabilityRow from './AvailabilityRow'

function AvailabilityForm({ days }) {
  return (
    <>
      <div className="Availability-form__Rows d-flex flex-column gap-3">
        { 
          days.map((item, index) => {
            return <AvailabilityRow key={index} days={item} />
          })
        }
      </div>
    </>
  )
}

export default AvailabilityForm;
