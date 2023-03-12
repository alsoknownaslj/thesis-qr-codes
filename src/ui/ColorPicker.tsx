import { Box, FormLabel, HTMLChakraProps } from "@chakra-ui/react";
import { useState } from "react";
import { CirclePicker } from "react-color";

type ColorPickerChangeListener = { onChange(hex: string): void }["onChange"];

interface Props extends Partial<HTMLChakraProps<"div">> {
  title: string;
  colors: string[];
  onChangeColor: ColorPickerChangeListener;
}

export function ColorPicker({ title, colors, onChangeColor, ...rest }: Props) {
  const [color, setColor] = useState(colors[0]);
  return (
    <Box w='100%' {...rest}
    onMouseLeave={() => {
      onChangeColor(color);
    }}
    >
      <FormLabel>{title}</FormLabel>
      <CirclePicker
        width="250px"
        circleSize={40}
        circleSpacing={10}
        color={color} 
        colors={colors}
        onSwatchHover={(color) => {
          onChangeColor(color.hex);
      }}
        onChange={(color) => {
            setColor(color.hex);
            onChangeColor(color.hex);
        }} 
        />
    </Box>
  )
}