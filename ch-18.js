// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function bodyMass(weight, height) {
  let bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    console.log("Underweight");
  } else if (bmi <= 25.0) {
    console.log("Normal");
  } else if (bmi <= 30.0) {
    console.log("Overweight");
  } else if (bmi > 30) {
    console.log("Obese");
  }
}

bodyMass(231233, 123);
