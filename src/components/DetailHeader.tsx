import type { DaySchedule } from '../types';
import { ArrowBackIcon } from './Icon';
import './DetailHeader.css';

interface Props {
  schedule: DaySchedule;
  onBack: () => void;
}

export function DetailHeader({ schedule, onBack }: Props) {
  return (
    <header className="detail-header">
      <button
        className="detail-header__back"
        onClick={onBack}
        type="button"
        aria-label="목록으로 돌아가기"
      >
        <ArrowBackIcon size={20} color="#fff" />
      </button>
      <span className="detail-header__badge">Day {schedule.day}</span>
      <span className="detail-header__date">
        {schedule.date} {schedule.weekday}
      </span>
    </header>
  );
}
