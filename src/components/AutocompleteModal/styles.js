import React from 'react';
import {Modal, FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';

const NModal = styled.Modal.attrs(props => ({
  animationType: 'slide',
  transparent: true,
  visible: props.visible,
  presentationStyle: 'overFullScreen',
}))``;

const Background = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = props => (
  <NModal {...props}>
    <Background>{props.children}</Background>
  </NModal>
);

export const Box = styled.View`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 3px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #111;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #666;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #eee;
  background: #fff;
  font-size: 15px;
  color: #666;
  padding: 0 10px;
  margin-top: 10px;
`;

export const ListItems = styled.FlatList`
  border: 1px solid #eee;
  padding: 0;
  height: 50%;
`;

const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  line-height: 40px;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

const ItemText = styled.Text`
  font-size: 15px;
  line-height: 40px;
  color: #555;
`;

export const Item = props => (
  <ItemContainer onPress={props.onPress} color={props.color}>
    <ItemText>{props.title}</ItemText>
  </ItemContainer>
);
