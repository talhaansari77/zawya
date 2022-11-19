import { View } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import commonStyles from "../utils/CommonStyles";

const Header = ({ LeftSide, Center, RightSide }) => {
  return (
    <Row>
      {LeftSide ? <LeftSide /> : <></>}
      {Center ? <Center /> : <></>}
      {RightSide ? <RightSide /> : <></>}
    </Row>
  );
};

export default Header;

const Row = styled(View, {
  flexDirection:'row',
  justifyContent: "space-between",
});
