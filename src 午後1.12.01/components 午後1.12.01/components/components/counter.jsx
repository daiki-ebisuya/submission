export default function Counter({ index, count, setCount, timestamp }) {
  const increment = () => setCount(index, count + 1);
  const decrement = () => setCount(index, count - 1);

  return (
    <div className="counter-card">
      <h3>Counter {index + 1}</h3>
      <p className="count">{count}</p>
      <div className="btn-group">
        <button onClick={decrement}>−</button>
        <button onClick={increment}>＋</button>
      </div>
      {timestamp && <p className="timestamp">Last updated: {timestamp}</p>}
    </div>
  );
}
