const indexFormHandler2 = async (event) => {
    event.preventDefault();
    
    const incident = document.querySelector('#noteTitle').value.trim();
    const description = document.querySelector('#noteIncident').value.trim();
    const location = document.querySelector('#noteLocation').value.trim();
    const category = document.querySelector('#noteCategory').value.trim();

  
    if (incident && description && location &&  category) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ incident, description, location, category }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/index');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.signup')
    .addEventListener('submit', signupFormHandler);