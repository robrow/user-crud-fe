const baseUrl = "http://localhost:8080/api/users"

const UserAPI = {

  async getAll() {
    const response = await fetch(`${baseUrl}/`);
    return await response.json();
  },

  async create(user) {
    const response = await fetch(`${baseUrl}/`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  },

  async delete(id) {
    await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
  }

};

export default UserAPI