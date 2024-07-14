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
  Spinner,
  TextInput,
} from "flowbite-react";
import FillLoading from "../components/shared/fill-loading";
import useAuthStore from "../stores/use-auth-store";
import BranchService from "../service/branch";
import useBranchStore from "../stores/branch-store";
import useGroupStore from "../stores/group-store";
import GroupService from "../service/group";

function Students() {
  const {
    isLoading,
    students,
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
  } = useStudentStore();

  const { user } = useAuthStore();
  const { branchs, branchStart, branchSuccsess, branchFailure } =
    useBranchStore();

  const { groups, groupStart, groupSuccsess, groupFailure } = useGroupStore();

  const [openModal, setOpenModal] = useState(false);

  const nameInputRef = useRef("");
  const lastInputRef = useRef("");
  const fileInputRef = useRef("");
  const groupInputRef = useRef("");
  const branchInputRef = useRef("");

  async function getStudents() {
    getUsersStart();
    try {
      const res = await StudentServie.getAllStudent();
      getUsersSuccess(res);
    } catch (error) {
      getUsersFailure(error);
      console.log(error);
    }
  }

  async function getBranch() {
    branchStart();
    try {
      const res = await BranchService.getBranchs();
      branchSuccsess(res);
    } catch (error) {
      console.log(error);
      branchFailure(error);
    }
  }

  async function getGroup(id) {
    groupStart();
    try {
      const res = await GroupService.getGroups(id);
      groupSuccsess(res);
    } catch (error) {
      groupFailure(error);
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const addStudent = {
      auth: user?._id,
      name: nameInputRef.current.value,
      lastname: lastInputRef.current.value,
      filial: branchInputRef.current.value,
      groups: groupInputRef.current.value,
      photo: fileInputRef.current.value,
    };

    console.log(addStudent);
  };

  useEffect(() => {
    getStudents();
    getBranch();
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
          <form onSubmit={handleSubmit}>
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
                  ref={branchInputRef}
                  id="countries"
                  defaultValue="0"
                  required
                  onChange={(e) => getGroup(e.target.value)}
                >
                  <option value="0" disabled>
                    Filialni kiriting
                  </option>
                  {branchs?.map((item) => (
                    <option key={item?._id} value={item?._id}>
                      {`${item?.title} - ${item?.address}`}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  ref={groupInputRef}
                  id="countries"
                  defaultValue="0"
                  required
                  disabled={!groups}
                >
                  <option value="0" disabled>
                    Guruhni kiriting
                  </option>
                  {groups?.map((item) => (
                    <option key={item?._id} value={item?._id}>
                      {item?.title}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="w-full">
                <Button type="submit" className="w-full">
                  Qo'shish
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Students;
