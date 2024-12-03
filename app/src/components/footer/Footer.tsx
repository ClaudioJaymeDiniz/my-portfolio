import wpp from '../../assets/images/whatsapp.png'
// import discord from '../../assets/discord.png'
import linkedin from '../../assets/images/linkedin.png'
// import instagram from '../../assets/images/instagram.png'
import github from '../../assets/images/github.png'


export default function Footer() {
    return (
        <footer className="footer">
        <a href="https://github.com/ClaudioJaymeDiniz">
            <img className="social-icon" src={github} alt="icone github" />
        </a>
        <a href="https://www.linkedin.com/in/claudio-jayme/">
            <img className="social-icon" src={linkedin} alt="icone linkedin" />
        </a>
        {/* <a href="https://www.instagram.com/claudiojayme/">
            <img className="icone" src={instagram} alt="icone instagram" />
        </a> */}
        <a href="https://wa.me//5512983198823">
            <img className="social-icon" src={wpp} alt="icone wpp" />
        </a>
    </footer>  
    )
  }



