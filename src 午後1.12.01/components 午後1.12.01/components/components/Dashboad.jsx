import { useState } from "react";
import Counter from "/counter.jsx";


export default function Dashboard() {
  // nums managed by array
  const [counts, setCounts] = useState([0, 0]);
  const [timestamps, setTimestamps] = useState([null, null]);

  // update single count
  const updateCount = (index, newCount) => {
    const newCounts = [...counts];
    const newTimes = [...timestamps];
    newCounts[index] = newCount;
    newTimes[index] = new Date().toLocaleTimeString();
    setCounts(newCounts);
    setTimestamps(newTimes);
  };

  // reset all
  const resetAll = () => {
    setCounts([0, 0]);
    setTimestamps([null, null]);
  };

  const total = counts.reduce((a, b) => a + b, 0);

  return (
    <div className="dashboard">
      <h1>Counter Dashboard</h1>
      <h2>Total Count: {total}</h2>
      <button className="reset-btn" onClick={resetAll}>Reset</button>

      <div className="counter-container">
        <Counter
          index={0}
          count={counts[0]}
          timestamp={timestamps[0]}
          setCount={updateCount}
        />
        <Counter
          index={1}
          count={counts[1]}
          timestamp={timestamps[1]}
          setCount={updateCount}
        />
      </div>
    </div>
  );
}
