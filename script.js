document.getElementById('voterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!name || !age) {
        alert('Both fields are required!');
        return;
    }

    const ageNum = Number(age);

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNum >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); 
    })
    .then((message) => {
        alert(message);
    })
    .catch((errorMessage) => {
        alert(errorMessage);
    });
});
