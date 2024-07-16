"use client";
import { Car } from "@prisma/client";
import CarForm from "../../../../CarForm/CarForm";

interface CarCardEditFormProps {
  car: Car;
  handleCloseDialog: () => void;
}

export default function CarCardEditForm(props: CarCardEditFormProps) {
  const { car, handleCloseDialog } = props;
  const { id } = car;

  return (
    <CarForm
      apiUrl={`/api/car/${id}`}
      handleCloseDialog={handleCloseDialog}
      method="PATCH"
      textSubmitButton="Save changes"
      toastMessage="The car was edited successfully."
      car={car}
    />
  );
}
