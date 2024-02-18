import {CardQueryService} from "./CardSearchService"
import { Card } from "./CardTypes"

app.controller('controller', function($scope) {

    const card:Card = {
        Type: "Spell Card",
        Race: "Ritual"
    }

    $scope.test = ()=>{
        CardQueryService.getCards(card)
    }
    
    }
)