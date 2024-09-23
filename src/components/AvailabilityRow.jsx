import TimeSlots from "./TimeSlots";
import Actions from "./Actions";
import AvailabilityDay from "./AvailabilityDay";
import { useState } from "react";

function AvailabilityRow({ days }) {
  const [isUnavailable, setUnavailable] = useState(false);

  function toggleUnavailable(event) {
    setUnavailable(event.target.checked)
  }

  return (
    <>
      <div className="Availability-form__Row d-flex gap-5 my-3">
        <AvailabilityDay days={days} setUnavailable={toggleUnavailable} />
        {isUnavailable ? <TimeSlots></TimeSlots> : <p className="Unavailable">Unavailable</p>}
        <Actions></Actions>
      </div>
    </>
  );
}

export default AvailabilityRow;
