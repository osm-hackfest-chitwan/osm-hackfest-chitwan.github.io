import {SOCIALS} from '../../Module/General';
import './style.css';

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.telegram}>
          <i className="fab fa-3x fa-telegram"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <i className="fab fa-3x fa-discord"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
          <i className="fab fa-3x fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}
