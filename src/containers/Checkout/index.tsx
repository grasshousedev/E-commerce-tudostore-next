import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';

import { useUserContext } from '../../contexts/user';
import { useBagContext } from '../../contexts/bag';

import { useClosedPage } from '../../hooks/closedPage';

import { convertToBRL } from '../../utils/convertPriceBRL';

import AddressCard from '../../components/AddressCard';
import CardCard from '../../components/CardCard';
import Button from '../../components/Button';
import BagItems from '../../components/BagItems';

import { Card } from '../../styles/card';
import { Container, ContainerResume, ContainerOrderInfos, ContainerOrderTotal } from './styled';

export type requirementsToBuyProtocol = {
  haveAddress: boolean | null;
  haveCard: boolean | null;
};

export default function Checkout() {
  const router = useRouter();

  const { isClosed, LSLoaded } = useClosedPage('/checkout');
  const { bagTotal, bagData, LSLoaded: BagLSLoaded, bagItems } = useBagContext();
  const { cards, address } = useUserContext();

  const [total, setTotal] = useState(0);
  const [requirementsToBuy, setRequirementsToBuy] = useState<requirementsToBuyProtocol>({
    haveAddress: null,
    haveCard: null,
  });
  const [useCanBuy, setUserCanBuy] = useState<null | boolean>(null);

  const shippingCost = useMemo(() => parseFloat((Math.random() * 300).toFixed(2)), []);
  const taxService = useMemo(() => parseFloat((Math.random() * 30).toFixed(2)), []);

  useEffect(() => {
    if (bagData.length > 0) {
      setTotal(bagTotal + shippingCost + taxService);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bagTotal, bagData]);

  useEffect(() => {
    if (BagLSLoaded && bagItems.length === 0) {
      router.push('/');
      toast.dismiss();
      toast('Você não tem items no seu carrinho para fazer checkout');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BagLSLoaded, bagItems]);

  const handleBuy = () => {
    const haveDefaultCard = cards.find((card) => card.isDefault);
    if (cards.length === 0 || !address.shippingName || !haveDefaultCard) {
      toast.dismiss();
      setUserCanBuy(false);
    }
    if (cards.length === 0 && !address.shippingName) {
      toast.error('Adicione um cartão para fazer a compra');
      toast.error('Adicione um endereço para o envio');
      setRequirementsToBuy({
        haveAddress: false,
        haveCard: false,
      });
      return;
    }
    if (cards.length === 0) {
      toast.error('Adicione um cartão para fazer a compra');
      setRequirementsToBuy({
        ...requirementsToBuy,
        haveCard: false,
      });
      return;
    }
    if (!address.shippingName) {
      toast.error('Adicione um endereço para o envio');
      setRequirementsToBuy({
        ...requirementsToBuy,
        haveAddress: false,
      });
      return;
    }
    if (!haveDefaultCard) {
      toast.error('Selecione um cartão para ser padrão');
      setRequirementsToBuy({
        ...requirementsToBuy,
        haveCard: false,
      });
      return;
    }
    setUserCanBuy(true);
    setRequirementsToBuy({
      haveAddress: true,
      haveCard: true,
    });
  };

  return (
    bagItems.length > 0 &&
    bagData.length > 0 &&
    LSLoaded &&
    !isClosed && (
      <Container>
        <section className="left-container">
          <AddressCard
            className={`m-border-radius ${requirementsToBuy.haveAddress === false ? 'error' : ''}`}
            Title={'h1'}
          />
          <CardCard
            className={`m-border-radius ${requirementsToBuy.haveCard === false ? 'error' : ''}`}
            Title={'h1'}
          />
          <Card className="m-border-radius">
            <header>
              <h1 className="title-all-uppercase-spaced">Reveja sua bolsa</h1>
            </header>
            <BagItems className="m-top-1 border-divisor" />
          </Card>
        </section>
        <section className="right-content">
          <ContainerResume>
            <header>
              <h1>Resumo da Ordem</h1>
            </header>
            <ContainerOrderInfos>
              <div>
                <span>Items:</span> <span>{convertToBRL(bagTotal)}</span>
              </div>
              <div>
                <span>Envio:</span> <span>{convertToBRL(shippingCost)}</span>
              </div>
              <div>
                <span>Taxa Serviço:</span> <span>{convertToBRL(taxService)}</span>
              </div>
            </ContainerOrderInfos>
            <ContainerOrderTotal>
              <span>Total:</span> <span>{convertToBRL(total)}</span>
            </ContainerOrderTotal>
            <Button onClick={bagData.length > 0 ? handleBuy : () => undefined}>Finalizar Ordem</Button>
          </ContainerResume>
          <Button className="outline" onClick={() => history.back()}>
            <IoIosArrowBack />
            <span>Voltar</span>
          </Button>
        </section>
      </Container>
    )
  );
}
