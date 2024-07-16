"use client"
import IconWithText from '@/components/shared/IconWithText/IconWithText'
import ModalDialog from '@/components/shared/ModalDialog/ModalDialog'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Car } from '@prisma/client'
import axios from 'axios'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CarCardDeleteButtonProps {
  id: Car['id']
}

export default function CarCardDeleteButton(props: CarCardDeleteButtonProps) {
  const { id } = props
  const router = useRouter()

  const handleClickDelete = async () => {
    await axios.delete(`/api/car/${id}`)
    toast({
      title: "Car deleted successfully."
    })
    toast({title: "The car was deleted."})
    router.refresh()
  }

  const handleContinue = async () => {
    handleClickDelete()
  }

  const CarCardDeleteButton = <Button className='w-full flex-1' variant="destructive">
    <IconWithText icon={Trash} text='Delete' />
  </Button>

  return (
    <ModalDialog button={CarCardDeleteButton} handleContinue={handleContinue} />
  )
}
