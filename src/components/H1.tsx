import React, { FC } from 'react';

interface IH1ComponentProps {
  text: string;
}

const H1Component: FC<IH1ComponentProps> = (props: IH1ComponentProps) => (
  <h1>{props.text}</h1>
);

H1Component.defaultProps = {
  text: ''
};

export default H1Component;
