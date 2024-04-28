const baseUrl = "http://localhost:8080/api/users"

const UserAPI = {

  async getAll() {
    const response = await fetch(`${baseUrl}/`);
    return await response.json();
  },

  async delete(id) {
    await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
  }

};

export default UserAPI