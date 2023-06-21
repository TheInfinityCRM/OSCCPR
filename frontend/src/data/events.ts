import kidsevents from '@assets/imgs/kidsevents.jpeg'
import plusevents from '@assets/imgs/18plusevents.jpeg'
import allevents from '@assets/imgs/allevents.jpeg'
import kidsParty from '@assets/imgs/events/kids party.png'
import toddlerParty from '@assets/imgs/events/Toddler Party.png'
import adultParty from '@assets/imgs/events/Adult Party.png'
import holidayParty from '@assets/imgs/events/Holiday Party.png'
import corpEvent from '@assets/imgs/events/Corporate Event.png'
import bachelor from '@assets/imgs/events/Bachelor.png'


const category = {
    1:"Kids Events",
    2:"18+ Events",
    3:"All Events"
}

export const events = [
    {
        id:1, 
        Image:kidsevents, 
        alt:'event 1', 
        title:category[1],
    },
    {
        id:2, 
        Image:plusevents, 
        alt:'event 2', 
        title:category[2],
    },
    {
        id:3, 
        Image:allevents, 
        alt:'event 3', 
        title:category[3],
    },
]

export const eventDetail = [
    {
        id:1,
        name:'Kids Party',
        image:kidsParty,
        category:category[1]
    },
    {
        id:2,
        name:'Toddler Party',
        image:toddlerParty,
        category:category[1]
    },
    {
        id:3,
        name:'Adult Party',
        image:adultParty,
        category:category[2]
    },
    {
        id:4,
        name:'Holiday Party',
        image:holidayParty,
        category:category[2]
    },
    {
        id:5,
        name:'Corporative Event',
        image:corpEvent,
        category:category[2]
    },
    {
        id:6,
        name:'Bachelor/Bachelorette',
        image:bachelor,
        category:category[2]
    },
]

