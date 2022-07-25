// TODO: get server from .env
const url = 'http://localhost:3001/api/user/register';

async function registerUser(user) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Handle user input and do a request to the server.
 * @param {Event} event
 */
export function registrationFormHandler({ preventDefault }) {
  preventDefault();

  const newUser = {
    email: this.children.user_email.value,
    password: this.children.user_password.value,
    firstName: this.children.user_firstName.value,
    lastName: this.children.user_lastName.value,
  };

  registerUser(newUser).then(() => {
    // TODO: open successful pop
  });
}
