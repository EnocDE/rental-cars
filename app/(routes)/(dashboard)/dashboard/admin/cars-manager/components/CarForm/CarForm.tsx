"use client"

import deleteImageFromUploadthing from "@/actions/deleteImageFromUploadthing"
import {
  Form
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Car } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ClientUploadedFileData } from "uploadthing/types"
import CarDetailsForm from "./CarDetailsForm/CarDetailsForm"
import { CarFormSchema, CarFormType } from "./CarForm.types"
import FormActions from "./FormActions/FormActions"
import FormUploadImage from "./FormUploadImage/FormUploadImage"

interface CarFormProps {
  handleCloseDialog: () => void
  textSubmitButton: string
  apiUrl: string
  method: string
  car?: Car
  toastMessage: string
}

export default function CarForm(props: CarFormProps) {
  const { handleCloseDialog, textSubmitButton, apiUrl, method, car, toastMessage } = props
  const { name, cv, transmission, people, photo, priceDay, engine, type, published } = car || {}
  const [photoUploaded, setPhotoUploaded] = useState<string | undefined>(undefined)


  const router = useRouter()
  const form = useForm<CarFormType>({
    resolver: zodResolver(CarFormSchema),
    defaultValues: {
      name: name || "",
      cv: cv || "",
      transmission: transmission || "",
      people: people || "",
      photo: photo || "",
      engine: engine || "",
      type: type || "",
      priceDay: priceDay || "",
      published: published || false
    },
  })

  const onSubmit = async (values: CarFormType) => {
    try {
      await axios(`${apiUrl}`, {
        method,
        data: {
          ...values,
          photo: photoUploaded != null ? photoUploaded : photo
        }
      })

      // Elimina la imagen anterior al guardar los cambios
      if (photo !== '' && photo != null && photoUploaded != null) {
        await deleteImageFromUploadthing(photo!)
      }

      toast({
        title: toastMessage
      })

      handleCloseDialog()
      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive"
      })
    }
  }

  const handleOnCancel = () => {
    if (photoUploaded != null) {
      deleteImageFromUploadthing(form.getValues().photo)
    }
    handleCloseDialog()
  }

  const handleImageUploadComplete = (res: ClientUploadedFileData<null>[]) => {
    form.setValue("photo", res?.[0].url)
    setPhotoUploaded(res?.[0].url)
  }

  const handleImageUploadError = (error: any) => toast({title: "Something was wrong, please try again.", variant: "destructive"})

  const isComplete = Object.values(form.getValues()).includes("")

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <CarDetailsForm
            form={form}
          />
          <FormUploadImage
            form={form}
            photoUploaded={photoUploaded}
            handleImageUploadComplete={handleImageUploadComplete}
            handleImageUploadError={handleImageUploadError}
          />
        </div>
        <FormActions
          handleOnCancel={handleOnCancel}
          isComplete={isComplete}
          textSubmitButton={textSubmitButton}
        />
      </form>
    </Form >
  )
}
