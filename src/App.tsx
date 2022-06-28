import { useMachine } from '@xstate/react';
import { lightMachine } from './lightMachine';

function App() {
  const [cur, send] = useMachine(lightMachine);

  return (
    <div className='wrapper'>
      <div className='sub-wrapper'>
        <div className="light-wrapper">
          <input type='radio' className='red circle' readOnly checked={cur.matches({ ON: 'red'})} />
          <input type='radio' className='yellow circle' readOnly checked={cur.matches({ ON: 'yellow'})} />
          <input type='radio' className='green circle' readOnly checked={cur.matches({ ON: 'green'})} />
        </div>
        <button onClick={() => send('TURN_ON')}>ON</button>
        <button onClick={() => send('TURN_OFF')}>OFF</button>
        <button onClick={() => send('NEXT')}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
