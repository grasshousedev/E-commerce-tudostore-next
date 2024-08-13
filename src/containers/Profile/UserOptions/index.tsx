import { ChangeEvent, useState } from 'react';
import { FaUser, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { isURL } from 'validator';
import toast from 'react-hot-toast';

import { useUserContext } from '../../../contexts/user';

import Button from '../../../components/Button';

import { Container, Cards, Card } from './styled';

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
        <div className="container-bottom">
          <div className="container-left">
            <div>
              Nome de usuário: <span className="accent-color">{user.name}!</span>
            </div>
            <div>
              Email: <span className="accent-color">{user.email}</span>
            </div>
          </div>
          <div className="container-right">
            <Button className="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </Card>
    )
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
        <Card>
          <header>
            <h2 className="title-all-uppercase-spaced">Método de pagamento</h2>
          </header>
        </Card>
      </Cards>
    </Container>
  );
}
