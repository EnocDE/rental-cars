"use client"

import CarForm from "../../CarForm/CarForm"


interface AddCarFormProps {
  handleCloseDialog: () => void
}

export default function AddCarForm(props: AddCarFormProps) {
  const { handleCloseDialog } = props

  return (
    <CarForm
      apiUrl="/api/car"
      handleCloseDialog={handleCloseDialog}
      method="POST"
      textSubmitButton="Create car"
      toastMessage="Car was created successfully."
    />
  )
}
