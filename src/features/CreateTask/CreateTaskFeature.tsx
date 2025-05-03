import { JSX, useState } from 'react';
import { CreateTaskButton } from '../../entities/footer/ui/CreateTaskButton/CreateTaskButton';

export const CreateTaskFeature = (): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <CreateTaskButton
      isActive={modalActive}
      setIsActive={setModalActive}
      title={'Создать задачу'}
    />
  );
};
