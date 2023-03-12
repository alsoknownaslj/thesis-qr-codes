import * as React from "react"
import { Box, Button, HTMLChakraProps, Image } from "@chakra-ui/react"
import ImageUploading, { ImageType } from 'react-images-uploading';
import ICON_UPLOAD from "../assets/icon_upload.svg"
import { BUTTON_SIZE } from "./QRCodeGenerator";

type ImageChangeListener = { onChange(image: string): void }["onChange"];

interface Props extends Partial<HTMLChakraProps<"div">> {
    onChangeImage: ImageChangeListener;
}

function getBase64(file: File, callback: (result: any) => void) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    callback(reader.result);
  };
}

export function Uploader({ onChangeImage, ...rest }: Props) {
  const [image, setImage] = React.useState<ImageType>();

  const onChange = (imageList: ImageType[]) => {
    if (imageList[0]?.file) {
      setImage(imageList[0]);
      getBase64(imageList[0].file, (result) => {
          onChangeImage(result);
      })
    } else {
      setImage(undefined);
      onChangeImage('');
    }
  };

  return (
    <Box {...rest}>
      <ImageUploading
        dataURLKey="data_url"
        multiple={false}
        maxNumber={2}
        value={image ? [image] : []}
        onChange={onChange}
      >
        {
          ({ onImageUpload }) => (
            <Button
              h={BUTTON_SIZE}
              w={BUTTON_SIZE}
              onClick={onImageUpload}
            >
              <Image w={BUTTON_SIZE/2} src={ICON_UPLOAD}/>
            </Button>
          )
        }
      </ImageUploading>
    </Box>
  );
}