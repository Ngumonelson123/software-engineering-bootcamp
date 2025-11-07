function activityOfTheDay(dayNumber) {
  const day = Number(dayNumber);

  switch (day) {
    case 1:
      console.log("Sunday — Relax and prepare for the week ahead.");
      break;
    case 2:
      console.log("Monday — Start strong! Focus on planning and productivity.");
      break;
    case 3:
      console.log("Tuesday — Keep the momentum; it’s a great day for teamwork.");
      break;
    case 4:
      console.log("Wednesday — Midweek review and adjust your goals.");
      break;
    case 5:
      console.log("Thursday — Finish pending tasks and prepare reports.");
      break;
    case 6:
      console.log("Friday — Wrap up and enjoy some fun after work!");
      break;
    case 7:
      console.log("Saturday — Spend time with family and recharge.");
      break;
    default:
      console.log("Invalid day number — please enter a number between 1 and 7.");
  }
}

// Testing the function
activityOfTheDay(1);
activityOfTheDay(3);
activityOfTheDay(5);
activityOfTheDay(7);
activityOfTheDay(9);
