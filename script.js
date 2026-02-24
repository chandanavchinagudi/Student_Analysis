const resultElement = document.getElementById('result');

if(marksPercent >= 40 && attendancePercent >= 75) {
  resultElement.style.color = "green";
  resultText += "Status: Likely to Pass ✅ 🎉";
} else {
  resultElement.style.color = "red";
  if(marksPercent < 40 && attendancePercent < 75){
    resultText += "Status: High chance of Failing ❌ ⚠️";
  } else if(marksPercent < 40){
    resultText += "Status: Marks are low ⚠️ 📝";
  } else {
    resultText += "Status: Attendance is low ⚠️ 📉";
  }
}
  
