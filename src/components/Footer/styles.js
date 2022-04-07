import styled from 'styled-components';
import carFooter from '../../assets/images/carFooter.png';

export const Container = styled.div`
  width: 100vw;
  aspect-ratio: 2.5;

  display: flex;
  justify-content: flex-end;

  background: url(${carFooter});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 center;

  @media(max-width: 800px){
    padding: 0;
  }
`;

export const Overlay = styled.div`
  width: 55%;
  height: 100%;
  top: 0;
  left: 0;
  padding-right: 157px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  background: linear-gradient(270deg, rgba(29, 37, 39, 0.6) 0%, rgba(29, 37, 39, 0.6) 24.79%, rgba(29, 37, 39, 0.534) 54.48%, rgba(29, 37, 39, 0.006) 78.67%, rgba(29, 37, 39, 0) 100%);
  backdrop-filter: blur(3px);

  span{
    font-size: 56px;
    color: ${({ theme }) => theme.whiteColor};
  }

  p{
    text-align: end;
    line-height: 40px;
    margin: 16px 0;
    color: ${({ theme }) => theme.whiteColor};
  }

  button{
    padding: 1rem 7rem;
    color: ${({ theme }) => theme.whiteColor};
    border: 1px solid ${({ theme }) => theme.whiteColor};
    background: transparent;
    border-radius: 4px;
  }

  @media(max-width: 760px){
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      width: 100%;
    }
  }
`;
