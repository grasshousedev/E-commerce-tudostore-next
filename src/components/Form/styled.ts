import styled, { css } from 'styled-components';

export const Container = styled.section`
  padding: 2rem;
  max-width: 676px;
  height: fit-content;
  margin-inline: auto;
  border-radius: 0.938rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  header {
    padding: 0.5rem;

    h1,
    h2,
    h3,
    h4 {
      letter-spacing: 0.25em;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSizes.l4};
    }
  }

  .container-footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.5rem 1.5rem;
      text-decoration: underline;
      ${({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${theme.fontSizes.base};
      `}
    }

    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.accent[2]};

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }

      & > span {
        font-size: ${({ theme }) => theme.fontSizes.base};
        letter-spacing: -0.02em;
      }
    }
  }
`;

export const FormContainer = styled.form`
  .container-inputs {
    margin-top: 1.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .container-input {
      display: flex;
      flex-direction: column;

      ${({ theme }) => css`
        label {
          color: ${theme.colors.placeholder}80;
          font-size: ${theme.fontSizes.base};
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        input {
          height: 56px;
          font-size: ${theme.fontSizes.l6};
          font-weight: 500;
          padding: 0.5rem 1rem;
          background-color: ${theme.colors.white};
          border-radius: 0.813rem;
          box-shadow: 0 4px 16px ${theme.colors.placeholder}26;
        }
      `}
    }
  }

  .container-submit {
    margin-top: 2rem;
    padding: 1rem;

    button {
      width: 100%;
    }
  }
`;
