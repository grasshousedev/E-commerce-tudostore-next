import Button from '../Button';

import { Card, ContainerCardBottom } from '../../styles/card';

export default function AddressCard() {
  const address = {
    number: '',
  };

  return (
    <Card>
      <header>
        <h2 className="title-all-uppercase-spaced">Endereço de envio</h2>
      </header>
      <ContainerCardBottom className="center-items">
        <div className="container-left">
          {address.number ? (
            <div className="address"></div>
          ) : (
            <div className="empty">
              <p>Parece que você não tem nenhum endereço cadastrado, adicione um novo endereço</p>
            </div>
          )}
        </div>
        <div className="container-right">
          <Button className="outline" buttonType="link" href="/profile/address">
            Mudar
          </Button>
        </div>
      </ContainerCardBottom>
    </Card>
  );
}
