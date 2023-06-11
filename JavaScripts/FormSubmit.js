const myForm = document.getElementById('myForm');
const recipient = 'Joshua.Michalik@triosstudent.com';
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const sender = document.getElementById('sender').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    const mailtoLink = `mailto:${recipient}?subject=${subject}&amp;body=${body}&amp;cc=${sender}`;

    window.location.href = mailtoLink;
});