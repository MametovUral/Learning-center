import { Button, Label, Modal, TextInput } from "flowbite-react";
function ModalCard(props) {
  const {
    openModal,
    setOpenModal,
    inputName,
    setInputName,
    inputNameSecond,
    setInputNameSecond,
    onSubmit,
  } = props;
  
  return (
    <Modal
      show={openModal}
      size="md"
      popup
      onClose={() => setOpenModal(false)}
      initialFocus={inputName}
    >
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label
                  className="font-mono"
                  htmlFor="filialName"
                  value="Filial nomi"
                />
              </div>
              <TextInput
                onChange={(e) => setInputName(e.target.value)}
                id="filialName"
                type="text"
                placeholder="Alfraganus"
                required
                value={inputName}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="font-mono"
                  htmlFor="location"
                  value="Joylashuvi"
                />
              </div>
              <TextInput
                id="location"
                placeholder="Qarshi"
                type="text"
                onChange={(e) => setInputNameSecond(e.target.value)}
                value={inputNameSecond}
                required
              />
            </div>

            <div className="w-full">
              <Button type="submit">Qo'shish</Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCard;
