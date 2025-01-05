import { FormEvent, useRef, useState } from 'react';
import { FormContainer } from '../../components/FormContainer';
import { UserCard } from '../../components/UserCard';
import { fetchUser } from '../../services/fetchUser';
import { useQuery } from '@tanstack/react-query';
import './style.css';

export const Home = () => {
  const [userName, setUserName] = useState('');
  const userNameInput = useRef<HTMLInputElement>(null);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['gitHubUser', userName],
    queryFn: () => fetchUser(userName),
    enabled: !!userName,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userNameValue = userNameInput.current?.value;

    if (!userNameValue) return;

    userNameInput.current.value = '';

    if (userNameValue === userName) refetch();
    else setUserName(userNameValue);
  };
  return (
    <>
      <div className="search-container">
        <h2>Busque por um usuário</h2>
        <FormContainer
          handleSubmit={handleSubmit}
          userNameInput={userNameInput}
          isLoading={isLoading}
        />
      </div>
      {data && <UserCard {...data} />}
    </>
  );
};
