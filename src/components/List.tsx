import React, { FC } from 'react';
import { List } from 'semantic-ui-react';

interface IListComponentProps {
  li: string[];
}

const ListComponent: FC<IListComponentProps> = (props: IListComponentProps) => {
  return (
    <List>
      {props.li.map((listItem, idx) => (
        <List.Item key={idx}>{listItem}</List.Item>
      ))}
    </List>
  );
};

ListComponent.defaultProps = {
  li: []
};

export default ListComponent;
