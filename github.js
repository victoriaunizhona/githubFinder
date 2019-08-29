class GitHub {
  constructor() {
    this.client_id = "8e5caf02212501e2f134";
    this.client_secret = "951915bc786a36ce9a1e048c4d1cd0484f45bf06";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // Using your client_id and client_secret does not authenticate as a user, it will only identify your OAuth application to increase your rate limit

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profile,
      repos: repos,
    }

  }

}