import Carousel from 'react-3d-carousel-container';
import './App.css';

function App() {
  return (
    <Carousel bfc={false}>
      <div style={{ width: '450px', padding: '30px' }}>
        <img
          className="img"
          src="https://source.unsplash.com/nvzvOPQW0gc/500x500"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>

      <div style={{ width: '450px', padding: '30px' }}>
        <img
          className="img"
          src="https://source.unsplash.com/lFmuWU0tv4M/500x500"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>

      <div style={{ width: '450px', padding: '30px' }}>
        <img
          className="img"
          src="https://source.unsplash.com/aJYO8JmVodY/500x500"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>

      <div style={{ width: '450px', padding: '30px' }}>
        <img
          className="img"
          src="https://source.unsplash.com/aJYO8JmVodY/500x500"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>

      <div style={{ width: '450px', padding: '30px' }}>
        <img
          className="img"
          src="https://source.unsplash.com/aJYO8JmVodY/500x500"
          alt=""
          style={{ display: 'block', width: '100%' }}
        />
      </div>
    </Carousel>
  );
}

export default App;
