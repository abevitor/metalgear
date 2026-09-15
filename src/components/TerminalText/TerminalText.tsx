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

    useEffect(() => {
        const startTimeout = window.setTimeout(() => {
            setVisibleLines([])
            setCurrentLine(0)
            setCurrentCharacter(0)
        }, delay)

        return () => window.clearTimeout(startTimeout)

    }, [delay])

    useEffect(() => {
        if(currentLine >= lines.length){
            return
        }

        const line = lines[currentLine]

        if(currentCharacter < line.length) {
            const timeout = window.setTimeout(() => {
                setVisibleLines((previous) => {
                    const updated = [...previous]
                    updated[currentLine] = line.slice(0, currentCharacter + 1)
                return updated
                            })

                            setCurrentCharacter((previous) => previous + 1)
            }, speed)
            
            return () => window.clearTimeout(timeout)
        }

        const timeout = window.setTimeout(() => {
            setCurrentLine((previous) => previous + 1)
            setCurrentCharacter(0)
        }, 180)

        return () => window.clearTimeout(timeout)

    }, [ currentCharacter, currentLine, lines, speed])

     return (
    <div className="terminal-text">
      {visibleLines.map((line, index) => (
        <div className="terminal-line" key={`${line}-${index}`}>
          <span className="terminal-prompt">&gt;</span>
          <span>{line}</span>

          {index === currentLine && currentLine < lines.length && (
            <span className="terminal-cursor">_</span>
          )}
        </div>
      ))}
    </div>
  )
}