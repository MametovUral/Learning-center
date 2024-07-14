import axios from "./api";

const GroupService = {
  async getGroups() {
    const { data } = await axios.get("/groups");
    return data;
  },
  async getGroup(id) {
    const { data } = await axios.get(`/groups/filial/${id}`);
    return data;
  },
  async addGroup(group) {
    const { data } = await axios.post("/groups/add", group);
    return data;
  },
  async updateGroup(id) {
    const { data } = await axios.put(`/groups/update/${id}`);
    return data;
  },
  async deletGroup(id) {
    const { data } = await axios.delete(`/groups/delete/${id}`);
    return data;
  },
};

export default GroupService;
