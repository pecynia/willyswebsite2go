import { useState } from 'react'
import { HexColorPicker } from "react-colorful"
import hexToHsl from "@/app/utils/hexToHsl"
import { ThemeColors } from '@/../../typings'
import { Button } from "@/app/components/ui/button"
import { Paintbrush } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"

function ThemeColorDialog() {
    const [currentColor, setCurrentColor] = useState("#3498db")
    const [isOpen, setIsOpen] = useState(false);

    const handleColorChange = (color: string) => {
        setCurrentColor(color) // in hex
        const currentColorHSL = hexToHsl(color)
        document.documentElement.style.setProperty('--primary', `${currentColorHSL[0]} ${currentColorHSL[1]}% ${currentColorHSL[2]}%`)
    }

    const handleSave = () => {
        // Convert hex color to HSL
        const hsl = hexToHsl(currentColor)
        if (hsl) {
            console.log(`HSL: ${hsl[0]} ${hsl[1]}% ${hsl[2]}%`)
            document.documentElement.style.setProperty('--primary', `${hsl[0]} ${hsl[1]}% ${hsl[2]}%`)
        }
        // Close the dialog
        setIsOpen(false);
    }

    return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <Paintbrush className="h-5 w-5" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Thema kleur</DialogTitle>
                        <DialogDescription>
                            Gebruik de kleurkiezer om de primaire kleur van de website te veranderen.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <HexColorPicker 
                        color={currentColor} onChange={handleColorChange} />
                    </div>
                    <DialogFooter>
                        <Button type="submit"
                            onClick={handleSave}>Opslaan</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

)
}

export default ThemeColorDialog
