import { useState } from 'react';
import { useSchedule } from './useSchedule';
import { getTodayDayNumber } from './utils';
import { AppHeader } from './components/AppHeader';
import { DayCard } from './components/DayCard';
import { DetailHeader } from './components/DetailHeader';
import { Timeline } from './components/Timeline';
import { ErrorScreen } from './components/ErrorScreen';
import './App.css';

export default function App() {
  const { schedule, loading, error, fromCache, retry } = useSchedule();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const todayDay = getTodayDayNumber(schedule);
  const selectedSchedule = schedule.find(s => s.day === selectedDay) ?? null;

  if (loading) {
    return (
      <div className="app">
        <AppHeader />
        <div className="app__loading">불러오는 중…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <AppHeader />
        <ErrorScreen onRetry={retry} />
      </div>
    );
  }

  if (selectedSchedule) {
    return (
      <div className="app">
        <DetailHeader
          schedule={selectedSchedule}
          onBack={() => setSelectedDay(null)}
        />
        <main className="app__detail">
          <Timeline schedule={selectedSchedule} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <AppHeader />
      {fromCache && (
        <div className="app__offline-banner">오프라인 상태 — 저장된 데이터를 표시 중입니다</div>
      )}
      <main className="app__main">
        {schedule.map(s => (
          <DayCard
            key={s.day}
            schedule={s}
            isToday={s.day === todayDay}
            onClick={() => setSelectedDay(s.day)}
          />
        ))}
      </main>
    </div>
  );
}
