async function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    document.getElementById('result').innerHTML = result.success
      ? '<p>Authentication successful</p>'
      : '<p>Authentication failed</p>';
}