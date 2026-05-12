import { useState, useEffect } from 'react';
import type { DaySchedule } from './types';

const CACHE_KEY = 'mint_schedule_cache';

function loadFromCache(): DaySchedule[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DaySchedule[];
  } catch {
    return null;
  }
}

function saveToCache(data: DaySchedule[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // 저장 공간 부족 등의 예외는 무시
  }
}

export function useSchedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fromCache, setFromCache] = useState(false);
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
          saveToCache(data.schedule);
          setSchedule(data.schedule);
          setFromCache(false);
          setError(false);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!active) return;
        const cached = loadFromCache();
        if (cached) {
          setSchedule(cached);
          setFromCache(true);
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      });

    return () => { active = false; };
  }, [retryCount]);

  return {
    schedule,
    loading,
    error,
    fromCache,
    retry: () => setRetryCount(c => c + 1),
  };
}
