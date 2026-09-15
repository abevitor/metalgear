import { useEffect, useState } from "react";
import './TerminalText.css'

interface TerminalTextProps {
    lines: string[]
    speed?: number
    delay?: number
}

export function TerminalText({
    lines, speed = 25,
    delay = 0,
}: TerminalTextProps) {
    const [visibleLines, setVisibleLines] = useState<string[]>([])
    const [currentLine, setCurrentLine] = useState(0)
    const [currentCharacter, setCurrentCharacter] = useState(0)
}