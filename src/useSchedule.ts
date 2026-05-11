import { useState, useEffect } from 'react';
import type { DaySchedule } from './types';

export function useSchedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;

    fetch('/data.json')
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<{ schedule: DaySchedule[] }>;
      })
      .then(data => {
        if (active) {
          setSchedule(data.schedule);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) {
          setError(true);
          setLoading(false);
        }
      });

    return () => { active = false; };
  }, [retryCount]);

  return {
    schedule,
    loading,
    error,
    retry: () => setRetryCount(c => c + 1),
  };
}
