
window.onload = () => {
    // When page loads, check user login state
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            const googleUserId = user.uid;
            getNotes(googleUserId);

        } else {
            // If not logged in, redirect user to the login page
            window.location = 'index.html'; // If not logged in, navigate back to login page.
        }
    });
};


const getNotes = (userId) => {
    console.log(userId);
    // Get user's notes from the database
    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.on('value', snapshot => {
        writeNotesToHtml(snapshot.val());
    });
};

const writeNotesToHtml = (data) => {
    const noteRenderArea = document.querySelector('#app');
    for (let noteKey in data) {
        // Create html string for one note
        let noteHtml = createHtmlForNote(data[noteKey]);
        // append new HTML to the rendering area's existing HTML
        noteRenderArea.innerHTML += noteHtml;
    }
    // Put all html into page at once
};

const createHtmlForNote = (note) => {
    // TODO
    return `
        <div class='column is-one-third'>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${note.title}</p>
                </header>
                <div class="card-content">
                    <div class="content">
                        ${note.text}    
                    </div>
                </div>
            </div>
        </div>
    `;
};