function AvailabilityForm({ days , setUnavailable }) {
  return (
    <>
      <div className="Availability-form__Day">
        <label htmlFor="day">
          <input type="checkbox" onClick={setUnavailable} className="form-check-input me-2" name="" id="day" />
          <label htmlFor="day" className="Availability-form__Day">
            {days}
          </label>
        </label>
      </div>
    </>
  );
}

export default AvailabilityForm;
