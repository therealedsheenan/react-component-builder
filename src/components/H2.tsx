import React, { FC } from 'react';

interface IH2ComponentProps {
  text: string;
}

const H2Component: FC<IH2ComponentProps> = (props: IH2ComponentProps) => (
  <h1>{props.text}</h1>
);

H2Component.defaultProps = {
  text: ''
};

export default H2Component;
