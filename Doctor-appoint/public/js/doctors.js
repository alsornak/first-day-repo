const docFormHandler = async (event) => {
    event.preventDefault();
    
    const docname = document.querySelector('#doctorName').value.trim();
    const docspec = document.querySelector('#doctorSpecialty').value.trim();
    const docno = document.querySelector('#doctorPhoneNumber').value.trim();
    const docloc = document.querySelector('#doctorLocation').value.trim();
    const category = document.querySelector('#noteCategory').value.trim();

  
    if (docname && docspec && docno && docloc &&  category) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ docname, docspec, docno,docloc, category }),
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