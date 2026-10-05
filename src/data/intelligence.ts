export interface intelligenceRecord {
   id:string
   title: string 
   category: 'PERSONNEL' | 'OPERATIONS' | 'LOCATIONS' | 'EVENTS'
   classification: 'OMEGA' | 'ALPHA'| 'BRAVO'
   subject: string
   date: string 
   status: 'ACTIVE' |'ARCHIVED' | 'CLASSIFED'
   summary: string
   document: string
}