import { Box, Button, Flex, Heading, Image, Spacer, VStack, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { QRImage } from "./QRImage";
import { ColorPicker } from "./ColorPicker";
import { Uploader } from "./Uploader";
import { LabeledInput } from "./LabeledInput";
import LOGO_THESIS from "../assets/logo_thesis.png"
import LOGO_TAHO from "../assets/logo_taho.png"
import LOGO_EMBODY from "../assets/logo_embody.png"
import ICON_DELETE from "../assets/icon_delete.svg"

export const BUTTON_SIZE = 100;

const BACKGROUND_DEFAULTS = ['#000000', '#ffffff', '#002825','#B8D1D0', '#EF9C32', '#FDF6ED', '#0B3CF1', '#F26339', '#ECEBE2'];
const FOREGROUND_DEFAULTS = ['#000000', '#ffffff', '#002825','#B8D1D0', '#EF9C32', '#FDF6ED', '#0B3CF1', '#F26339', '#ECEBE2'];
const QR_DEFAULT = 'https://www.thesis.co';

export function QRCodeGenerator() {
  const [encoded, setEncoded] = useState(QR_DEFAULT);
  const [bg, setBg] = useState('#ffffff');
  const [fg, setFg] = useState('#000000');
  const [image, setImage] = useState('');
  const [qrStyle, setQrStyle] = useState<"dots" | "squares">('dots');


  return (
    <VStack spacing='4rem'> 
      <Heading size='2xl'>QR Code Generator</Heading>
      <LabeledInput 
        title='Insert URL here'
        placeholder={QR_DEFAULT}
        onChangeInput={(text) => {
          setEncoded(text ? text : QR_DEFAULT);
        }}
      />  
      <Flex w='100%' p='2'>
      <Stack spacing='2rem' direction='column'>
        <Heading size='md'>Choose a logo:</Heading>
        <Stack direction='row'>
          <Image cursor='pointer' 
            onClick={() => {setImage(LOGO_THESIS)}} w={BUTTON_SIZE} src={LOGO_THESIS} />
          <Spacer />
          <Image cursor='pointer' 
            onClick={() => {setImage(LOGO_TAHO)}} w={BUTTON_SIZE} src={LOGO_TAHO} />
          <Spacer />
          <Image cursor='pointer' 
            onClick={() => {setImage(LOGO_EMBODY)}} w={BUTTON_SIZE} src={LOGO_EMBODY} />
          <Spacer />
          <Uploader 
            onChangeImage={(image: string) => {
              setImage(image);
            }} 
          />
          <Spacer />
          <Button 
            onClick={() => {setImage('')}}
            w={BUTTON_SIZE} 
            h={BUTTON_SIZE}>
              <Image w={BUTTON_SIZE/2} src={ICON_DELETE}/>
          </Button>
        </Stack>
        </Stack> 
      </Flex>
      <Stack spacing='4rem' direction='row'>
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading size='md'>
                Choose background color
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
      <Spacer />
          <AccordionPanel pb={4}>
          <ColorPicker 
            title=''
            colors={BACKGROUND_DEFAULTS}
            onChangeColor={(hex) => {
              setBg(hex);
            }} 
          />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading size='md'>
                Choose foreground color
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}> 
          <ColorPicker 
            title=''
            colors={FOREGROUND_DEFAULTS}
            onChangeColor={(hex) => {
              setFg(hex);
            }} 
          />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>

      <QRImage
        value={encoded}
        bgColor={bg}
        fgColor={fg}
        logoImage={image}
        qrStyle={qrStyle}
      />
    </VStack>
  );
}