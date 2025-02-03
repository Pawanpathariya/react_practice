import Carousel from 'react-bootstrap/Carousel';
import t4 from '../images/ban1.jpg'
import t2 from '../images/ban2.jpg'
import t3 from '../images/ban3.jpg'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {
  return (
    <>
      <Carousel id='carousel'>
      <Carousel.Item>
        <img src={t4} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={t2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={t3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
 
    <div style={{flexWrap:'wrap',display:'flex',gap:"100px",marginTop:'50px',marginBottom:'50px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Shirt</Card.Title>
        <Card.Text>
          Price: 500
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Pant</Card.Title>
        <Card.Text>
          Price: 800
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Shoes</Card.Title>
        <Card.Text>
          Price: 1000
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Shirt</Card.Title>
        <Card.Text>
          Price: 500
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Pant</Card.Title>
        <Card.Text>
          Price: 800
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Shoes</Card.Title>
        <Card.Text>
          Price: 1000
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Shirt</Card.Title>
        <Card.Text>
          Price: 500
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Pant</Card.Title>
        <Card.Text>
          Price: 800
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </div>
    
    </>
  );
}
export default Home;