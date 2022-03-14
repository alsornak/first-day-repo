const forminlineFormHandler = async (event) => {
    event.preventDefault();
    
    const toDo = document.querySelector('#newToDo').value.trim();
    
  
    if (toDo) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ toDo}),
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
    .querySelector('.inline')
    .addEventListener('submit', signupFormHandler);