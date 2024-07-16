import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import { ClientUploadedFileData } from "uploadthing/types";

interface FormUploadImageProps {
  form: UseFormReturn<{
    name: string;
    cv: string;
    transmission: string;
    people: string;
    photo: string;
    priceDay: string;
    engine: string;
    type: string;
    published: boolean;
  }, any, undefined>
  photoUploaded: string | undefined
  handleImageUploadComplete: (res: ClientUploadedFileData<null>[]) => void
  handleImageUploadError: (error: any) => void
}

export default function FormUploadImage(props: FormUploadImageProps) {
  const { form, handleImageUploadComplete, handleImageUploadError, photoUploaded } = props
  return (
    <FormField
      control={form.control}
      name="photo"
      render={({ field }) => (
        <FormItem className="lg:col-span-2 lg:w-full">
          <FormLabel>Car image</FormLabel>
          <FormControl>
            {photoUploaded ? (
              <div className="aspect-video w-56 mx-auto sm:mx-0 lg:w-full rounded-lg overflow-hidden outline-dashed outline-2 outline-neutral-200">
                <Image className="w-full h-full object-cover" src={photoUploaded} alt="Car Image" width={400} height={400} priority />
              </div>
            ) : (
              <UploadButton
                className=""
                {...field}
                endpoint="photo"
                onClientUploadComplete={handleImageUploadComplete}
                onUploadError={handleImageUploadError}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
