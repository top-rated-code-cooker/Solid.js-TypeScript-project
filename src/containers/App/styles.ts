import { styled } from 'solid-styled-components';

export default styled('div')`
  display: flex;

  .app__content {
    padding: 30px;
    flex: 1;
    overflow-x: hidden;
    height: 100vh;

    .main--heading {
      margin-bottom: 30px;
      color: ${({ theme }) => theme?.colors?.primaryText};
      display: flex;
      justify-content: space-between;
    }

    .heading {
      font-size: 1.5em;
      color: ${({ theme }) => theme?.colors.primaryText};
    }

    .sub--heading {
      font-size: 1em;
      color: ${({ theme }) => theme?.colors.primaryText};
      margin-bottom: 5px;
      margin-top: 40px;
    }


    .btn-group {
      display: flex;
      max-width: 1192px;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      flex-wrap: wrap;

      @media(max-width: 560px) {
        > * {
          flex: auto !important;
          width: 100%;
        }
      }

      h4 {
        color: ${({ theme }) => theme.colors.primaryText};
        margin: 10px 0;
        padding-left: 5px;
        padding-bottom: 10px;
        font-size: 1em;
        font-weight: 300;

      }
    }
  }

  .btn---demo {
    max-width: 1100px;
    padding-right: 40px;
    
    button {
      margin: 40px 0;
    }
  }

  .item--radio {
    margin: 15px 0;
  }
`;
 