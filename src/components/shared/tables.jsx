import { Button, Table } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

function AllTables({ branchs, deletBranch, updateBranch }) {
  return (
    <Table className="font-mono">
      <Table.Head className="border-b border-[#FFCF23]">
        <Table.HeadCell>Nomi</Table.HeadCell>
        <Table.HeadCell>joylashuv</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {branchs &&
          branchs?.map((item) => (
            <Table.Row
              key={item?._id}
              className="bg-white uppercase dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{item?.title}</Table.Cell>
              <Table.Cell>{item?.address}</Table.Cell>
              <Table.Cell>
                <Button.Group outline="true">
                  <Button
                    size="xs"
                    color="gray"
                    onClick={() => updateBranch(item?._id)}
                  >
                    <BiEdit color="#3C4C99" size="16" />
                  </Button>
                  <Button
                    size="xs"
                    color="gray"
                    onClick={() => deletBranch(item?._id)}
                  >
                    <MdDeleteForever color="red" size="16" />
                  </Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
}

export default AllTables;
