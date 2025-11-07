function studyTime(age) {
  const learnerAge = Number(age);

  if (learnerAge <= 6) {
    console.log("4pm is study time — early learners need more rest.");
  } 
  else if (learnerAge <= 12) {
    console.log("6pm is study time — primary pupils should revise early.");
  } 
  else if (learnerAge <= 18) {
    console.log("8pm is study time — teens can handle longer hours.");
  } 
  else if (learnerAge <= 25) {
    console.log("9pm is study time — college students can balance study and rest.");
  } 
  else {
    console.log("7pm is a good time for light reading or professional study.");
  }
}

// Testing the function with different ages
studyTime(4);
studyTime(10);
studyTime(15);
studyTime(22);
studyTime(35);
