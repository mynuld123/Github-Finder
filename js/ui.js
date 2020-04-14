class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class='card card-body mt-3'>
        <div class='row'>
            <div class='col-md-3'>
              <img class='img-fluid mb-2' src='${user.avatar_url}'>
              <a href='${user.html_url}' target='_blank' class='btn btn-info btn-block'>View Profile</a>
            </div>
            <div class='col-md-9'>
              <span class='badge badge-info p-2'>Public Repos: ${user.public_repos}</span>
              <span class='badge badge-success p-2'>Public Gists: ${user.public_gists}</span>
              <span class='badge badge-warning p-2'>Followers: ${user.followers}</span>
              <span class='badge badge-danger p-2'>Following: ${user.following}</span>
              <br><br>
              <ul class='list-group'>
                <li class='list-group-item'><strong>Company: </strong>${user.company}</li>
               <li class='list-group-item'><strong>Website/Blog: </strong>${user.blog}</li>
                <li class='list-group-item'><strong>Location: </strong>${user.location}</li>
                <li class='list-group-item'><strong>Member Since: </strong>${user.created_at}</li>
              </ul>
            </div>
        </div>
    </div>

    <h3 class='mb-3 mt-3'>Latest Repos</h3>
    <div id='repos'></div>
    `;
  }

  // Show Repos
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `<div class='card card-body mb-3'>
        <div class='row'>
          <div class='col-md-6'>
            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
          </div>
          <div class='col-md-6'>
            <span class='badge badge-info p-2'>Stars: ${repo.stargazers_count}</span>
            <span class='badge badge-success p-2'>Watchers: ${repo.watchers}</span>
            <span class='badge badge-info p-2'>Forks: ${repo.forms}</span>
          </div>
        </div>
      </div>`;
    });

    // Output Repos
    document.getElementById("repos").innerHTML = output;
  }

  // Clear Profile

  clearProfile() {
    this.profile.innerHTML = "";
  }

  // show Alert
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    // Set Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
