import './styles.css'
import { Box } from '../Box'
import { Button } from '../Button'
import { ChevronRight } from 'lucide-react'
import { CountDown } from '../CountDown';
import { useState } from 'react';
import { Modal } from '../Modal';

export function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className='controls'>
        <Box text='Meta diária' max={10000} min={1000} step={100} />
        <Box text='Quantidade por timer' max={1000} min={100} step={100} />
        <CountDown />
        <Button label='Começar' icon={<ChevronRight />} onClick={handleOpenModal} />

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
      </div>

  )
}