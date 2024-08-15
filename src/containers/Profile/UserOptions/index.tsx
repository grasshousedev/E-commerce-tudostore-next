import { ChangeEvent, useState } from 'react';
import { FaUser, FaEdit, FaCheckCircle, FaAddressCard } from 'react-icons/fa';
import { IoCard } from 'react-icons/io5';
import { isURL } from 'validator';
import toast from 'react-hot-toast';

import { useUserContext } from '../../../contexts/user';

import { creditCardType } from '../../../utils/checkCreditCard';

import Button from '../../../components/Button';

import { Card, ContainerCardBottom } from '../../../styles/card';
import { Container, Cards, ContainerCard } from './styled';

const UserCard = () => {
  const { user, setUser, LSLoaded } = useUserContext();
  const { userImage } = user;

  const [newImage, setNewImage] = useState('');
  const [openImageInput, setOpenImageInput] = useState(false);

  const handleOpenImgInput = () => {
    setOpenImageInput(!openImageInput);
  };

  const handleChangeNewImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewImage(e.target.value);
  };

  const handleSetNewImage = () => {
    if (isURL(newImage)) {
      setOpenImageInput(false);
      setUser({ ...user, userImage: newImage });
      setNewImage('');
      toast.success('Imagem atualizada com sucesso!');
    } else {
      toast.dismiss();
      toast.error('URL de imagem inválida');
    }
  };

  const handleLogout = () => {
    setUser({ isLoggedIn: false, name: '', email: '', password: '', userImage: '' });
    toast.success('Deslogado com sucesso');
  };

  return (
    LSLoaded && (
      <Card>
        <header>
          <h2 className="title-all-uppercase-spaced">Minhas informações</h2>
        </header>
        <div className="container-img" onClick={handleOpenImgInput}>
          {userImage ? <img src={userImage} alt="Foto do usuário" /> : <FaUser />}
          <div className="edit-icon" onClick={(e) => e.stopPropagation()}>
            <FaEdit />
            {openImageInput && (
              <div className="container-newimg">
                <input type="text" placeholder="https://nova.imagem" onChange={handleChangeNewImageInput} />
                <button type="button" onClick={handleSetNewImage}>
                  <FaCheckCircle />
                </button>
              </div>
            )}
          </div>
        </div>
        <ContainerCardBottom>
          <div className="container-left">
            <div>
              Nome de usuário: <span className="accent-color">{user.name}!</span>
            </div>
            <div>
              Email: <span className="accent-color">{user.email}</span>
            </div>
          </div>
          <div className="container-right">
            <Button className="outline danger auto-top" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </ContainerCardBottom>
      </Card>
    )
  );
};

const UserCardsCard = () => {
  const { cards } = useUserContext();

  return (
    <Card>
      <header>
        <h2 className="title-all-uppercase-spaced">Método de pagamento</h2>
      </header>
      <ContainerCardBottom className="center-items">
        <div className="container-left">
          {cards.length > 0 ? (
            cards.map(
              (card, i) =>
                card.isDefault && (
                  <ContainerCard key={i}>
                    <div>
                      <FaAddressCard />
                      <span className="no-wrap">Nome: {card.cardName}</span>
                    </div>
                    <div>
                      <IoCard />
                      <span>
                        {creditCardType(card.cardNumber)} terminando com{' '}
                        <span>
                          {card.cardNumber.slice(card.cardNumber.length - 4, card.cardNumber.length)}
                        </span>
                      </span>
                    </div>
                  </ContainerCard>
                ),
            )
          ) : (
            <div className="empty">
              <p>Parece que você não tem nenhum cartão cadastrado, adicione um novo cartão</p>
            </div>
          )}
        </div>
        <div className="container-right">
          <Button className="outline" buttonType="link" href="/profile/cards">
            Mudar
          </Button>
        </div>
      </ContainerCardBottom>
    </Card>
  );
};

export default function UserOptions() {
  return (
    <Container>
      <header>
        <h1>Meu perfil</h1>
        <p>Gerencie Suas Informações e Preferências.</p>
      </header>
      <Cards>
        <UserCard />
        <UserCardsCard />
      </Cards>
    </Container>
  );
}
