import Whatsapp from '../assets/whatsapp.svg'
import Phone from '../assets/phone.svg'
import Mail from '../assets/mail.svg'
import '../css/Contact.css'

function Contact() {

    return(
        <div className="container-contact">

        <a  className='icon-contact' href="https://github.com/murilofernandes1" target="_blank" rel="noopener noreferrer" fill="white">
        <img
        src={Whatsapp}
        alt="Whatsapp"
        style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
        />
      </a>

      <a  className='icon-contact' href="https://github.com/murilofernandes1" target="_blank" rel="noopener noreferrer" fill="white">
        <img
        src={Phone}
        alt="Whatsapp"
        style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
        />
      </a>

      <a  className='icon-contact' href="https://github.com/murilofernandes1" target="_blank" rel="noopener noreferrer" fill="white">
        <img
        src={Mail}
        alt="Email"
        style={{ width: '40px', height: '40px', cursor: 'pointer' }} 
        />
      </a>

        </div>
    )
}
export default Contact;