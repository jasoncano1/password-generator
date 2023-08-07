const init = () => {
  let len = prompt('Enter your password length (8-128 characters):');

  if (len < 8 || len > 128 || isNaN(len)) {
    alert('Please enter a number between 8 and 128');
    return init();
  };

  let num = confirm('Would you like to include numbers?');
  let upper = confirm('Would you like to include uppercase letters?');
  let lower = confirm('Would you like to include lowercase letters?');
  let special = confirm('Would you like to include special characters?');

  let temp = '';
  if(num) temp += '0123456789';
  if(lower) temp += 'abcdefghijklmnopqrstuvwxyz';
  if(upper) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(special) temp += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  let passwd = '';
  for (let i = 0; i < len; i++) {
   passwd += temp[Math.floor(Math.random() * temp.length)];
  };

  password.value = passwd;
};

generate.onclick = init;

