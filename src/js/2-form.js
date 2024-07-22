const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email.trim();
    formData.message = parsedData.message.trim();
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
