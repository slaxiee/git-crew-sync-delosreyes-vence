function calculatePay(hours, rate) {
<<<<<<< HEAD
  if (hours <= 8) {
    return hours * rate;
  }
  const regularPay = 8 * rate;
  const overtimeHours = hours - 8;
  const overtimePay = overtimeHours * (rate * 1.5);
  return regularPay + overtimePay;
}
=======
  return Math.round(hours * rate);
}// Change for Task 2 - rounding shift pay 
>>>>>>> 43a896e88148b1ca204fc94c58f6f4ce4d087bb4
// Commit from Clone A 
