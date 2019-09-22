const searchUser = document.querySelector('#searchUser');

const github = new Github();
const ui = new UI();

searchUser.addEventListener('keyup', (e)=> {
  let search = searchUser.value;

  if(search !== '') {
    github.getUser(search).then((data)=> {
      if(data.profile.message === 'Not Found') {
        // Show message in ui
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        
      }
    });
  } else {
    // Clean ui
    ui.clearProfile();
  }


})