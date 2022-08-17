export const greetings = (hoursInput: number) => {
  if (hoursInput >= 0 && hoursInput < 6) {
    return `Good Night`;
  } else if (hoursInput >= 6 && hoursInput < 12) {
    return `Good Morning`;
  } else if (hoursInput >= 12 && hoursInput < 18) {
    return `Good Afternoon`;
  } else if (hoursInput >= 18 && hoursInput < 23) {
    return `Good Evening`;
  }
};
