function AvailabilityDay({ day , isChecked , handleCheckboxChange }) {
  return (
    <>
      <div className="Availability-form__Day">
        <label htmlFor={day}>
          <input type="checkbox" 
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-check-input me-2"
            id={day}
          />
          <label htmlFor={day} className="Availability-form__Day">
            {day}
          </label>
        </label>
      </div>
    </>
  );
}

export default AvailabilityDay;
