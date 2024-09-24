import TimeSlots from "./TimeSlots";

function TimeSlotsContainer({ addSlotsList , deleteSlots }) {
  return (
    <>
      <div className="Availability-form__TimeSlots d-flex flex-column gap-3">
        {
          addSlotsList.map((item, index) => {
            return <TimeSlots key={index} deleteSlots={() => deleteSlots(item.id)} />
          })
        }
      </div>
    </>
  );
}

export default TimeSlotsContainer;
