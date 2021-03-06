import Image from "next/image"
import { chakra } from "@chakra-ui/react"

const CustomImage= chakra(Image,{
    shouldForwardProp:(prop)=>[
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop)
})

export default CustomImage