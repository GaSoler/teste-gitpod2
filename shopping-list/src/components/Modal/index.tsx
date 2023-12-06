import './styles.css'
import { X } from 'lucide-react';
import WaterIcon from '../../assets/emojis/agua.svg'

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
}

export function Modal({ isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          <X />
        </button>
        <img src={WaterIcon} alt="" />
      </div>
    </div>
  )
}