import {CardQueryService} from "./CardSearchService"
import { Card } from "./CardTypes"

app.controller('controller', function($scope) {

    const card:Card = {
        Type: "Spell Card",
        Race: "Ritual",
        ATK: 0
    }

    $scope.test = ()=>{
        CardQueryService.getCards(card)
    }
    
}
)