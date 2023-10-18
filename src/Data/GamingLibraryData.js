import game_01 from '../assets/images/game-01.jpg'
import game_02 from '../assets/images/game-02.jpg'
import game_03 from '../assets/images/game-03.jpg'


import downloaded_01 from '../assets/images/downloaded-01.jpg'
import downloaded_02 from '../assets/images/downloaded-02.jpg'
import downloaded_03 from '../assets/images/fifa23.jpg'




const GamingLibraryData =  [
    { // CARD-01
        id          :  "library_item_1"         , 
        image       :  game_01                  , 
        title       :  "Fortnite"               ,
        category    :  "Battle "                ,
        data_added  :  "24/08/2036"             , 
        hours_played:  "66 H 2 Min"             , 
        download    :  "2.3M"                   , 
        to_path     :  "/OnlineGames/Fortnite"     
    },


    { // CARD-02
        id          :  "library_item_2"     , 
        image       :  game_02              , 
        title       :  "PUBG"               , 
        category    :  "War"                , 
        data_added  :  "22/08/2036"         , 
        hours_played:  "75 H 2 Min"         , 
        download    :  "4.3M"               ,
        to_path     :  "/OnlineGames/PUBG"
    },


    { // CARD-03
        id          :  "library_item_3"           , 
        image       :  game_03                    , 
        title       :  "COD"                      , 
        category    :  "Shooting"                 , 
        data_added  :  "21/08/2036"               , 
        hours_played:  "86 H 5 Min"               , 
        download    :  "3.2M"                     ,
        to_path     :  "/OnlineGames/CallOfDuty"
    }
]





const GamingLibraryDownloadedData =  [
    { // CARD-01
        id          :  "Downloaded_item_1"  , 
        image       :  downloaded_01        , 
        title       :  "CS-Go"              ,
        category    :  "Shooting"           ,
        data_added  :  "24/08/2036"         , 
        hours_played:  "66 H 2 Min"         , 
        download    :  "1.1M"               , 
    },


    { // CARD-02
        id          :  "Downloaded_item_2"  , 
        image       :  downloaded_02        , 
        title       :  "Valorant"           , 
        category    :  "Shooting"           , 
        data_added  :  "22/08/2036"         , 
        hours_played:  "75 H 2 Min"         , 
        download    :  "3.1M"               ,
    },


    { // CARD-03
        id          :  "Downloaded_item_3" , 
        image       :  downloaded_03       ,
        title       :  "FIFA 23"           , 
        category    :  "Football"          , 
        data_added  :  "21/08/2036"        , 
        hours_played:  "86 H 5 Min"        , 
        download    :  "6.3M"              ,
    }
]




export default GamingLibraryData
export       { GamingLibraryDownloadedData }

