import React, { FC } from 'react';
import { Button } from 'semantic-ui-react';

import { ModalContext } from '../contexts/modal';

interface IButtonComponentProps {
  text: string;
  modalKey?: string;
}

const ButtonComponent: FC<IButtonComponentProps> = (
  props: IButtonComponentProps
) => {
  if (props.modalKey) {
    return (
      <ModalContext.Consumer>
        {modalProps => (
          <Button onClick={() => modalProps.toggleModal(props.modalKey)}>
            {props.text}
          </Button>
        )}
      </ModalContext.Consumer>
    );
  }

  return <Button>{props.text}</Button>;
};

ButtonComponent.defaultProps = {
  text: '',
  modalKey: ''
};

export default ButtonComponent;
