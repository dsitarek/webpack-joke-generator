const loadMainPage = () => {
  document.querySelector('#app').innerHTML = `
        <div id="mainContainer">
            <div id="jokeContainer">
              <div class="joke-card">
                <button type="button" class="btn btn-success first-joke-btn" id="getJokeBtn">Get Joke</button>
              </div>
            </div>
            <div id="punchlineContainer"></div>
        </div>`;
};

export default loadMainPage;
