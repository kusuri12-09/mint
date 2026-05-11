export interface ScheduleEvent {
  time: string;
  title: string;
  location?: string;
  note?: string;
}

export interface DaySchedule {
  day: number;
  date: string;
  weekday: string;
  region: string[];
  hotel?: string;
  events: ScheduleEvent[];
}
