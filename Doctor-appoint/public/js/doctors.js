const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#doctorName').value.trim();
    const speciality = document.querySelector('#doctorSpeciality').value.trim();
    const phone = document.querySelector('#doctorPhoneNumber').value.trim();
    const location = document.querySelector('#doctorLocation').value.trim();
    const notes = document.querySelector('#doctorNotes').value.trim();

  
    if (name && speciality && phone && location &&  notes) {
      const response = await fetch('/api/doctor', {
        method: 'POST',
        body: JSON.stringify({ name, speciality, phone, location, notes}),
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