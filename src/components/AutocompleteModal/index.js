import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Box,
  Title,
  Description,
  Input,
  ListItems,
  Item,
} from './styles';

const AutocompleteModal = forwardRef((props, ref) => {
  const data = props.data;
  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(props.visible);
  const [selecteds, setSelecteds] = useState([]);

  function handleTextChange(string) {
    const searchTerm = string.toLowerCase();
    const itemsFound = data.filter(
      item => item.label.toLowerCase().indexOf(searchTerm) > -1,
    );
    setItems(itemsFound);
  }

  function select(item) {
    props.onSelect(item);
    setSelecteds([item]);
    setVisible(false);
  }

  useImperativeHandle(ref, () => ({
    show: value => {
      setVisible(value);
    },
    selecteds: () => {
      return selecteds;
    },
  }));

  return (
    <>
      {props.visible && <StatusBar hidden />}
      <Container visible={visible} closeAction={() => setVisible(false)}>
        <Box>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <Input
            placeholder="Digite algo para buscar..."
            onChangeText={value => handleTextChange(value)}
          />
          <ListItems
            data={items}
            renderItem={({item, index}) => (
              <Item
                title={item.label}
                color={`${index % 2 === 0 ? '#fff' : '#eee'}`}
                onPress={() => select(item)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </Box>
      </Container>
    </>
  );
});

export default AutocompleteModal;
