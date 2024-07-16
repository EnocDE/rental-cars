"use server"

import { utapi } from "@/uploadthing/server"

export default async function deleteImageFromUploadthing(imageFullPath: string) {
  const imageURL = imageFullPath.split("/")[4]
  await utapi.deleteFiles(imageURL)
}