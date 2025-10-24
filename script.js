fetch('version.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('status').textContent =
      `Latest version: ${data.latestVersion}`;
  })
  .catch(err => {
    document.getElementById('status').textContent = 'Failed to load version info.';
  });
