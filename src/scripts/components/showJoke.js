const getAnotherJokeBtn = () => {
  document.querySelector('#getPunchlineBtn').outerHTML = '<button type="button" class="btn btn-dark" id="getJokeBtn">Get Another Joke</button>';
};

const showJoke = (joke) => {
  document.querySelector('#jokeContainer').innerHTML = `
  <div class="joke-card">
    <h6 class="card-title">${joke.setup}</h6>
    <p class="card-text" id="punchlineContainer">${joke.delivery}</p>
    <button type="button" class="btn btn-dark" id="getPunchlineBtn">Get Punchline</button>
  </div>`;
  document.querySelector('#punchlineContainer').style.display = 'none';
};

export { showJoke, getAnotherJokeBtn };
