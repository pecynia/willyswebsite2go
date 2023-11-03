import { useEffect, useState } from 'react'
import { HexColorPicker } from "react-colorful"
import {hexToHsl, hslToHex} from "@/app/utils/hexToHsl"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
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
  DialogClose
} from "@/app/components/ui/dialog"
import { Input } from '@/app/components/ui/input'

let validationSchema = yup.object().shape({
    colorCode : yup.string()
        .required('Kleurcode is vereist')
        .matches(/^#([0-9a-f]{3}){1,2}$/i, 'Kleurcode is onjuist')
})

function kebabToCamel(s: string): string {
    // kebab-case to camelCase
    return s.replace(/(-\w)/g, m => m[1].toUpperCase());
}
  
function ThemeColorDialog({ colorNameKebab }: { colorNameKebab: string }) {
    // Convert kebab-case to camelCase if necessary
    const colorName = kebabToCamel(colorNameKebab) as keyof ThemeColors;
    const [tryingColor, setTryingColor] = useState("#50ad30")

    // Set the trying color on mount to the current color 
    useEffect(() => {
        const currentColor = hslToHex(getComputedStyle(document.documentElement).getPropertyValue(`--${colorNameKebab}`))
        setTryingColor(currentColor)
    }, [])

    const { register, setValue, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(validationSchema)
    })
    
    const { ref, onChange, ...rest } = register('colorCode')

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value
        setTryingColor(color)
        setValue('colorCode', color)
        
        if (/^#([0-9a-f]{3}){1,2}$/i.test(color)) {
            const tryingColorHSL = hexToHsl(color)
            document.documentElement.style.setProperty('--trying', `${tryingColorHSL[0]} ${tryingColorHSL[1]}% ${tryingColorHSL[2]}%`)
        } else {
            document.documentElement.style.setProperty('--trying', `0 0% 0%`)
        }

        trigger("colorCode")
    }
   
    const handlePickerChange = (color: string) => {
        setTryingColor(color)
        setValue('colorCode', color)
        const tryingColorHSL = hexToHsl(color)
        document.documentElement.style.setProperty('--trying', `${tryingColorHSL[0]} ${tryingColorHSL[1]}% ${tryingColorHSL[2]}%`)
    
        trigger("colorCode")
    }

    const handleSave = () => {
        const hsl = hexToHsl(tryingColor)
        if (hsl) {
            document.documentElement.style.setProperty(`--${colorNameKebab}`, `${hsl[0]} ${hsl[1]}% ${hsl[2]}%`)
        }
        console.log(hsl)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Paintbrush className="h-5 w-5" style={{ color: hslToHex(getComputedStyle(document.documentElement).getPropertyValue(`--${colorNameKebab}`)) }} />
                    <span className="sr-only">Theme color</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Thema kleur</DialogTitle>
                    <DialogDescription>
                        Gebruik de kleurkiezer om de primaire kleur van de website te veranderen.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 flex items-start space-x-4">
                    <HexColorPicker className="hover:cursor-pointer" color={tryingColor} onChange={handlePickerChange} />
                    
                    <div className="flex flex-col space-y-2">
                        <div className="w-full h-6 rounded-full" style={{ backgroundColor: tryingColor }}>
                            {}
                        </div>
                        <div>
                            <Input 
                                type="text" 
                                value={tryingColor} 
                                placeholder={tryingColor}
                                onChange={(e) => {
                                    handleColorChange(e)
                                    onChange(e)
                                }}
                                ref={ref}
                                {...rest}
                            />
                            {errors.colorCode && <span className="text-destructive mt-1 ml-1 text-xs">{errors.colorCode.message}</span>}
                            <p className="text-gray-400 ml-1 mt-2">{colorName}</p>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => handleSave()} disabled={!!errors.colorCode}>
                            Opslaan
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ThemeColorDialog
