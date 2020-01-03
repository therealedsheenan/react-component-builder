import React, { FC } from 'react';

interface IParagraphComponentProps {
  text: string;
}

const ParagraphComponent: FC<IParagraphComponentProps> = (
  props: IParagraphComponentProps
) => <p>{props.text}</p>;

ParagraphComponent.defaultProps = {
  text: ''
};


export default ParagraphComponent;
