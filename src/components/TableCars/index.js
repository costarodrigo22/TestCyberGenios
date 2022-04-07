import {
  Container, Content, Card, CardGroup,
} from './styles';

// Importação dos ícones usados neste componente.
import date from '../../assets/images/date.svg';
import speed from '../../assets/images/speed.svg';
import lightning from '../../assets/images/lightning.svg';
import people from '../../assets/images/people.svg';
import carListOne from '../../assets/images/carListOne.png';
import carListTwo from '../../assets/images/carListTwo.png';
import carListThree from '../../assets/images/carListThree.png';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRigth from '../../assets/images/arrowRigth.svg';

// Exportação do componente.
export default function TableCars() {
  return (
    <Container>
      <img className="arrowLeft" src={arrowLeft} alt="arrow" />
      <Content>
        <Card>
          <img className="carOne" src={carListOne} alt="" />
          <CardGroup>
            <div className="title">
              <p>Mustang</p>
            </div>
            <div className="info-group">
              <div className="info">
                <img src={date} alt="ano fabricação" />
                <p>2015</p>
              </div>
              <div className="info">
                <img src={speed} alt="ano fabricação" />
                <p>180 Km/h</p>
              </div>
              <div className="info">
                <img src={lightning} alt="ano fabricação" />
                <p>9/10</p>
              </div>
              <div className="info">
                <img src={people} alt="ano fabricação" />
                <p>8/10</p>
              </div>
            </div>
            <button type="button">Ver carro</button>
          </CardGroup>
        </Card>
        <Card>
          <img className="carTwo" src={carListTwo} alt="" />
          <CardGroup>
            <div className="title">
              <p>Mustang</p>
            </div>
            <div className="info-group">
              <div className="info">
                <img src={date} alt="ano fabricação" />
                <p>2015</p>
              </div>
              <div className="info">
                <img src={speed} alt="ano fabricação" />
                <p>180 Km/h</p>
              </div>
              <div className="info">
                <img src={lightning} alt="ano fabricação" />
                <p>9/10</p>
              </div>
              <div className="info">
                <img src={people} alt="ano fabricação" />
                <p>8/10</p>
              </div>
            </div>
            <button type="button">Ver carro</button>
          </CardGroup>
        </Card>
        <Card>
          <img className="carThree" src={carListThree} alt="" />
          <CardGroup>
            <div className="title">
              <p>Mustang</p>
            </div>
            <div className="info-group">
              <div className="info">
                <img src={date} alt="ano fabricação" />
                <p>2015</p>
              </div>
              <div className="info">
                <img src={speed} alt="velocidade" />
                <p>180 Km/h</p>
              </div>
              <div className="info">
                <img src={lightning} alt="potência" />
                <p>9/10</p>
              </div>
              <div className="info">
                <img src={people} alt="pessoas" />
                <p>8/10</p>
              </div>
            </div>
            <button type="button">Ver carro</button>
          </CardGroup>
        </Card>
      </Content>
      <img className="arrowRight" active src={arrowRigth} alt="arrow" />
    </Container>
  );
}
