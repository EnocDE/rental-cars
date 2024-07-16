import { Button } from "@/components/ui/button";

interface FormActionsProps {
  isComplete: boolean
  textSubmitButton: string
  handleOnCancel: () => void
}

export default function FormActions(props: FormActionsProps) {
  const { handleOnCancel, isComplete, textSubmitButton } = props
  return (
    <div className="flex gap-3">
      <Button
        disabled={isComplete}
        className="w-1/2"
        style={{ marginTop: "25px" }}
        variant={"default"}
        type="submit"
      >
        {textSubmitButton}
      </Button>
      <Button
        onClick={handleOnCancel}
        className="w-1/2"
        style={{ marginTop: "25px" }}
        variant={"destructive"} type="button"
      >
        Cancel
      </Button>
    </div>
  )
}
