'use client'
import React from 'react'
import Modal from './Modal'
import useUploadModal from '@/hooks/useUploadModal'

const UploadModal = () => {
  const uploadModal = useUploadModal()

  const onChange = (open: boolean) => {
    if(!open) {
      uploadModal.onClose()
    }
  }

  return (
    <Modal title='Upload modal title' description='upload modal description' isOpen={uploadModal.isOpen} onChange={onChange}>
      Upload modal
    </Modal>
  )
}

export default UploadModal