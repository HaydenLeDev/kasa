import logoBlanc from '../../assets/LOGOblanc.png'
import '../../style/components/footer/footer.css'

/**
 * Contains footer content
 * @returns the footer of the page
 */

function Footer() {
    return (
        <div className="Footer">
            <img src={logoBlanc} alt="Logo kasa blanc" className="Footer-logo"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
