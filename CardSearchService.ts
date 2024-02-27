import { Card } from "./CardTypes"
import { web } from "./QueryService"
import { helper } from "./helper"

const CardQueryService = {
    getCards: (card:Card)=>{
        const searchObject = helper.findValueFields(card)
        console.log(searchObject)
    }
}

export {CardQueryService}