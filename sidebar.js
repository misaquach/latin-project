    fetch('https://mos-maiorum.neocities.org/sidebar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading sidebar:', error));
