import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = () => {
    return (
      <>
        
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
  export default Product;
