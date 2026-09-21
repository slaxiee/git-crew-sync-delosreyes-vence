function calculatePay(hours, rate) {
  if (hours <= 8) {
    return hours * rate;
  }
  const regularPay = 8 * rate;
  const overtimeHours = hours - 8;
  const overtimePay = overtimeHours * (rate * 1.5);
  return regularPay + overtimePay;
}