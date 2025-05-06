const formData = {
    email: '',
    message: '',
}

const STORAGE_KEY = 'data'

const form = document.querySelector('.feedback-form')

populateData();

form.addEventListener('submit', handleSubmitForm);
form.addEventListener('input', handleFormInput);

function handleSubmitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData.email = '';
  formData.message = '';
}

function handleFormInput(e) {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateData() {
  const savedLSData = localStorage.getItem(STORAGE_KEY);
  if (!savedLSData) return;

  try {
    const dataFromLS = JSON.parse(savedLSData);
    
    for (const [key, value] of Object.entries(dataFromLS)) {
      if (form.elements[key]) {
        form.elements[key].value = value;
        formData[key] = value; 
      }
    }
  }

  catch (error) {
    alert("Something went wrong");
  }
}




const input = document.querySelector('input[name="email"]');

input.addEventListener('focus', () => {
  input.placeholder = 'Type area';
});

input.addEventListener('blur', () => {
  input.placeholder = '';
});

