import p1_img from './google-pixel-1.png'
import p1_1_img from './google-pixel-2.png'
import p1_2_img from './google-pixel-3.png'
import p1_3_img from './google-pixel-4.png'
import p1_4_img from './google-pixel-5.png'

import p2_img from './hp-probook-1.png'
import p2_1_img from './hp-probook-2.png'
import p2_2_img from './hp-probook-3.jpg'
import p2_3_img from './hp-probook-4.png'
import p2_4_img from './hp-probook-5.png'

import p3_img from './iphone12-1.png'
import p3_1_img from './iphone12-2.webp'
import p3_2_img from './iphone12-3.webp'
import p3_3_img from './iphone12-4.webp'
import p3_4_img from './iphone12-5.webp'
import p3_5_img from './iphone12-6.webp'
import p3_6_img from './iphone12-7.webp'

import p4_img from './iphone14-pro-1.webp'
import p4_1_img from './iphone14-pro-2.png'
import p4_2_img from './iphone14-pro-3.png'
import p4_3_img from './iphone14-pro-4.png'
import p4_4_img from './iphone14-pro-5.png'

import p5_img from './iphone15-1.png'
import p5_1_img from './iphone15-2.webp'
import p5_2_img from './iphone15-3.webp'
import p5_3_img from './iphone15-4.webp'
import p5_4_img from './iphone15-5.webp'

import p6_img from './iphone15-plus-1.png'
import p6_1_img from './iphone15-plus-2.png'
import p6_2_img from './iphone15-plus-3.png'
import p6_3_img from './iphone15-plus-4.png'
import p6_4_img from './iphone15-plus-5.png'
import p6_5_img from './iphone15-plus-6.png'
import p6_6_img from './iphone15-plus-7.png'

import p7_img from './iphone15-pro-1.png'
import p7_1_img from './iphone15-pro-2.png'
import p7_2_img from './iphone15-pro-3.png'
import p7_3_img from './iphone15-pro-4.png'

import p8_img from './iphone15-pro-max-1.webp'
import p8_1_img from './iphone15-pro-max-2.webp'
import p8_2_img from './iphone15-pro-max-3.png'

import p9_img from './iwatch-se-1.webp'
import p9_1_img from './iwatch-se-2.png'
import p9_2_img from './iwatch-se-3.png'
import p9_3_img from './iwatch-se-4.png'
import p9_4_img from './iwatch-se-5.png'
import p9_5_img from './iwatch-se-6.png'
import p9_6_img from './iwatch-se-7.png'

import p10_img from './iwatch-series-8-1.png'
import p10_1_img from './iwatch-series-8-2.webp'
import p10_2_img from './iwatch-series-8-3.webp'
import p10_3_img from './iwatch-series-8-4.webp'
import p10_4_img from './iwatch-series-8-5.webp'
import p10_5_img from './iwatch-series-8-6.webp'
import p10_6_img from './iwatch-series-8-7.webp'
import p10_7_img from './iwatch-series-8-8.webp'

import p11_img from './macbook-pro-15-1.png'
import p11_1_img from './macbook-pro-15-2.png'
import p11_3_img from './macbook-pro-15-4.png'
import p11_4_img from './macbook-pro-15-5.png'

import p12_img from './msi-cyborg-1.png'
import p12_1_img from './msi-cyborg-2.png'
import p12_2_img from './msi-cyborg-3.png'
import p12_3_img from './msi-cyborg-4.png'
import p12_4_img from './msi-cyborg-5.png'

import p13_img from './samsung-galaxy-watch-1.webp'
import p13_1_img from './samsung-galaxy-watch-2.png'
import p13_2_img from './samsung-galaxy-watch-3.png'
import p13_3_img from './samsung-galaxy-watch-4.webp'

import p14_img from './samsung-galaxy-watch7-1.webp'

