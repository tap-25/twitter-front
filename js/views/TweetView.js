class TweetView {
    tweet;

    constructor(tweet) {
        this.tweet = tweet;
    }

    render() {
        return `
        <div class="tweet">
            <div class="content">
              <div class="tweet-header">
                <a class="screen-name-link" href="/${this.tweet.profile}">
                  <strong>${this.tweet.username}</strong>
                  <span class="username">@${this.tweet.profile}</span>
                </a>
                <small class="time username">
                  <span>9 hours ago</span>
                </small>
              </div>
              <div class="tweet-body">
                <p class="tweet-text">
                  ${this.tweet.content}
                </p>
              </div>
              
              <div class="footer-actions" aria-label="Tweet actions">
                <div class="footer-action comment">
                  <button class="action-button action-comment" type="button">
                    <div class="icon-container" title="Comment">
                      <span class="icon far fa-comment"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${this.tweet.comments}</span>
                    </span>
                  </button>
                </div>

                <div class="footer-action reply">
                  <button class="action-button action-retweet" type="button">
                    <div class="icon-container" title="Retweet">
                      <span class="icon fas fa-retweet"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${this.tweet.retweets}</span>
                    </span>
                  </button>
                </div>
                <div class="footer-action like">
                  <button class="action-button action-like" type="button">
                    <div class="icon-container" title="Like">
                      <span class="icon far fa-heart"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${this.tweet.likes}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
    }

}