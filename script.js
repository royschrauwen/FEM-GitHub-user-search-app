const searchButton = document.querySelector("#button-search");

const userName = document.querySelector(".profile-name");

searchButton.addEventListener("click", searchUser);

let user = "octocat";

function searchUser() {
  user = document.querySelector("#input-searchbar");

  let defaultURL = "https://api.github.com/users/";
  const urlToFetch = defaultURL.concat(user.value);

  fetch(urlToFetch)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      userName.textContent = data.name;

      document.querySelector(".profile-image").innerHTML =
        "<img src=" + data.avatar_url + ">";

      document.querySelector("#counter-repos").textContent = data.public_repos;
      document.querySelector("#counter-followers").textContent = data.followers;
      document.querySelector("#counter-following").textContent = data.following;
      document.querySelector(".profile-username").textContent =
        "@" + data.login;
      document.querySelector(".profile-date").textContent = data.created_at;
      document.querySelector(".profile-bio").textContent = data.bio;
      document.querySelector(".profile-bio").textContent =
        "This profile has no bio";
      document.querySelector("#location").textContent = data.location;
      document.querySelector("#website").textContent = data.html_url;
      document.querySelector("#twitter").textContent = data.twitter_username;
      document.querySelector("#company").textContent = data.company;
    })
    .catch(() => {
      console.error("Problem with getting data from API");
    });
}
