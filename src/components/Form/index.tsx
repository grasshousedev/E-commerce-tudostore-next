import { FormEvent } from 'react';

import { IoLockClosed } from 'react-icons/io5';

import Button from '../Button';

import { FormContainer, Footer } from './styled';

export type fieldProtocol = {
  input: {
    className?: string;
    type: string;
    name: string;
    id: string;
    placeholder?: string;
    value?: string;
    checked?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  label: {
    content: string;
    htmlFor: string;
  };
  input2?: {
    className?: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  label2?: {
    content: string;
    htmlFor: string;
  };
};

export type FormProps = {
  fields: fieldProtocol[];
  onSubmitAction: (e: FormEvent<HTMLFormElement>, ...args: unknown[]) => void;
  submitBtnContent: React.ReactNode;
  footer?: {
    backButton: {
      onClick: () => void;
      content: string;
    };
  };
};

export default function Form({ fields, onSubmitAction, submitBtnContent, footer }: FormProps) {
  return (
    <>
      <FormContainer onSubmit={onSubmitAction}>
        {fields && (
          <div className="container-inputs">
            {fields.map((field, i) => {
              if (field.input2 && field.label2) {
                return (
                  <div className="container-input-2-row" key={i}>
                    <div className="container-input" key={field.input.id}>
                      <label htmlFor={field.input.id}>{field.label.content}</label>
                      <input {...field.input} />
                      <div className="container-tips"></div>
                    </div>
                    <div className="container-input" key={field.input2.id}>
                      <label htmlFor={field.input2.id}>{field.label2.content}</label>
                      <input {...field.input2} />
                      <div className="container-tips"></div>
                    </div>
                  </div>
                );
              } else if (field.input.type === 'checkbox') {
                return (
                  <div className="container-input-checkbox" key={field.input.id}>
                    <input {...field.input} />
                    <label htmlFor={field.input.id}>{field.label.content}</label>
                  </div>
                );
              } else {
                return (
                  <div className="container-input" key={field.input.id}>
                    <label htmlFor={field.input.id}>{field.label.content}</label>
                    <input {...field.input} />
                    <div className="container-tips"></div>
                  </div>
                );
              }
            })}
          </div>
        )}
        <div className="container-submit">
          <Button type="submit">{submitBtnContent}</Button>
        </div>
      </FormContainer>
      {footer && (
        <Footer>
          <button type="button" onClick={footer.backButton.onClick}>
            {footer.backButton.content}
          </button>
          <span>
            <IoLockClosed />
            <span>Conexão Segura</span>
          </span>
        </Footer>
      )}
    </>
  );
}
