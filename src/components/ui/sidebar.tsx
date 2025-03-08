"use client"

import * as React from "react"
import { ChevronRight, Menu, X, PanelLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import type { ButtonProps } from "@/components/ui/Button"
import { Slot } from "@radix-ui/react-slot"
import { useIsMobile } from "@/hooks/use-mobile"

interface SidebarContextState {
  open: boolean
  collapsed: boolean
  setOpen: (open: boolean) => void
  setCollapsed: (collapsed: boolean) => void
}

interface ToggleContextState {
  toggled: boolean
  setToggled: (toggled: boolean) => void
}

interface SidebarProviderProps {
  defaultOpen?: boolean
  defaultCollapsed?: boolean
  defaultToggled?: boolean
  onOpenChange?: (open: boolean) => void
  onCollapsedChange?: (collapsed: boolean) => void
  onToggledChange?: (toggled: boolean) => void
  children: React.ReactNode
}

const SidebarContext = React.createContext<SidebarContextState | undefined>(
  undefined
)

const ToggleContext = React.createContext<ToggleContextState | undefined>(
  undefined
)

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a <SidebarProvider />")
  }

  return context
}

function useToggle() {
  const context = React.useContext(ToggleContext)

  if (!context) {
    throw new Error("useToggle must be used within a <SidebarProvider />")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  defaultCollapsed = false,
  defaultToggled = false,
  onOpenChange,
  onCollapsedChange,
  onToggledChange,
  children,
}: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)
  const [toggled, setToggled] = React.useState(defaultToggled)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    if (isMobile) {
      setCollapsed(true)
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isMobile])

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open)
      onOpenChange?.(open)
    },
    [onOpenChange]
  )

  const handleCollapsedChange = React.useCallback(
    (collapsed: boolean) => {
      setCollapsed(collapsed)
      onCollapsedChange?.(collapsed)
    },
    [onCollapsedChange]
  )

  const handleToggledChange = React.useCallback(
    (toggled: boolean) => {
      setToggled(toggled)
      onToggledChange?.(toggled)
    },
    [onToggledChange]
  )

  const value = React.useMemo(
    () => ({
      open,
      collapsed,
      setOpen: handleOpenChange,
      setCollapsed: handleCollapsedChange,
    }),
    [open, collapsed, handleOpenChange, handleCollapsedChange]
  )

  const toggleValue = React.useMemo(
    () => ({
      toggled,
      setToggled: handleToggledChange,
    }),
    [toggled, handleToggledChange]
  )

  return (
    <ToggleContext.Provider value={toggleValue}>
      <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
    </ToggleContext.Provider>
  )
}

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open, collapsed } = useSidebar()
  const isMobile = useIsMobile()

  return (
    <aside
      ref={ref}
      className={cn(
        "group relative flex h-screen flex-col border-r bg-popover text-popover-foreground transition-all",
        open
          ? "w-[280px] lg:w-[280px]"
          : "w-[70px] group-hover:w-[280px] lg:group-hover:w-[280px]",
        collapsed && "w-[70px] group-hover:w-[280px] lg:group-hover:w-[280px]",
        !isMobile && "sticky top-0",
        className
      )}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'ref'>
>(({ className, ...props }, ref) => {
  const { setToggled, toggled } = useToggle()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      className={cn(
        "h-9 w-9 p-0 [&_svg]:h-5 [&_svg]:w-5",
        className
      )}
      onClick={() => setToggled(!toggled)}
      {...props}
    >
      <Menu />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open, collapsed } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-3 py-2",
        collapsed && "px-2",
        className
      )}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <p
      ref={ref}
      className={cn(
        "truncate text-sm font-semibold",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarHeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center space-x-2",
        className
      )}
      {...props}
    />
  )
})
SidebarHeaderActions.displayName = "SidebarHeaderActions"

const SidebarCollapse = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'ref'>
>(({ className, ...props }, ref) => {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      className={cn(
        "h-9 w-9 p-0 [&_svg]:h-5 [&_svg]:w-5",
        className
      )}
      onClick={() => setCollapsed(!collapsed)}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">
        {collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      </span>
    </Button>
  )
})
SidebarCollapse.displayName = "SidebarCollapse"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open, collapsed } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "flex-1 overflow-hidden overscroll-contain p-2",
        open ? "block" : "hidden",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-2 px-3",
        className
      )}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "px-3 text-sm font-medium",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-1",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-1",
        collapsed && "px-2",
        className
      )}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <p
      ref={ref}
      className={cn(
        "truncate text-sm",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuText.displayName = "SidebarMenuText"

const SidebarMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'ref'>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium",
        collapsed && "justify-center",
        className
      )}
      {...props}
    >
      <SidebarMenuText>Settings</SidebarMenuText>
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
})
SidebarMenuTrigger.displayName = "SidebarMenuTrigger"

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const { collapsed } = useSidebar()
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      className={cn(
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
        collapsed && "justify-center px-2 py-2",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <label
      ref={ref}
      className={cn(
        "px-3 text-sm font-medium",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuLabel.displayName = "SidebarMenuLabel"

const SidebarMenuItemButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const { collapsed } = useSidebar()
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      className={cn(
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2 py-2",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuItemButton.displayName = "SidebarMenuItemButton"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open, collapsed } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-3 py-2",
        open ? "block" : "hidden",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <a
      ref={ref}
      className={cn(
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2 py-2",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuLink.displayName = "SidebarMenuLink"

const SidebarMenuLinkText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <p
      ref={ref}
      className={cn(
        "truncate text-sm",
        collapsed && "hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuLinkText.displayName = "SidebarMenuLinkText"

const SidebarMenuCollapse = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "ref">
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar()

  return (
    <Button
      ref={ref}
      className={cn(
        "group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2 py-2",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuCollapse.displayName = "SidebarMenuCollapse"

const SidebarClose = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'ref'>
>(({ className, ...props }, ref) => {
  const { setOpen } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      className={cn(
        "h-9 w-9 p-0 [&_svg]:h-5 [&_svg]:w-5",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      <X />
      <span className="sr-only">Close Sidebar</span>
    </Button>
  )
})
SidebarClose.displayName = "SidebarClose"

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  useSidebar,
  useToggle,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarHeaderActions,
  SidebarCollapse,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuText,
  SidebarMenuTrigger,
  SidebarMenuButton,
  SidebarMenuLabel,
  SidebarMenuItemButton,
  SidebarFooter,
  SidebarMenuLink,
  SidebarMenuLinkText,
  SidebarMenuCollapse,
  SidebarClose,
}
