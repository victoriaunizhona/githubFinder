// Init github
github = new GitHub;


ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input even listener
// 
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {

    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === "Not Found") {
          // Show alert
          ui.showAlert("User not found", "alert alert-danger");

        } else {
          // Show profile

          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })

  } else {
    // Clear profile
    ui.clearProfile();
  }
});

// The keydown events happens when a key is pressed down, and then keyup – when it’s released.


