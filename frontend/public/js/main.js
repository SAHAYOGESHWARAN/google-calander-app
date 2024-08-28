document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
  
    const response = await fetch('http://localhost:5000/events/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, date, email, phone })
    });
  
    if (response.ok) {
      alert('Event added successfully');
    } else {
      alert('Failed to add event');
    }
  });
  