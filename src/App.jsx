import './App.scss'
import AvailabilityForm from './components/AvailabilityForm';

function App() {
  const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <>
      <div className="Availability-form p-4">
        <h3 className='text-white py-3 text-center'>Availability</h3>
        <AvailabilityForm days={Days} />
      </div>
    </>
  )
}

export default App
