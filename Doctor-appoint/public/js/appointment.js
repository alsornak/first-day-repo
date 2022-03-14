const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const date = document.querySelector('#apptDate').value.trim();
    const time = document.querySelector('#apptTime').value.trim();
    const location = document.querySelector('#apptLocation').value.trim();
    const title = document.querySelector('#apptTitle').value.trim();
    const notes = document.querySelector('#apptNotes').value.trim();
    const category = document.querySelector('#apptCategory').value.trim();
  
    if (date && time && location && title && notes && category) {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        body: JSON.stringify({ date, time, location, title, notes, category }),
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