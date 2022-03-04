import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  width: 85%;
  align-self: center;
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 1%;
  padding-left: 10;
  border: 2px #979797;
`;

export const Title = styled.Text`
  font-size: 30;
  color: #000;
`;

export const ContainerControls = styled.View`
  flex-direction: row;
  width: 40%;
  align-self: center;
  right: 10%;
`;

export const Increment = styled.TouchableOpacity`
  width: 30%;
  margin-horizontal: 5%;
  background-color: #979797;
  align-items: center;
  justify-content: center;
`;
export const TextIncrement = styled.Text`
  font-size: 30;
`;

export const Decrement = styled.TouchableOpacity`
  width: 30%;
  margin-horizontal: 5%;
  background-color: #979797;
  align-items: center;
  justify-content: center;
`;
export const TextDecrement = styled.Text`
  font-size: 30;
`;

export const Remove = styled.TouchableOpacity`
  width: 30%;
  margin-horizontal: 5%;
  background-color: #979797;
  align-items: center;
  justify-content: center;
`;
export const TextRemove = styled.Text`
  font-size: 30;
`;
