import type { DaySchedule } from '../types';
import { LocationOnIcon, TodayIcon } from './Icon';
import { RegionChip } from './RegionChip';
import './DayCard.css';

interface Props {
  schedule: DaySchedule;
  isToday: boolean;
  onClick: () => void;
}

export function DayCard({ schedule, isToday, onClick }: Props) {
  const first = schedule.events[0];
  const last = schedule.events.length > 1 ? schedule.events[schedule.events.length - 1] : null;

  return (
    <button
      className={`day-card${isToday ? ' day-card--today' : ''}`}
      onClick={onClick}
      type="button"
    >
      <div className="day-card__header">
        <div className="day-card__left">
          {isToday && <TodayIcon size={15} className="day-card__today-icon" />}
          <span className="day-card__badge">Day {schedule.day}</span>
          {isToday && <span className="day-card__today-label">오늘</span>}
        </div>
        <span className="day-card__date">{schedule.date} {schedule.weekday}</span>
      </div>

      <div className="day-card__regions">
        <LocationOnIcon size={14} className="day-card__loc-icon" />
        {schedule.region.map(r => (
          <RegionChip key={r} label={r} primary={isToday} />
        ))}
      </div>

      <ul className="day-card__preview">
        {first && (
          <li className="day-card__preview-item">
            {first.time && <span className="day-card__preview-time">{first.time}</span>}
            <span className="day-card__preview-title">{first.title}</span>
          </li>
        )}
        {last && (
          <li className="day-card__preview-item">
            {last.time && <span className="day-card__preview-time">{last.time}</span>}
            <span className="day-card__preview-title">{last.title}</span>
          </li>
        )}
      </ul>
    </button>
  );
}
