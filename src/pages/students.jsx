import { useEffect, useRef, useState } from "react";
import StudentServie from "../service/student";
import useStudentStore from "../stores/student-strore";
import { StudentCard } from "../components/shared/student-card";
import {
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
} from "flowbite-react";
import FillLoading from "../components/shared/fill-loading";

function Students() {
  const {
    isLoading,
    students,
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
  } = useStudentStore();

  const [openModal, setOpenModal] = useState(true);

  const nameInputRef = useRef();
  const lastInputRef = useRef();
  const fileInputRef = useRef();
  const selectInputRef = useRef();

  console.log(students);
  async function getStudents() {
    getUsersStart();
    try {
      const res = await StudentServie.getAllStudent();
      getUsersSuccess(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <section className="">
      <div className="w-full flex items-center justify-between border-b py-2 mb-4">
        <span className="font-mono uppercase  font-bold text-[#3C4C99]">
          Jami o'quvchilar soni - {students?.length}
        </span>

        <Button
          pill
          className="border-[#3C4C99] font-mono text-[#3C4C99] font-bold bg-[#FFD126]"
          onClick={() => setOpenModal(true)}
        >
          O'quvchi qo'shish
        </Button>
      </div>
      <div className="grid grid-cols-4  gap-6">
        {isLoading && <FillLoading />}
        {students?.map((student) => (
          <StudentCard key={student._id} student={student} />
        ))}
      </div>

      <Modal
        dismissible
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={nameInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <TextInput ref={nameInputRef} placeholder="Ism" required />
            </div>
            <div>
              <TextInput
                ref={lastInputRef}
                type="text"
                placeholder="Familya"
                required
              />
            </div>
            <div id="fileUpload">
              <FileInput ref={fileInputRef} id="file" className="" />
            </div>
            <div>
              <Select
                ref={selectInputRef}
                onChange={handleChange}
                defaultValue="def"
                required
              >
                <option value="def" selected >
                  Filiallardan birini tanlang
                </option>
                <option value="1">Canada</option>
                <option value="2">France</option>
                <option value="3">Germany</option>
              </Select>
            </div>

            <div className="w-full">
              <Button className="w-full">Qo'shish</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Students;
