function AvailabilityDay({ days , isChecked , setIsChecked , check }) {
  return (
    <>
      <div className="Availability-form__Day">
        <label htmlFor="day">
          <input type="checkbox" 
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)} 
            onClick={check}
            className="form-check-input me-2" name="" id="day" />
          <label htmlFor="day" className="Availability-form__Day">
            {days}
          </label>
        </label>
      </div>
    </>
  );
}

export default AvailabilityDay;
