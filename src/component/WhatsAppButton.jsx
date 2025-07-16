import { FaWhatsapp } from "react-icons/fa"
import "./WhatsAppButton.css"

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "+919205110208"
  const message = "Hello, I'm interested in your services."

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="whatsapp-button-1" onClick={handleClick} aria-label="Contact us on WhatsApp">
      <FaWhatsapp />
    </div>
  )
}

export default WhatsAppButton
