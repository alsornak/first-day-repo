const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#noteTitle').value.trim();
    const location = document.querySelector('#noteLocation').value.trim();
    const content = document.querySelector('#noteIncident').value.trim();    
    const category = document.querySelector('#noteCategory').value.trim();

  
    if (title && location && content &&  category) {
      const response = await fetch('/api/medicalnotes', {
        method: 'POST',
        body: JSON.stringify({ title, location, content, category }),
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