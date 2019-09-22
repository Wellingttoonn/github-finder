class UI{
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src='${user.avatar_url}' class="img-fluid mb-2">
            <a href='${user.html_url}' class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
      
          <div class="col-md-9">
            <span class="badge badge-primary mt-1">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mt-1">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mt-1">Followers: ${user.followers}</span>
            <span class="badge badge-info mt-1">Following: ${user.following}</span>
      
            <ul class="list-group mt-3">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
          
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  showRepos(repos) {
    let output = '';

    repos.forEach((repo)=> {
      output += `
        <div class="card card-body my-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    })

    document.getElementById('repos').innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(msg, className) {
    // Check if there is a alert div
    const alertDiv = document.querySelector('.alert');

    if(alertDiv !== null) {
      this.removeAlert();
    }

    // Create new div and add parameters
    const div = document.createElement('div');
    div.innerText = msg;
    div.className = className;

    // Select ui elements and insert div
    const searchContainer = document.querySelector('.searchContainer'),
          search = document.querySelector('.search');

    searchContainer.insertBefore(div, search);

    // Remove div after 2 seconds
    setTimeout(this.removeAlert, 2000);
  }

  removeAlert() {
    document.querySelector('.alert').remove();
  }
}