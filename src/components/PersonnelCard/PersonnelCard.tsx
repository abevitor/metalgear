import type { Character } from '../../data/Personnel'
import './PersonnelCard.css'

interface PersonnelCardProps {
    character: Character
    onClick: () => void
}

export function PersonnelCard({
    character,
    onClick,
}: PersonnelCardProps){
    return ( 
        <button
        className="personel-card"
        onClick={onClick}
        type="button"
        >
            <div className="personnel-card-image">
                <img
                src={character.cardImage}
                alt={character.name}
                />

                <div className="personnel-static" />
                <div className="personnel-scanline"/>
                <div className="personnel-target" />

                <span className="personnel-id">
                    {character.id}
                </span>

                <span className="personnel-access">
                    ACESS
                </span>
            </div>

            <div className="personnel-card-info">
                <span className="personnel-codename">
                    {character.codename}
                </span>

                <strong>{character.name}</strong>

                <span className="personnel-affiliation">
                    {character.affiliation}
                </span>
            </div>
        </button>
    )
}