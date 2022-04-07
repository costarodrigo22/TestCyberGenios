import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  .arrowLeft{
    transform: rotate(180deg);
    margin-right: 70px;
    fill: ${(props) => (props.active === false ? '#D2D4D9' : '#1D2527')}
  }
  .arrowRight{
    margin-left: 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1130px){
    overflow-x: auto;
    ::-webkit-scrollbar {
      height: 6px;
    }

  ::-webkit-scrollbar-track {
    background: #D2D4D9;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1D2527;
    border-radius: 10px;
    border: 1px solid #D2D4D9;
    width: 20px;
  }
  }
`;

export const Card = styled.div`
  width: 280px;
  max-width: 100%;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .carOne{
    margin-bottom: -60px;
    z-index: 1;
  }
  .carTwo{
    margin-bottom: -30px;
    z-index: 1;
  }
  .carThree{
    margin-bottom: -50px;
    z-index: 1;
  }

`;

export const CardGroup = styled.div`
  width: 280px;
  max-width: 100%;
  height: 360px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 24px;
  padding: 34px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title{
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-group{
    width: 100%;
  }

  .info{
    width: 100%;
    height: 20px;
    margin-bottom: 25px;

    display: flex;
    align-items: center;

    p{
      margin-left: 24px;
      font-size: 16px;
    }
  }

  button{
    width: 100%;
    height: 50px;
    border-radius: 21px;
    border: none;
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`;
