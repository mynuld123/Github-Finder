// Init Github
const github = new Github();

// Init UI
ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// Add event

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("Profile Not Found!", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear input
    ui.clearProfile();
  }
});
