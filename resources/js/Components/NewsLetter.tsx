import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import  newsletter from "@/assets/images/newsletter.png"
export default function NewsLetter() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`modal ${isModalOpen ? '' : 'closed'}`} data-modal>
      <div className="modal-close-overlay" data-modal-overlay onClick={closeModal}></div>

      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close onClick={closeModal}>
          <IoCloseOutline/>
        </button>

        <div className="newsletter-img">
          <img src={newsletter} alt="subscribe newsletter" width="400" height="400" />
        </div>

        <div className="newsletter">
          <form>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>

              <p className="newsletter-desc">
                Subscribe the <b>Anon</b> to get latest products and discount update.
              </p>
            </div>

            <input type="email" name="email" className="email-field" placeholder="Email Address" required />

            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

