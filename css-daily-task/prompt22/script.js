let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === stepIndex);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registration successful!");
});