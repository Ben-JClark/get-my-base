import "bootstrap/dist/css/bootstrap.min.css";

import mainImage from "../assets/main-image.jpg";
import smallImageUp from "../assets/seconday-image-up.jpg";
import smallImageDown from "../assets/seconday-image-down.jpg";

interface Props {
  id: string;
  title: string;
  creator: string;
  rockets: number;
  exploits: boolean;
}

/**
 * @returns A base with its details and images displayed in a bootstrap card format
 */
function BaseCard({ id, title, creator, rockets, exploits }: Props) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8">
            <img src={mainImage} alt="Large Image" className="img-fluid" />
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-sm-12 mb-3">
                <img
                  src={smallImageUp}
                  alt="Small Image 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-12">
                <img
                  src={smallImageDown}
                  alt="Small Image 2"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">Card Footer</div>
    </div>
  );
}

export default BaseCard;
