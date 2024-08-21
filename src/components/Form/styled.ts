import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 1.5rem;

  @media screen and (max-width: 536px) {
    margin-top: 0.5rem;
  }

  .container-inputs {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 536px) {
      gap: 0.5rem;
    }

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
          color: ${theme.colors.dark};

          @media screen and (max-width: 536px) {
            font-size: ${theme.fontSizes.base};
            height: 46px;
          }

          &[type='date'] {
            color: ${theme.colors.placeholder}80;
          }

          &.grey-placeholder::placeholder {
            filter: grayscale(100%);
          }
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

    .container-input-2-row {
      display: grid;
      grid-template-columns: 35% 25% 25%;
      gap: 2rem;
    }

    .container-input-checkbox {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      label {
        ${({ theme }) => css`
          font-size: ${theme.fontSizes.l6};
        `}
      }

      input[type='checkbox'] {
        margin-right: 0.25rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .container-submit {
    margin-top: 2rem;
    padding: 1rem;

    @media screen and (max-width: 536px) {
      margin-top: 1rem;
      padding-block: 0.5rem;
    }

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
