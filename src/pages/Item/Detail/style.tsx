import styled from '@emotion/styled';

export const Container = styled.main`
  padding: 0 2.44rem 2.44rem 2.44rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
`;

export const ItemBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* gap: 0 1rem; */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0 0.2rem;
`;

export const CommentsContainer = styled.section`
  height: 100%;
  overflow-y: scroll;
`;

export const CommentNumberWrapper = styled.div`
  padding: 1rem 1.75rem;
`;

export const ReviewBox = styled.article`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
