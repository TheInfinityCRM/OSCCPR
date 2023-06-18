import rental01 from '@assets/imgs/rentals/Two Lane Racing Slide.png'
import rental02 from '@assets/imgs/rentals/Kids Bounce House.png'
import rental03 from '@assets/imgs/rentals/Bounce House With Slide.png'
import rental04 from '@assets/imgs/rentals/Obstical Racing Slide.png'
import rental05 from '@assets/imgs/rentals/Unicorn Bounce House.png'
import rental06 from '@assets/imgs/rentals/Amazon Racing Slide.png'
import rental07 from '@assets/imgs/rentals/Penis Ice Luge.png'
import rental08 from '@assets/imgs/rentals/Boob Ice Luge.png'


const category = {
    1:"Normal",
    2:"Adult",
}
const status = {
    1:"Available",
    2:"Sold Out"
}

export const rentalItems = [
    {
        id:1,
        image:rental01,
        name:'Two Lane Racing Slide',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[1]
    },
    {
        id:2,
        image:rental02,
        name:'Kids Bounce House',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[1]
    },
    {
        id:3,
        image:rental03,
        name:'Bounce House With Slide',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[1]
    },
    {
        id:4,
        image:rental04,
        name:'Obstical Racing Slide',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[2]
    },
    {
        id:5,
        image:rental05,
        name:'Unicorn Bounce House',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[2]
    },
    {
        id:6,
        image:rental06,
        name:'Amazon Racing Slide',
        price:'$500.00',
        detailUrl:'',
        category:category[1],
        status:status[2]
    },
    {
        id:7,
        image:rental07,
        name:'Penis Ice Luge',
        price:'$500.00',
        detailUrl:'',
        category:category[2],
        status:status[1]
    },
    {
        id:8,
        image:rental08,
        name:'Boob Ice Luge',
        price:'$500.00',
        detailUrl:'',
        category:category[2],
        status:status[1]
    }
    
]