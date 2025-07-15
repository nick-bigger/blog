import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";

/**
 * Formats a given Date object into a shorthand relative time string (e.g., "3d", "5m").
 * It calculates the difference relative to the current time.
 */
export const formatRelativeShorthand = (targetDate: Date): string => {
  const now = new Date();

  const diffSeconds = Math.abs(differenceInSeconds(targetDate, now));
  const diffMinutes = Math.abs(differenceInMinutes(targetDate, now));
  const diffHours = Math.abs(differenceInHours(targetDate, now));
  const diffDays = Math.abs(differenceInDays(targetDate, now));
  const diffWeeks = Math.abs(differenceInWeeks(targetDate, now));
  const diffMonths = Math.abs(differenceInMonths(targetDate, now));
  const diffYears = Math.abs(differenceInYears(targetDate, now));

  if (diffYears >= 1) {
    return `${diffYears}y`;
  } else if (diffMonths >= 1) {
    return `${diffMonths}mo`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks}w`;
  } else if (diffDays >= 1) {
    return `${diffDays}d`;
  } else if (diffHours >= 1) {
    return `${diffHours}h`;
  } else if (diffMinutes >= 1) {
    return `${diffMinutes}m`;
  } else {
    return diffSeconds <= 5 ? "now" : `${diffSeconds}s`;
  }
};
