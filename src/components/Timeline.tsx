import type { DaySchedule, ScheduleEvent } from '../types';
import { LocationOnIcon, HotelIcon, InfoOutlinedIcon } from './Icon';
import { RegionChip } from './RegionChip';
import './Timeline.css';

function TimelineItem({ event, isLast }: { event: ScheduleEvent; isLast: boolean }) {
  return (
    <li className={`tl-item${isLast ? ' tl-item--last' : ''}`}>
      <div className="tl-item__time">{event.time}</div>
      <div className="tl-item__track">
        <div className="tl-item__dot" />
        {!isLast && <div className="tl-item__line" />}
      </div>
      <div className="tl-item__content">
        <span className="tl-item__title">{event.title}</span>
        {event.location && (
          <span className="tl-item__meta">
            <LocationOnIcon size={13} className="tl-item__meta-icon" />
            {event.location}
          </span>
        )}
        {event.note && (
          <span className="tl-item__meta">
            <InfoOutlinedIcon size={13} className="tl-item__meta-icon" />
            {event.note}
          </span>
        )}
      </div>
    </li>
  );
}

interface Props {
  schedule: DaySchedule;
}

export function Timeline({ schedule }: Props) {
  return (
    <div className="timeline-wrap">
      <div className="timeline-meta">
        <div className="timeline-regions">
          {schedule.region.map(r => <RegionChip key={r} label={r} />)}
        </div>
        {schedule.hotel && (
          <div className="timeline-hotel">
            <HotelIcon size={15} className="timeline-hotel__icon" />
            <span>{schedule.hotel}</span>
          </div>
        )}
      </div>

      <ul className="timeline">
        {schedule.events.map((ev, i) => (
          <TimelineItem
            key={i}
            event={ev}
            isLast={i === schedule.events.length - 1}
          />
        ))}
      </ul>
    </div>
  );
}
