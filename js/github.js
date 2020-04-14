class Github {
  constructor() {
    this.client_id = "eded0a8602902d1750ac";
    this.client_secret = "607e7f28217ea20f70325ebfa73695f2f74473d7";
    this.repos_count = 5;
    this.repos_sort = "crated: asc";
  }

  // Get Users
  async getUser(user) {
    const profileData = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Get Repos
    const reposData = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileData.json();
    const repos = await reposData.json();
    return {
      profile,
      repos,
    };
  }
}
