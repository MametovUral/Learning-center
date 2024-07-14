import axios from "./api";

const StudentServie = {
  async addStudent(student) {
    console.log(student);
    const { data } = await axios.post("/students/add", student);
    return data;
  },
  async getAllStudent() {
    const { data } = await axios.get("/students");
    return data;
  },
  async updateStudent(id, student) {
    const { data } = await axios.put(`/students/update/${id}`, { student });
  },

  async deleteStudent(id) {
    const { data } = await axios.delete(`students/delete/${id}`);
  },
};
export default StudentServie;
