/**
 * Initialize your data structure here.
 */

class Twitter {
  constructor() {
    this.posts = {};
    this.following = {};
    this.time = 0;
  }

  postTweet(userId, tweetId) {
    const tweet = {
      tweetId: tweetId,
      time: this.time,
    };
    if (this.posts[userId]) {
      this.posts[userId].push(tweet);
    } else {
      this.posts[userId] = [tweet];
    }
    this.time++;
  }

  getNewsFeed(userId) {
    const myTweets = this.posts[userId];
    const following = this.following[userId];
    const theirTweets = following.map((userId) => this.posts[userId])[0];
    const allTweets = myTweets.concat(theirTweets);
    return allTweets
      .sort((a, b) => b.time - a.time)
      .map((tweet) => tweet.tweetId);
  }

  follow(followerId, followeeId) {
    if (this.following[followerId]) {
      this.following[followerId].push(followeeId);
    } else {
      this.following[followerId] = [followeeId];
    }
  }

  unfollow(followerId, followeeId) {}
}

const twitter = new Twitter();
twitter.postTweet(1, 1);
twitter.postTweet(1, 2);
twitter.postTweet(2, 3);
twitter.postTweet(2, 6);
twitter.follow(1, 2);

// console.log(twitter);
console.log(twitter.getNewsFeed(1));
