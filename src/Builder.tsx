import React, { Fragment } from 'react';

import data from './data/data2.json';
import { builderComponents } from './config';
import { ModalProvider } from './contexts/modal';

const MODAL_COMPONENT = 'ModalComponent';

/**
 * Main logic for iterating the JSON file.
 *
 * @param obj {Object} - JSON object data
 * @param key {Number} - Index number
 */
export const interpretComponentFromJSON = (
  obj: Object,
  key?: number | undefined
) => {
  const content = obj['Content'];
  const childrenObject = obj['Children'];

  if (!content) {
    return null;
  }

  // If there is still a Children object, recursively fire the current function again
  // Otherwise, assign a blank array.
  const children = childrenObject
    ? Object.values(childrenObject).map(interpretComponentFromJSON)
    : [];

  if (content.type !== MODAL_COMPONENT) {
    const Type = builderComponents[content.type] || Fragment;
    return (
      <Type key={key} {...content.props}>
        {children}
      </Type>
    );
  }

  const trigger = obj['Trigger'];
  const triggerChildrenObject = trigger['Children'];
  const triggerContent = trigger['Content'];
  const TriggerComponent = builderComponents[triggerContent.type] || Fragment;
  const ModalComponent = builderComponents[content.type];
  const triggerChildren = triggerChildrenObject
    ? Object.values(triggerChildrenObject).map(interpretComponentFromJSON)
    : [];

  return (
    <ModalProvider key={key} modalKey={content.props.modalKey}>
      <TriggerComponent {...triggerContent.props}>
        {triggerChildren}
      </TriggerComponent>
      <ModalComponent {...content.props}>{children}</ModalComponent>
    </ModalProvider>
  );
};

const Builder: React.FC = () => {
  return <Fragment>{interpretComponentFromJSON(data)}</Fragment>;
};

export default Builder;
