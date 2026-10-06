import { useEffect, useRef, useState } from 'react'
import {
    Pause,
    Play,
    Radio,
    Volume2,
    VolumeX,
} from 'lucide-react'

import type { RadioStation } from '../../data/codec'

import './RadioPlayer.css'

interface RadioPlayerProps {
    station: RadioStation
}

export function RadioPlayer({
    station,
}: RadioPlayerProps){
    const audioRef = useRef<HTMLAudioElement | null>(null)
    
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.75)

    const [status, setStatus] = useState<
    'READY' | 'TRANSMITTING' | 'OFFLINE'>('READY')

    useEffect(() => {
        if(!audioRef.current){
            return
        }

        audioRef.current.volume = volume
    }, [volume])

    const handlePlayPause = async () => {
        if(!audioRef.current){
            return
        }

        if(isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
            setStatus('READY')
            return
        }
        try {
            await audioRef.current.play()

            setIsPlaying(true)
            setStatus('TRANSMITTING')
        } catch {
            setIsPlaying(false)
            setStatus('OFFLINE')
        }
    }

    const handleSeek = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if(!audioRef.current) {
            return
        }

        const newTime = Number(event.target.value)

        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
    }

    const handleVolume = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newVolume = Number(event.target.value)

        setVolume(newVolume)

        if (audioRef.current) {
            audioRef.current.volume = newVolume
            audioRef.current.muted = false
        }

        setIsMuted(newVolume === 0)
    }
    
    const handleMute = () => {
        if (!audioRef.current) {
            return
        }

        const newMutedState = !isMuted

        audioRef.current.muted = newMutedState
        setIsMuted(newMutedState)
    }

    const handleLoadedMetadata = () => {
        if (!audioRef.current){
            return
        }

        setDuration(audioRef.current.duration)
    }

    const handleTimeUpdate = () => {
        if(!audioRef.current) {
            return
        }

        setCurrentTime(audioRef.current.currentTime)
    }

    const handleEnded = () => {
        setIsPlaying(false)
        setStatus('READY')
        setCurrentTime(0)
    }

    const handleError = () => {
        setIsPlaying(false)
        setStatus('OFFLINE')
    }
    
    const formatTime = (time:number) => {
        if(!Number.isFinite(time)) {
            return '00:00'
        }

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        return  `${minutes
      .toString()
      .padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
    }

     return (
    <section className="radio-player">
      <audio
        ref={audioRef}
        src={station.audio}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
      />

      <div className="radio-player-header">
        <div className="radio-player-title">
          <Radio size={15} />

          <div>
            <span>FOXHOUND RADIO</span>

            <strong>{station.frequency}</strong>
          </div>
        </div>

        <div
          className={`radio-player-status radio-player-status-${status.toLowerCase()}`}
        >
          <span />

          {status}
        </div>
      </div>

      <div className="radio-player-main">
        <div className="radio-player-station">
          <span>TRANSMISSION</span>

          <strong>{station.name}</strong>

          <p>{station.description}</p>
        </div>

        <button
          className="radio-player-play"
          type="button"
          onClick={handlePlayPause}
          aria-label={
            isPlaying ? 'Pause radio' : 'Play radio'
          }
        >
          {isPlaying ? (
            <Pause size={18} />
          ) : (
            <Play size={18} />
          )}
        </button>
      </div>

      <div className="radio-player-progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          disabled={!duration}
          aria-label="Radio progress"
        />

        <span>{formatTime(duration)}</span>
      </div>

      <div className="radio-player-bottom">
        <button
          className="radio-player-volume-icon"
          type="button"
          onClick={handleMute}
          aria-label={
            isMuted ? 'Unmute radio' : 'Mute radio'
          }
        >
          {isMuted || volume === 0 ? (
            <VolumeX size={15} />
          ) : (
            <Volume2 size={15} />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolume}
          aria-label="Radio volume"
        />

        <span className="radio-player-frequency">
          SECURE CHANNEL
        </span>
      </div>
    </section>
  )

}

