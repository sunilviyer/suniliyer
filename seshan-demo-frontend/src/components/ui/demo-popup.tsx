import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DemoPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export function DemoPopup({ isOpen, onClose, title, description }: DemoPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2 text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
