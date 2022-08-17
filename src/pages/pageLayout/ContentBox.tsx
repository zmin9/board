import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import mediaQuery from '../../styles/mediaQuery';

type ContentBoxType = {
  widthFitContent?: boolean
} & PropsWithChildren;

const Container = styled.section<ContentBoxType>`
  background: ${({ theme }) => theme.background};
  padding: 16px 24px;
  border-radius: 16px;
  width: ${({ widthFitContent }) => widthFitContent ? 'fit-content' : '70vw'};
  max-width: 600px;
  height: fit-content;

  ${mediaQuery.mobile} {
    width: 100vw;
    border-radius: 32px 32px 0 0;
    padding-top: 16px;
    height: 100%;
  }
`;

const ContentBox = ({ widthFitContent = false, children }: ContentBoxType) => {
  return (
    <Container widthFitContent={widthFitContent}>
      {children}
    </Container>
  );
};

export default ContentBox;
