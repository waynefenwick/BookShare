const signout = async function() {
  const response = await fetch('/api/user/signout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign out');
  }
};

document.querySelector('#signout-link').addEventListener('click', signout);
