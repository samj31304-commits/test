document.getElementById('checkVersionBtn').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.textContent = 'Checking for updates...';

  fetch('version.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      status.textContent = `Latest version: ${data.latestVersion} ${
        data.mandatory ? '(Mandatory update)' : '(Optional update)'
      }`;
    })
    .catch(error => {
      status.textContent = 'Failed to load version info.';
      console.error('Error fetching version:', error);
    });
});
