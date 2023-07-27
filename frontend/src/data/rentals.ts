import rental01 from '@assets/imgs/rentals/Two Lane Racing Slide.png'
import rental02 from '@assets/imgs/rentals/Kids Bounce House.png'
import rental03 from '@assets/imgs/rentals/Bounce House With Slide.png'
import rental04 from '@assets/imgs/rentals/Obstical Racing Slide.png'
import rental05 from '@assets/imgs/rentals/Unicorn Bounce House.png'
import rental06 from '@assets/imgs/rentals/Amazon Racing Slide.png'
import rental07 from '@assets/imgs/rentals/Penis Ice Luge.png'
import rental08 from '@assets/imgs/rentals/Boob Ice Luge.png'
import rental09 from '@assets/imgs/rentals/speaker.png'
import rental10 from '@assets/imgs/rentals/regular ice luge.png'
import rental11 from '@assets/imgs/rentals/Toddler Water Slide.png'
import rental01Booking from '@assets/imgs/rentalBooking/Two Lane Racing Slide.png'
import rental02Booking from '@assets/imgs/rentalBooking/Kids Bounce House.png'
import rental03Booking from '@assets/imgs/rentalBooking/Bounce House With Slide.png'
import rental04Booking from '@assets/imgs/rentalBooking/Toddler Water Slide 2.png'



enum category  {
    "Normal"=1,
    "Adult"=2,
}
enum status  {
    "Available"=1,
    "SoldOut"=2
}
export const rentalItems = [
    {
        id:1,
        image:rental01,
        name:'Tropical Inferno Water Slide',
        price:'$300.00',
        twoDayRental:'$500.00',
        weekendRental:'$650.00',
        dimensions:"25' long, 9' wide, 15' tall",
        bookingImg:rental01Booking,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/ZMjAecjJsumgt2Cn1Z8Y',
        category:category.Normal,
        status:status.Available   
    },
    {
        id:2,
        image:rental02,
        name:'Toddler Bounce House',
        price:'$100.00',
        twoDayRental:'$150.00',
        weekendRental:'$200.00',
        dimensions:"8' long, 8' wide, 9' tall",
        bookingImg:rental02Booking,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/cIxZmcCLhgPPmC6LWXSj',
        category:category.Normal,
        status:status.Available
    },

    {
        id:11,
        image:rental11,
        name:'Toddler Water Slide',
        price:'$100.00',
        twoDayRental:'$150.00',
        weekendRental:'$200.00',
        dimensions:"8' long, 8' wide, 9' tall",
        bookingImg:rental04Booking,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/9ZJgDDEe8Z7HX7Hn9HUF',
        category:category.Normal,
        status:status.Available
    },
    
    {
        id:3,
        image:rental03,
        name:'Castle Bounce House/Slide',
        price:'$200.00',
        twoDayRental:'$300.00',
        weekendRental:'$400.00',
        dimensions:"27' long, 13' wide, 14' tall",
        bookingImg:rental03Booking,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/irOG8ZeghybQ7wgbOL2Z',
        category:category.Normal,
        status:status.Available
    },

    {
        id:7,
        image:rental07,
        name:'Bachelorette Ice Luge',
        price:'$75.00',
        withled:'$90.00',
        bookingImg:rental07,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/8qYkWYjYvz3uKg03qbhm',
        category:category.Adult,
        status:status.Available
    },
    {
        id:8,
        image:rental08,
        name:'Bachelor Ice Luge',
        price:'$75.00',
        withled:'$90.00',
        bookingImg:rental08,
        detailUrl:'https://api.leadconnectorhq.com/widget/booking/2TOD7m6EYgB0mqzY8u3G',
        category:category.Adult,
        status:status.Available
    },
    {
        id:9,
        image:rental09,
        name:'15" Bluetooth party speaker',
        price:'$50.00',
        bookingImg:rental09,
        detailUrl:'',
        category:category.Normal,
        status:status.Available
    },
    {
        id:10,
        image:rental10,
        name:'Regular Ice Luge',
        price:'$50.00',
        withLed:'$65.00',
        bookingImg:rental10,
        detailUrl:'',
        category:category.Normal,
        status:status.Available
    },
    
]
