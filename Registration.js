    function updateClock() {
      const now = new Date();
      document.getElementById("clock").innerText = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (e) {
      const pass1 = document.getElementById("password1").value;
      const pass2 = document.getElementById("password2").value;
      if (pass1 !== pass2) {
        e.preventDefault();
        alert("❌ Passwords do not match!");
      } else {
        alert("✅ Registration Successful!");
      }
    });

    const passwordField = document.getElementById("password1");
    passwordField.addEventListener("input", function () {
      let strengthMeter = document.getElementById("strengthMeter");
      if (!strengthMeter) {
        strengthMeter = document.createElement("div");
        strengthMeter.id = "strengthMeter";
        strengthMeter.style.marginTop = "5px";
        this.insertAdjacentElement("afterend", strengthMeter);
      }
      const value = this.value;
      let msg = "Weak ❌";
      if (value.length > 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
        msg = "Strong ✅";
      } else if (value.length > 6) {
        msg = "Medium ⚠️";
      }
      strengthMeter.innerText = "Password Strength: " + msg;
    });

   document.querySelectorAll('.toggle-eye').forEach(eye => {
  eye.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const input = document.getElementById(targetId);

    if (input.type === 'password') {
      input.type = 'text';
      this.textContent = '🚫'; 
    } else {
      input.type = 'password';
      this.textContent = '👁';
    }
  });
});

    const addressField = document.getElementById("address");
    const charCount = document.createElement("small");
    charCount.style.display = "block";
    charCount.style.marginTop = "5px";
    addressField.insertAdjacentElement("afterend", charCount);
    addressField.addEventListener("input", function () {
      charCount.innerText = `Characters: ${this.value.length}`;
    });

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    function setInitialTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
      } else {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
      }
    }
    setInitialTheme();
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
      }
    });