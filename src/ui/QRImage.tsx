import { Box, HTMLChakraProps } from "@chakra-ui/react";
import saveAs from "file-saver";
import { QRCode } from "react-qrcode-logo";

interface Props extends Partial<HTMLChakraProps<"div">> {
  value: string;
  bgColor: string;
  fgColor: string;
  logoImage: string;
  qrStyle: 'dots' | 'squares';
}
  
export function QRImage({ value, bgColor, fgColor, logoImage, qrStyle, ...rest}: Props) {

    const onClickImage = () => {
      (document.getElementById("qrCode") as HTMLCanvasElement).toBlob((blob) => {
        if (blob) saveAs(blob, 'qr_code');
      });
    }
  
    return (
      <Box cursor='pointer' border='0px' borderStyle='solid' onClick={onClickImage} {...rest}>
        <QRCode 
          value={value} 
          id='qrCode'
          ecLevel="H" // error correction, High due to the embedded logo
          size={700}
          bgColor={bgColor}
          fgColor={fgColor}
          logoImage={logoImage}
        
          // TODO ask design team for guidelines on defaults for these
          quietZone={40} // padding around the code
          logoWidth={250}
          logoPadding={10}
          logoPaddingStyle='square' // circle or square
          qrStyle={qrStyle} // squares or dots
          eyeRadius={[
            [10, 10, 0, 10], // top/left eye
	          [10, 10, 10, 0], // top/right eye
	          [10, 0, 10, 10], // bottom/left
          ]} // https://github.com/gcoro/react-qrcode-logo/blob/HEAD/res/eyeRadius_doc.md
        />
      </Box>
    );
  }