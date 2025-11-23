const TimerControls = ({ isRunning, onToggle, onReset }) => {
  return (
    <>
      <button
        onClick={onToggle}
        className="mt-2 bg-green-500 text-white px-4 mr-3 py-2 rounded hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={onReset}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
