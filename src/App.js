import './App.css';
import Slot from './Slot';

function App() {
  return (
    <>
      <h1 className="heading"> 🎰 Welcome to the Casino!🎰 </h1>

      <div className='slotMachine'>
        <Slot x='😊' y='😊' z='😊' />
        <Slot x='😊' y='❤' z='🙌' />
        <Slot x='🙌' y='😊' z='🙌' />
      </div>

    </>
  );
}

export default App;
