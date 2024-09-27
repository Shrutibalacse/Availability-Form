import TimeSlots from "./TimeSlots";

function TimeSlotsContainer({ addSlotsList , deleteSlots , handleSlots }) {
  const sortedSlots = [...addSlotsList].sort((a, b) => {
    if (!a.startTime || !b.startTime) return 0;  // Handling empty times
    return a.startTime.localeCompare(b.startTime);  // Comparing startTime 
  });

  return (
    <>
      <form className="Availability-form__TimeSlots d-flex flex-column gap-3">
        {
          sortedSlots.map((item, index) => {
            return <TimeSlots key={index} deleteSlots={() => deleteSlots(item.id)} slot={item} handleSlots={handleSlots} addSlotsList={addSlotsList} />
          })
        }
      </form>
    </>
  );
}

export default TimeSlotsContainer;
