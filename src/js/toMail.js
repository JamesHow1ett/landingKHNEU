import { createPopUpMenu } from './helpers/createPopUp';

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
export function registrationFormHandler(event) {
  event.preventDefault();

  const user = {
    email: this.children.user_email.value,
    password: this.children.user_password.value,
    firstName: this.children.user_firstName.value,
    lastName: this.children.user_lastName.value,
  };

  registerUser(user).then(({ data }) => {
    const options = {
      title: `Welcome to Skoro-Forms: ${user.firstName} ${user.lastName}`,
      height: 300,
    };

    if (data.message) {
      options.text = data.message;
    } else {
      options.text = `Thank you for your registration. We were sent welcome email to <span class="underline">${user.email}</span>.
      <br />Please check it, for getting your credentials. See you soon. =)
    `;
      options.actions = {
        confirm: () => {
          // TODO: redirect to login page
          console.log('confirm');
        },
      };
    }

    createPopUpMenu(document.body, options);
  });
}
