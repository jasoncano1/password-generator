// Define the function init()
const init = () => {
  // Ask the user for the password length
  let len = prompt('Enter your password length (8-128 characters):');

  // Check if the user entered a value or canceled the prompt
  if (len === null || len === '') {
    len = 8; // Set the default length to 8
  } else {
    // Parse the entered value into an integer
    len = parseInt(len);

  };

  // Ask the user if they want to include numbers, uppercase letters, lowercase letters, and special characters
  let num = confirm('Would you like to include numbers?');
  let upper = confirm('Would you like to include uppercase letters?');
  let lower = confirm('Would you like to include lowercase letters?');
  let special = confirm('Would you like to include special characters?');

  // Create a temporary string to store the characters based on the user's choices
  let temp = '';
  if (num) temp += '0123456789'; // Include numbers if the user chose to
  if (lower) temp += 'abcdefghijklmnopqrstuvwxyz'; // Include lowercase letters if the user chose to
  if (upper) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Include uppercase letters if the user chose to
  if (special) temp += '!@#$%^&*()_+~`|}{[]\\:;?><,./-='; // Include special characters if the user chose to

  // Generate the password by randomly selecting characters from the temporary string
  let passwd = '';
  for (let i = 0; i < len; i++) {
   passwd += temp[Math.floor(Math.random() * temp.length)];
  };

  // Set the value of the password field to the generated password
  password.value = passwd;
};

// Assign the init() function to the click event of the generate button
generate.onclick = init;
