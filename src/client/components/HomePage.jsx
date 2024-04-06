import Card from 'react-bootstrap/Card';
import HomePageImage from '../assets/pexels-photo-1796727.jpeg';

function HomePage() {
  return (
    <Card className="bg-dark text-white" >
      <Card.Img src={HomePageImage} alt="Card image" />
      <Card.ImgOverlay>
        <div class='home-text'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text style={{position:'relative',top:'15px',left:'15px'}}>Last updated 3 mins ago</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomePage;