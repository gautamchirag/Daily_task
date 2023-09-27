import './card.css';
function Card({ img, head, para }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="no-img" />
      </div>
      <div className="card-right">
        <div className="card-right-content">
          <span>{head}</span>
          <p>{para}</p>
        </div>
        <div className="right-side-btn">
          <button>$ 10</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
