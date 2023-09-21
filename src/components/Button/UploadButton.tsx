import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useStore } from '@/stores/stores';
import { encodeToBase64 } from '@/utils';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

export const InputFileUpload = () => {
  const { imageCollection: { postImage }} = useStore(null)

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    encodeToBase64(file as File).then(async (base64) => {
      await postImage(base64)
    })
  }

  return (
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload FILE
      <VisuallyHiddenInput type="file" onChange={handleFileSelected} accept="image/png, image/gif, image/jpeg" />
    </Button>
  );
}