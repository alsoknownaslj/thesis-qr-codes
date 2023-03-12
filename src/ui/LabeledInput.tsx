import { Box, Heading, HTMLChakraProps, Input } from "@chakra-ui/react";

type UrlInputChangeListener = { onChange(text: string): void }["onChange"];

interface Props extends Partial<HTMLChakraProps<"div">> {
  title: string;
  onChangeInput: UrlInputChangeListener;
}

export function LabeledInput({ title, onChangeInput, ...rest }: Props) {
  return (
    <Box w={'100%'} {...rest}>
      <Heading size='md'>{title}</Heading>
      <Input  
        size='lg'
        placeholder='www.thesis.co'
        onChange={(event) => {
          onChangeInput(event.target.value);
        }}/>
    </Box>
  )
}