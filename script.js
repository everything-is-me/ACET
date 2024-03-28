const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('facultyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const dept = document.getElementById('dept').value;
    const password = document.getElementById('password').value;
  
    
  
    const xhr = new XMLHttpRequest();
  
    xhr.open('POST', '/submit-form', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    xhr.send(`name=${encodeURIComponent(name)}&mobile=${encodeURIComponent(mobile)}&dept=${encodeURIComponent(dept)}&password=${encodeURIComponent(password)}`);
  
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Form submission successful:', xhr.responseText);
      } else {
        console.error('Form submission failed:', xhr.status);
      }
    };
    document.getElementById('submitButton1').classList.add('loading');
    
    setTimeout(function() {
      document.getElementById('submitButton1').classList.remove('loading');
      
      
      alert('Form submitted successfully!');
      window.location.href="faculty.html";
    }, 2000); 
  });



  document.getElementById('StudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('submitButton2').classList.add('loading');
    
    setTimeout(function() {
      document.getElementById('submitButton2').classList.remove('loading');
      
      alert('Form submitted successfully!');
      window.location.href="Student.html";
    }, 2000); 
  });
