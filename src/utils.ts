import type { DaySchedule } from './types';

export function getTodayDayNumber(schedule: DaySchedule[]): number | null {
  const today = new Date();
  const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
  return schedule.find(s => s.date === dateStr)?.day ?? null;
}
