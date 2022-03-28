import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-container">
        <div className="signup">
          <p>SIGNUP TO OUR NEWS LETTER</p>
          <input className="input-mail" type="text" placeholder="name@addres.com" />
          <button className="button-mail">Enter Email</button>
        </div>
        <div className="details">
          <div className="headings">
            <ul>
              <li>
                <a href="/">SHOP </a>
              </li>
              <li>
                <a href="/">MAGAZINE</a>
              </li>
              <li>
                <a href="/">CONTACT US</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">ACCOUNT</a>
              </li>
            </ul>
          </div>
          <div className="faqs">
            <div className="row1">
              <div >
                  <ul className="list">
                  <li className="list-item"><a className="list-tag" href="/">Returns and refunds</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Work at Floom</a></li>
                  <li className="list-item"><a className="list-tag" href="/">FAQs</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Want to sell on Floom?</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Merch</a></li>
                  </ul>
              </div>
              
              <div >
              <ul className="list">
                  <li className="list-item"><a className="list-tag" href="/">Returns and refunds</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Work at Floom</a></li>
                  <li className="list-item"><a className="list-tag" href="/">FAQs</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Want to sell on Floom?</a></li>
                  <li className="list-item"><a className="list-tag" href="/">Merch</a></li>
                  </ul>
              
              </div>
            </div>
            <div className="row2 ">
              <div >
              
                    <ul className="list">
                        <li className="list-item"><a className="list-tag" href="/">Returns and refunds</a></li>
                        <li className="list-item"><a className="list-tag" href="/">Work at Floom</a></li>
                        <li className="list-item"><a className="list-tag" href="/">FAQs</a></li>
                        <li className="list-item"><a className="list-tag" href="/">Want to sell on Floom?</a></li>
                        <li className="list-item"><a className="list-tag" href="/">Merch</a></li>
                        </ul>
             </div>
              
              <div >
                <i className="social-icon fa-brands fa-instagram"></i>
                <i className="social-icon fa-brands fa-facebook-f"></i>
                <i className="social-icon fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="locations">
          <ul>
              <li><a href="/"></a>Aberdeen</li>
              <li><a href="/"></a>Brighton</li>
              <li><a href="/"></a>Birmingham</li>
              <li><a href="/"></a>Bristol</li>
              <li><a href="/"></a>Cardiff</li>
              <li><a href="/"></a>Chester</li>
              <li><a href="/"></a>Edinburgh</li>
              <li><a href="/"></a>Essex</li>
              <li><a href="/"></a>Huddersfield</li>
              <li><a href="/"></a>Leeds</li>
              
          </ul>
      </div>
      <div className="copyright">
      <h1 className="logo-footer">FLOOM</h1>
      <p>© 2022 / FLOOM. LTD / ALL RIGHTS RESERVED</p>
      </div>

      
    </div>
  );
};

export default Footer;