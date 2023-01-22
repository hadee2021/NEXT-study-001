import { Flowbite } from "flowbite-react";
import React, { FC, PropsWithChildren } from "react";
import { flowbiteTheme as theme } from "../core/theme";


const FlowbiteContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flowbite theme={{ theme }}>{children}</Flowbite>
  )
}

export default FlowbiteContext