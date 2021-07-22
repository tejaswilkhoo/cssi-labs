function isUpper(str) {
    return /[A-Z]/.test(str);
}

function isNumber(str) {
    return /[0-9]/.test(str);
}

const submitMessage = () => {
    console.log('Submitting message...');
    const inputLength = document.querySelector('#message').value.length;
    const passValue = document.querySelector('#passcode').value;
    console.log(inputLength);
    console.log(passValue);
    console.log(isUpper(passValue));

    if (inputLength > 10) {
        alert("Your message is too long.");
    }

    else if (!isUpper(passValue)) {
        alert("Please add a capital letter to your password.");
    }

    else if (!isNumber(passValue)) {
        alert("Please add a number to your password.");
    }

    else {

        const passcodeInput = document.querySelector('#passcode');
        const messageInput = document.querySelector('#message');
        const passcodeValue = passcodeInput.value;
        const messageValue = messageInput.value;

        //Send to firebase
        firebase.database().ref().push({
            message: messageValue,
            passcode: passcodeValue
        });

        // Clear values from input
        passcodeInput.value = '';
        messageInput.value = '';
    }
};

    

// const sendMessageButton = document.querySelector('.button');
// console.log(sendMessageButton);
// sendMessageButton.addEventListener('click', submitMessage);
