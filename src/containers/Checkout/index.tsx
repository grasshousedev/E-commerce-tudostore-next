import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';

import { useBagContext } from '../../contexts/bag';

import { useClosedPage } from '../../hooks/closedPage';

import { convertToBRL } from '../../utils/convertPriceBRL';

import AddressCard from '../../components/AddressCard';
import CardCard from '../../components/CardCard';
import Button from '../../components/Button';

import { Container, ContainerResume, ContainerOrderInfos, ContainerOrderTotal } from './styled';

export default function Checkout() {
  const router = useRouter();

  const { isClosed, LSLoaded } = useClosedPage('/checkout');
  const { bagTotal, bagData, LSLoaded: BagLSLoaded, bagItems } = useBagContext();

  const [total, setTotal] = useState(0);
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

  return (
    bagData.length > 0 &&
    LSLoaded &&
    !isClosed && (
      <Container>
        <section className="left-container">
          <AddressCard className="m-border-radius" />
          <CardCard className="m-border-radius" />
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
            <Button>Finalizar Ordem</Button>
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
