const searchButton = document.querySelector("#button-search");

const userName = document.querySelector(".profile-name");

const url = "https://api.github.com/users/octocat";

searchButton.addEventListener("click", searchUser);

function searchUser() {
  let user = document.querySelector("#input-searchbar");
  console.log(user.value);

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      userName.textContent = data.name;

      document.querySelector("#counter-repos").textContent = data.public_repos;
      document.querySelector("#counter-followers").textContent = data.followers;
      document.querySelector("#counter-following").textContent = data.following;
      document.querySelector(".profile-username").textContent =
        "@" + data.login;
      document.querySelector(".profile-date").textContent = data.created_at;
    })
    .catch(() => {
      console.error("Problem with getting data from API");
    });
}
