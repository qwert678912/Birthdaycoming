export function calculateTimeLeft(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    months,
    days,
    hours,
    minutes,
    seconds
  };
}