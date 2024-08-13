import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 1.5rem;

  .container-inputs {
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

        .container-tips {
          padding-left: 0.5rem;
          margin-top: 0.5rem;

          span {
            color: ${theme.colors.warnColors.danger};
            font-size: ${theme.fontSizes.small};
            font-weight: 500;
          }
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

export const Footer = styled.footer`
  margin-top: 1rem;
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
`;
