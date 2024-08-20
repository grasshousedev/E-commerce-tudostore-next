import Button from '../Button';

import { useUserContext } from '../../contexts/user';

import { Card, ContainerCardBottom } from '../../styles/card';
import { ContainerAddress } from './styled';

export default function AddressCard() {
  const { address } = useUserContext();

  return (
    <Card>
      <header>
        <h2 className="title-all-uppercase-spaced">Endereço de envio</h2>
      </header>
      <ContainerCardBottom className="center-items">
        <div className="container-left">
          {address.shippingName ? (
            <ContainerAddress>
              <div>
                <span className="no-wrap">{address.shippingName}</span>
              </div>
              <div>
                <span className="no-wrap">{address.streetName}</span>
              </div>
              <div>
                <span className="no-wrap">
                  {address.cityName}, {address.stateName}
                </span>
              </div>
              <div>
                <span className="no-wrap">{address.countryName}</span>
              </div>
            </ContainerAddress>
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
