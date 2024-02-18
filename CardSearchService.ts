import { Card } from "./CardTypes"

const CardQueryService = {
    getCards: (card:Card)=>{
        const searchFields = Object.keys(card)
        console.log(searchFields)
    }
}

export {CardQueryService}