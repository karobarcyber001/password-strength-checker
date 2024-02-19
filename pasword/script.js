function checkPassword() {
  const password = document.getElementById('password').value;
  const strength = document.getElementById('strength');

  if (password.length === 0) {
    strength.innerHTML = 'Please enter a password';
    strength.style.color = '#FF6347'; // Red color for warning
    return;
  }

  if (password.length < 8) {
    strength.innerHTML = 'Password strength: Weak';
    strength.style.color = '#FF6347'; // Red color for weak
  } else if (password.length >= 8 && password.length <= 12) {
    strength.innerHTML = 'Password strength: Moderate';
    strength.style.color = '#FFA500'; // Orange color for moderate
  } else if (password.length > 12 && password.length <= 16) {
    strength.innerHTML = 'Password strength: Strong';
    strength.style.color = '#FFD700'; // Yellow color for strong
  } else {
    strength.innerHTML = 'Password strength: Very Strong';
    strength.style.color = '#32CD32'; // Green color for very strong
  }
}
