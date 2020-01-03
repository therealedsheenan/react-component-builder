import React, { FC, ReactNode } from 'react';
import { Container } from 'semantic-ui-react';

interface IBoxComponentProps {
  borderSize: string;
  children: ReactNode;
}

const BoxComponent: FC<IBoxComponentProps> = (props: IBoxComponentProps) => {
  const containerStyles = {
    border: `${props.borderSize} solid black`,
    padding: '2rem'
  };

  return <Container style={containerStyles}>{props.children}</Container>;
};

BoxComponent.defaultProps = {
  borderSize: '0px'
};

export default BoxComponent;
