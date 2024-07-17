import AllTables from "../shared/tables";

function BranchTable() {
  const [openModal, setOpenModal] = useState(false);

  const { branchs, branchStart, branchSuccsess, branchFailure } =
    useBranchStore();
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h5 className="font-mono font-bold text-2xl uppercase  text-[#3C4C99]">
          Filiallar
        </h5>
        <Button
          pill
          className="border-[#3C4C99] font-mono text-[#3C4C99] font-bold bg-[#FFD126]"
          onClick={() => setOpenModal(true)}
        >
          Filial qo'shish
        </Button>
      </div>
      <div className="overflow-x-auto ">
        <AllTables
          branchs={branchs}
          deletBranch={deletBranch}
          updateBranch={updateBranch}
        />
      </div>
    </div>
  );
}

export default BranchTable;