let all_Product = [
    {
        id: 1,
        name: "Google Pixelbook 13.3",
        images: [p1_img, p1_1_img, p1_2_img, p1_3_img, p1_4_img],
        new_price: 349.99,
        old_price: 444.99,
        category: "laptop",
        color: ['Black'],
        stock: 5,
    },
    {
        id: 2,
        name: "HP Probook",
        images: [p2_img, p2_1_img, p2_2_img, p2_3_img, p2_4_img],
        new_price: 139.99,
        old_price: 150.00,
        category: "tablet",
        color: ['Black'],
        stock: 10,
    },
    {
        id: 3,
        name: "Apple Iphone 12",
        images: [p3_img, p3_1_img, p3_2_img, p3_3_img, p3_4_img, p3_5_img, p3_6_img],
        new_price: 259.85,
        old_price: 290.85,
        category: "phone",
        color: ["Black", "White", "Green", "Purple", "Blue", "Red"],
        stock: 7,
    },
    {
        id: 4,
        name: "Apple Iphone 14 Pro",
        images: [p4_img, p4_1_img, p4_2_img, p4_3_img, p4_4_img],
        new_price: 449.95,
        old_price: 500.95,
        category: "phone",
        color: ["Black", "White", "Purple", "Blue", "Red"],
        stock: 7,
    },
    {
        id: 5,
        name: "Apple Iphone 15",
        images: [p5_img, p5_1_img, p5_2_img, p5_3_img, p5_4_img],
        new_price: 634.95,
        old_price: 799.00,
        category: "phone",
        color: ['Black', 'Blue', 'Green', 'Pink', 'Yellow'],
        stock: 10,
    },
    {
        id: 6,
        name: "Apple Iphone 15 Plus",
        images: [p6_img, p6_1_img, p6_2_img, p6_3_img, p6_4_img, p6_5_img, p6_6_img],
        new_price: 669.95,
        old_price: 899.00,
        category: "phone",
        color: ['Black', 'Blue', 'Green', 'Pink', 'Yellow'],
        stock: 8,
    },
    {
        id: 7,
        name: "Apple Iphone 15 Pro",
        images: [p7_img, p7_1_img, p7_2_img, p7_3_img],
        new_price: 774.99,
        old_price: 800.99,
        category: "phone",
        color: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
        stock: 8,
    },
    {
        id: 8,
        name: "Apple Iphone 15 Pro Max",
        images: [p8_img, p8_1_img, p8_2_img],
        new_price: 900.00,
        old_price: 130.00,
        category: "phone",
        color: ['White Titanium'],
        stock: 10,
    },
    {
        id: 9,
        name: "Silicone Sport Strap Band",
        images: [p9_img, p9_1_img, p9_2_img, p9_3_img, p9_4_img, p9_5_img, p9_6_img],
        new_price: 2.53,
        old_price: 3.09,
        category: "watch",
        color: ['Black', 'Yellow', 'Papaya', 'Mint', 'Red Wind', 'Red'],
        stock: 50,
    },
    {
        id: 10,
        name: "Silicone Sport Strap Band",
        images: [p10_img, p10_1_img, p10_2_img, p10_3_img, p10_4_img, p10_5_img, p10_6_img, p10_7_img],
        new_price: 2.53,
        old_price: 3.09,
        category: "watch",
        color: ['Pink', 'Black', 'Yellow', 'Red', 'Green', 'Brown'],
        stock: 20,
    },
    {
        id: 11,
        name: "Apple MacBook Pro",
        images: [p11_img, p11_1_img, p11_3_img, p11_4_img],
        new_price: 449.00,
        old_price: 573.04,
        category: "laptop",
        color: ['White'],
        stock: 5,
    },
    {
        id: 12,
        name: "MSI Cyborg 15",
        images: [p12_img, p12_1_img, p12_2_img, p12_3_img, p12_4_img],
        new_price: 735.00,
        old_price: 938.04,
        category: "laptop",
        color: ['Black'],
        stock: 9,
    },
    {
        id: 13,
        name: "Samsung Galaxy Watch 5",
        images: [p13_img, p13_1_img, p13_2_img, p13_3_img],
        new_price: 111.99,
        old_price: 299.99,
        category: "watch",
        color: ['Black', 'Pink Gold', 'Purple'],
        stock: 15,
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch 7",
        images: [p14_img],
        new_price: 239.98,
        old_price: 250.98,
        category: "watch",
        color: ['Black'],
        stock: 0,
    },
];

export default all_Product