document.getElementById('shipping-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const weight = parseFloat(document.getElementById('weight').value);
  const distance = parseFloat(document.getElementById('distance').value);
  
  if (isNaN(weight) || isNaN(distance)) {
    alert("Please enter valid numbers.");
    return;
  }

  const ratePerKgPerKm = 0.05;
  const cost = (weight * distance * ratePerKgPerKm).toFixed(2);
  
  document.getElementById('result').innerText = `Estimated Shipping Cost: ₹${cost}`;
});
