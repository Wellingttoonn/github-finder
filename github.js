class Github {
  constructor() {
    this.client_id = '5838fbde3c2076d21326';
    this.client_secret = '56ee9a54470c2339213b9febd3e3401a572d56f5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const resposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await resposResponse.json();

    return {
      profile,
      repos
    }
  }
}