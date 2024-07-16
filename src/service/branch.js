import axios from "./api";

const BranchService = {
  async getBranchs() {
    const { data } = await axios.get("/filials");
    return data;
  },

  async getBranch(id) {
    const { data } = await axios.get(`/groups/filial/${id}`);
    return data;
  },
  async addBranch(branch) {
    const { data } = await axios.post("/filials/add", branch);
    return data;
  },
  async updateBranch(id, branch) {
 
    const { data } = await axios.put(`/filials/update/${id}`, branch);
    return data;
  },

  async deleteBranch(id) {
    const { data } = await axios.delete(`/filials/delete/${id}`);
    return data;
  },
};

export default BranchService;
