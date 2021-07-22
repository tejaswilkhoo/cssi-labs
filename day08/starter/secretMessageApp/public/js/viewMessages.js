const getMessages = (number) => {

    const renderMessageAsHtml = (message) => {


        const passCodeInput = document.querySelector("#passcode");
        passCodeInput.value = "";
        const messageDisplay = document.querySelector("#message");
        messageDisplay.innerHTML = message;

    }


    const renderMessageAsHtml2 = (message) => {


        const passCodeInput = document.querySelector("#passcode2");
        passCodeInput.value = "";
        const messageDisplay = document.querySelector("#message2");
        messageDisplay.innerHTML = message;

    }




    if (number === 1) {
        console.log(number);
        const messageRef = firebase.database().ref();
        messageRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const passcodeAttempt = document.querySelector("#passcode").value;

            for (const recordKey in data) {
                const record = data[recordKey];
                const storedPasscode = record.passcode;

                if (passcodeAttempt === storedPasscode) {
                    console.log(`Message is: ${record.message}`);
                    renderMessageAsHtml(record.message);
                }
            }
    
        });
    }
        
    else {
        console.log(number);
        const messageRef = firebase.database().ref();
        messageRef.on('value', (snapshot) => {
            const data = snapshot.val();
            let passcodeAttempt = document.querySelector("#passcode2").value;

            for (const recordKey in data) {
                const record = data[recordKey];
                const storedPasscode = record.passcode;

                if (passcodeAttempt === storedPasscode) {
                    console.log(`Message is: ${record.message}`);
                    renderMessageAsHtml2(record.message);
                }
            }
        });
    }





}
