import React, { FC } from 'react';
import { ModalContext } from '../contexts/modal';

interface ILinkComponentProps {
  text: string;
  url: string;
  modalKey?: string;
}

const LinkComponent: FC<ILinkComponentProps> = (props: ILinkComponentProps) => {
  if (props.modalKey) {
    return (
      <ModalContext.Consumer>
        {modalProps => (
          <a
            onClick={() => modalProps.toggleModal(props.modalKey)}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.text}
          </a>
        )}
      </ModalContext.Consumer>
    );
  }
  return (
    <a href={props.url} target="_blank" rel="noopener">
      {props.text}
    </a>
  );
};

LinkComponent.defaultProps = {
  text: '',
  url: 'http://google.com',
  modalKey: ''
};

export default LinkComponent;
