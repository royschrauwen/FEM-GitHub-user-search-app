const searchButton = document.querySelector("#button-search");

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

      setData(data);
    })
    .catch(() => {
      console.error("Problem with getting data from API");
    });
}

window.onload = () => {
  searchUser();
};

function formatDate(date) {
  let joinedDate = new Date(date);
  return (
    joinedDate.getDate() +
    " " +
    joinedDate.toLocaleString("en-us", { month: "short" }) +
    " " +
    joinedDate.getFullYear()
  );
}

const userName = document.querySelector(".profile-name");

const profileImage = document.querySelector(".profile-image");
const publicRepos = document.querySelector("#counter-repos");
const githubFollowers = document.querySelector("#counter-followers");
const githubFollowing = document.querySelector("#counter-following");
const githubUsername = document.querySelector(".profile-username");
function setData(data) {
  userName.textContent = data.name;

  profileImage.innerHTML = "<img src=" + data.avatar_url + ">";

  publicRepos.textContent = data.public_repos;
  githubFollowers.textContent = data.followers;
  githubFollowing.textContent = data.following;
  githubUsername.innerHTML =
    '<a href="http://www.github.com/' +
    data.login +
    '" target="_blank">@' +
    data.login +
    "</a>";

  document.querySelector(".profile-date").textContent =
    "Joined " + formatDate(data.created_at);

  if (!data.bio) {
    document.querySelector(".profile-bio").textContent =
      "This profile has no bio";
  } else {
    document.querySelector(".profile-bio").textContent = data.bio;
  }

  if (!data.location) {
    document.querySelector("#location").textContent = "Not Available";
  } else {
    document.querySelector("#location").innerHTML =
      '<a href="https://www.google.com/maps/place/' +
      data.location +
      '" target="_blank">' +
      data.location +
      "</a>";
  }

  if (!data.html_url) {
    document.querySelector("#website").textContent = "Not Available";
  } else {
    document.querySelector("#website").innerHTML =
      '<a href="' +
      data.html_url +
      '" target="_blank">' +
      data.html_url +
      "</a>";
  }

  if (!data.twitter_username) {
    document.querySelector("#twitter").textContent = "Not Available";
  } else {
    document.querySelector("#twitter").innerHTML =
      '<a href="http://www.twitter.com/' +
      data.twitter_username +
      '" target="_blank">@' +
      data.twitter_username +
      "</a>";
  }

  document.querySelector("#company").textContent = data.company;
}
