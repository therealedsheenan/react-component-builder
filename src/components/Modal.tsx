import React, { FC, ReactNode, useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { ModalContext } from '../contexts/modal';

interface IModalComponentProps {
  isOpen?: boolean;
  width?: string;
  height?: string;
  children: ReactNode;
}

const ModalComponent: FC<IModalComponentProps> = (
  props: IModalComponentProps
) => {
  // Only trigger default isOpen prop once
  const [isDefaultPropTriggered, setIsDefaultPropTriggered] = useState(false);

  return (
    <ModalContext.Consumer>
      {modalProps => {
        // Set modal's open prop to true if the isOpen prop from the ModalComponent is true
        if (props.isOpen && !isDefaultPropTriggered) {
          modalProps.toggleModal('1');
          setIsDefaultPropTriggered(true);
        }

        return (
          <Modal
            open={modalProps.isModalOpen}
            width={props.width}
            height={props.height}
            closeOnDocumentClick={true}
          >
            <Modal.Content>{props.children}</Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => modalProps.toggleModal('1')}>
                Close
              </Button>
            </Modal.Actions>
          </Modal>
        );
      }}
    </ModalContext.Consumer>
  );
};

ModalComponent.defaultProps = {
  isOpen: true,
  width: '500px',
  height: '300px'
};

export default ModalComponent;
