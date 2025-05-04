import { JSX, useState } from 'react';
import { CreateTaskButton } from '../../entities/footer/ui/CreateTaskButton/CreateTaskButton';
import { CreateTaskForm } from '../../entities/footer/ui/CreateTaskForm/CreateTaskForm';
import { Modal } from '../../shared/ui/Modal/Modal';

export const CreateTaskFeature = (): JSX.Element => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <>
      <CreateTaskButton
        setIsActive={setModalActive}
      />

      <Modal active={modalActive} setActive={setModalActive} title='Создать задачу'>
        <CreateTaskForm onClose={setModalActive} />
      </Modal>
    </>
  );
};
