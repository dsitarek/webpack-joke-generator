const loadMainPage = () => {
  document.querySelector('#app').innerHTML = `
        <div id="mainContainer">
            <div id="jokeContainer">
            <button type="button" class="btn btn-success" id="getJokeBtn">Get Joke</button>
            </div>
            <div id="punchlineContainer"></div>
        </div>`;
};

export default loadMainPage;
