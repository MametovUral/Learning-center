import BranchService from "../service/branch";
import { useEffect, useRef, useState } from "react";
import useBranchStore from "../stores/branch-store";
import AllTables from "../components/shared/tables";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { toast } from "sonner";
import ModalCard from "../components/shared/modal-card";
import useTemporaryStore from "../stores/temporary-store";
import BranchTable from "../components/admin-tables/branch-table";

function AdminTables() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditeModal, setOpenEditeModal] = useState(false);
  const [branchName, setBranchName] = useState("");
  const [branchLocation, setBranchLocation] = useState("");

  const { branchs, branchStart, branchSuccsess, branchFailure } =
    useBranchStore();
  const { temporary, temporarySuccess } = useTemporaryStore();

  async function getBranchs() {
    branchStart();
    try {
      const res = await BranchService.getBranchs();
      branchSuccsess(res);
    } catch (error) {
      console.log(error);
      branchFailure(error);
    }
  }

  async function deletBranch(id) {
    try {
      const res = await BranchService.deleteBranch(id);
      toast.success(res.message);
      getBranchs();
    } catch (error) {
      console.log(error);
    }
  }

  async function hadleSubmit(e) {
    e.preventDefault();

    const newBranch = {
      title: branchName,
      address: branchLocation,
    };
    try {
      const res = await BranchService.addBranch(newBranch);
      console.log(res);
      toast.success(res.message);
      setOpenModal(false);
      getBranchs();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateBranch(id) {
    setOpenEditeModal(true);
    try {
      const res = await BranchService.getBranch(id);
      temporarySuccess(res);
      setBranchName(res[0]?.filial?.title);
      setBranchLocation(res[0]?.filial?.address);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const updateBranch = {
      title: branchName,
      address: branchLocation,
    };

    try {
      const res = await BranchService.updateBranch(
        temporary && temporary[0]?.filial?._id,
        updateBranch
      );
      toast.success(res.message);
      setOpenEditeModal(false);
      getBranchs();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBranchs();
  }, []);

  return (
    <section className="w-full pt-5">
      <div className="border-b mb-5">
        <BranchTable />
      </div>
      <div className="border-b mb-5">
        <div className="flex justify-between items-center mb-5">
          <h5 className="font-mono font-bold text-2xl uppercase  text-[#3C4C99]">
            Fanlar
          </h5>
          <Button
            pill
            className="border-[#3C4C99] font-mono text-[#3C4C99] font-bold bg-[#FFD126]"
          >
            Fan qo'shish
          </Button>
        </div>
        <div className="overflow-x-auto">
          <AllTables branchs={branchs} />
        </div>
      </div>
      <div className="border-b mb-5">
        <div className="flex justify-between items-center mb-5">
          <h5 className="font-mono font-bold text-2xl uppercase  text-[#3C4C99]">
            Xonalar
          </h5>
          <Button
            pill
            className="border-[#3C4C99] font-mono text-[#3C4C99] font-bold bg-[#FFD126]"
          >
            Fan qo'shish
          </Button>
        </div>
        <div className="overflow-x-auto">
          <AllTables branchs={branchs} />
        </div>
      </div>
      <div className="border-b mb-5">
        <div className="flex justify-between items-center mb-5">
          <h5 className="font-mono font-bold text-2xl uppercase text-[#3C4C99]">
            Guruhlar
          </h5>
          <Button
            pill
            className="border-[#3C4C99] font-mono text-[#3C4C99] font-bold bg-[#FFD126]"
          >
            Fan qo'shish
          </Button>
        </div>
        <div className="overflow-x-auto">
          <AllTables branchs={branchs} />
        </div>
      </div>
      <ModalCard
        openModal={openEditeModal}
        setOpenModal={setOpenEditeModal}
        inputName={branchName}
        setInputName={setBranchName}
        inputNameSecond={branchLocation}
        setInputNameSecond={setBranchLocation}
        onSubmit={handleUpdate}
      />
      <ModalCard
        openModal={openModal}
        setOpenModal={setOpenModal}
        inputName={branchName}
        setInputName={setBranchName}
        inputNameSecond={branchLocation}
        setInputNameSecond={setBranchLocation}
        onSubmit={hadleSubmit}
      />
    </section>
  );
}

export default AdminTables;
