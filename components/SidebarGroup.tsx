import React from 'react'
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";
import { useSidebarContext } from "../context/SidebarContext"
import classNames from "classnames";

const SidebarGroup: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  const { 
    isOpenOnSmallScreens: isSidebarOpenOnSmallScreens 
  } = useSidebarContext()
  return (
    <div
      className={classNames(
        "fixed overflow-auto top-0 h-screen z-10 lg:sticky lg:!block",
        {
          hidden: !isSidebarOpenOnSmallScreens,
        }
      )}
    >
      <FlowbiteSidebar>
        {children}
      </FlowbiteSidebar>
    </div>
  )
}

export default Object.assign(SidebarGroup, { ...FlowbiteSidebar})