import { FormEvent } from 'react';

import { IoLockClosed } from 'react-icons/io5';

import Button from '../Button';

import { Container, FormContainer } from './styled';

export type fieldProtocol = {
  input: {
    type: string;
    name: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  label: {
    content: string;
    htmlFor: string;
  };
};

export type FormProps = {
  title: string;
  fields: fieldProtocol[];
  onSubmitAction: (e: FormEvent<HTMLFormElement>, ...args: unknown[]) => void;
  submitBtnContent: string;
  footer?: {
    backButton: {
      onClick: () => void;
      content: string;
    };
  };
};

export default function Form({ title, fields, onSubmitAction, submitBtnContent, footer }: FormProps) {
  return (
    <Container>
      {title && <header dangerouslySetInnerHTML={{ __html: title }}></header>}
      <FormContainer onSubmit={onSubmitAction}>
        {fields && (
          <div className="container-inputs">
            {fields.map((field, i) => (
              <div className="container-input" key={i}>
                <label htmlFor={field.input.id}>{field.label.content}</label>
                <input {...field.input} />
                <div className="container-tips"></div>
              </div>
            ))}
          </div>
        )}
        <div className="container-submit">
          <Button type="submit">{submitBtnContent}</Button>
        </div>
      </FormContainer>
      {footer && (
        <div className="container-footer">
          <button type="button" onClick={footer.backButton.onClick}>
            {footer.backButton.content}
          </button>
          <span>
            <IoLockClosed />
            <span>Conexão Segura</span>
          </span>
        </div>
      )}
    </Container>
  );
}
