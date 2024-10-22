"use client";
import React from "react";
import styled from "@emotion/styled";
import TryBallInput from "../atoms/TryBallInput";
import TryHistory from "../organisms/TryHistory";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Description = styled.p``;

interface Props {}

const BaseballPage = ({}: Props) => {
  return (
    <Container>
      <Title>⚾️ 숫자 야구 게임</Title>
      <Description>1~9까지의 수를 중복없이 3개 입력해주세요.</Description>
      <TryBallInput />
      <SubTitle>📄 결과</SubTitle>
      <TryHistory />
    </Container>
  );
};

export default BaseballPage;
