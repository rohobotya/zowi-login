function login() {
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  if (phone === "" || password === "") {
    document.getElementById('message').textContent = "All fields are required.";
    return;
  }

  // Simulated login logic (replace with real backend logic)
  if (phone === "0968623529" && password === "zowi123") {
    window.location.href = "https://rohobotya.github.io/www.zowipromotion.com/";
  } else {
    document.getElementById('message').textContent = "Invalid login credentials.";
  }
}