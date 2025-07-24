fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const container = document.getElementById('card-container');
        users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p class="email"><strong>Email:</strong> ${user.email}</p>
          `;
          container.appendChild(card);
        });
      })
      