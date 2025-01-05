import { Search, X } from 'lucide-react';
import { FormEvent } from 'react';
import './style.css';

interface FormContainerProps {
  handleSubmit: (e: FormEvent) => Promise<void>;
  isLoading: boolean;
  userNameInput: React.RefObject<HTMLInputElement>;
}

export const FormContainer = ({
  handleSubmit,
  isLoading,
  userNameInput,
}: FormContainerProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Informe um usuário"
        min={1}
        ref={userNameInput}
      />
      <button disabled={isLoading}>{isLoading ? <X /> : <Search />}</button>
    </form>
  );
};
