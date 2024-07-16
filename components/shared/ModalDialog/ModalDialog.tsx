import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { ReactElement, ReactNode } from 'react'

interface ModalDialogProps {
  button: React.ReactElement
  handleContinue: () => void
  text?: string
}

export default function ModalDialog(props: ModalDialogProps) {
  const {handleContinue, text, button: ButtonOpenDialog} = props
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {ButtonOpenDialog}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. {text || ''}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
