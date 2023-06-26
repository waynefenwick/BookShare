const signinFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-signin');
  const passwordEl = document.querySelector('#password-input-signin');

  const response = await fetch('/api/user/signin', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to signin');
  }
};

document
  .querySelector('#signin-form')
  .addEventListener('submit', signinFormHandler);
