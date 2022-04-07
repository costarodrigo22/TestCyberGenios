import styled from 'styled-components';
import homeImage from '../../assets/images/homeImage.png';

export const Container = styled.header`
  width: 100vw;
  aspect-ratio: 1.9;
  background: url(${homeImage});
  background-size: 100%;
  background-position: center 0;
  background-repeat: no-repeat;

  .menu-mobile{
    display: none;
  }

  nav{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  ul{
    display: flex;
    align-items: center;
    width: 80%;
  }

  li{
    margin: 0 auto;
    color: ${({ theme }) => theme.whiteColor};
  }

  // Responsividade
  @media(max-width: 850px){
    .menu-mobile{
      display: flex;
      margin: 20px;
    }

    .btn-active{
      display: ${(props) => (props.active === true ? 'none' : 'flex')};
      background: transparent;
      border: none;
    }

    nav{
      height: 100vh;
      width: 270px;
      display: ${(props) => (props.active === true ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      position: fixed;
      z-index: 2;

      background: ${({ theme }) => theme.whiteColor};
      border-radius: 0 20px 20px 0;
    }
    nav:hover{
      transition: all 1s ease-in-out;
    }

    ul{
      display: ${(props) => (props.active === true ? 'flex' : 'none')};
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: left;
      height: 100%;
    }

    li{
      width: 100%;
      margin-bottom: 32px;
      color: ${({ theme }) => theme.blackColor};
    }
    img{
      filter: invert(1);
    }
  }
`;
