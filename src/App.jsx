// App.jsx

// import statements should go here ⬇️

function App() {
  // your States will go here

  // Helper Functions will go here
  const handleStart = () => {
    alert("Start button clicked! 🎉\n\nNext step: Add useState and make this button functional!")
  }

  const handleReset = () => {
    alert("Reset button clicked! ✨\n\nNext step: Add state management to make this reset the timer!")
  }
  
  // this is what the App will return... the UI elements of the app
  // when making changes to UI, look for beacons below:
  return (
    <div className="min-h-screen bg-gradient-to-br from-tomato-50 to-orange-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🍅 Pomodoro Timer
          </h1>
          <p className="text-gray-600 mb-8">Ready to build your focus tool?</p>

          {/* This is where students will build their timer */}
          <div className="space-y-6">
            <div className="text-6xl font-mono font-bold text-tomato-600">
              25:00
            </div>

            <div className="space-x-4">
              <button className="btn-primary" onClick={handleStart}>Start</button>
              <button className="btn-secondary" onClick={handleReset}>Reset</button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Lab 6A:</strong> Start by making these buttons functional!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
