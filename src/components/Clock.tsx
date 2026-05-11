import { useState, useEffect } from 'react';
import './Clock.css';

function formatTime(date: Date, timeZone: string) {
  return date.toLocaleTimeString('ko-KR', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="clock">
      <div className="clock__item">
        <span className="clock__label">KST</span>
        <span className="clock__time">{formatTime(now, 'Asia/Seoul')}</span>
      </div>
      <div className="clock__divider" />
      <div className="clock__item">
        <span className="clock__label">PT</span>
        <span className="clock__time">{formatTime(now, 'America/Los_Angeles')}</span>
      </div>
    </div>
  );
}
