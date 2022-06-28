function App() {
  return (
    <div className='wrapper'>
      <div className='sub-wrapper'>
        <div className="light-wrapper">
          <input type='radio' className='red circle' />
          <input type='radio' className='yellow circle' />
          <input type='radio' className='green circle'/>
        </div>
        <button>ON</button>
        <button>OFF</button>
      </div>
    </div>
  );
}

export default App;
