import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Cards';
import phones from "./assets/phones.jpg"
import laptops from "./assets/laptops.avif"
import game from "./assets/game.jpg"
import web from "./assets/web.png"
function Product() {
  return (
    <div className='grid-section p-3 bg-primary-subtle h-auto  w-100'>
      <h1 className='product text-center p-3 text-primary mt-5  '>Our Products</h1>
      <Row>
        <Col>
        <Card 
        image={phones}
        title="Different kind of phones"
        description="All kind of phone available at affordable price"
        btnText="$9065-$9025"
        />
        </Col>
        <Col>
        <Card 
        image={laptops}
        title="Different kind of laptops"
        description="All kind of laptops available at affordable price"
        btnText="$5785-$5700"
        />
        </Col>
        <Col>
        <Card 
        image={game}
        title="Different kind of game"
        description="All kind of game available at affordable price"
        btnText="$4785-$4700" 
        />
        </Col>
        <Col>
         <Card 
        image={web}
        title="Our Project"
        description="Lets make your business "
        btnText="learn more" 
        />
        </Col>
      </Row>
    </div>
  );
}

export default Product;