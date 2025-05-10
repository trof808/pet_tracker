import { JSX, useState } from 'react';
import { CreateTaskButton } from '../../entities/footer/ui/CreateTaskButton/CreateTaskButton';
import { CreateTaskForm } from '../../entities/footer/ui/CreateTaskForm/CreateTaskForm';
import { Modal } from '../../shared/ui/Modal/Modal';
import { useCreateEvents } from '../../entities/events/hooks/useCreateEvents';

export const CreateTaskFeature = (): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);

  const { mutate, isPending } = useCreateEvents();
  return (
    <>
      <CreateTaskButton
        setIsActive={setModalActive}
      />

      <Modal active={modalActive} setActive={setModalActive} title='Создать задачу'>
        <CreateTaskForm onClose={setModalActive}  isPending={isPending} mutate={mutate} />
      </Modal>
    </>
  );
};
