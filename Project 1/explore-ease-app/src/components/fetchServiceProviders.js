import '../Css/Userview.css';

import img1 from "../media/plumber.jpg";
//import img2 from "../media/plumber2.jpg";
import img3 from "../media/plumber3.jpg";
import img4 from "../media/plumber4.jpg";

import img5 from "../media/electrician.jpg";
import img6 from "../media/electrician2.jpg";
//import img7 from "../media/electrician3.jpg";
import img8 from "../media/electrician4.jpg";

import img9 from "../media/jhadu.jpg";
import img10 from "../media/maid2.jpg";
import img11 from "../media/maid3.jpg";
import img12 from "../media/maid4.jpg";


import img13 from "../media/wifi1.jpg";
import img14 from "../media/wifi2.jpg";
import img15 from "../media/wifi3.jpg";
import img16 from "../media/wifi4.jpg";

//import img17 from "../media/kachra.jpg";
import img18 from "../media/kachra2.jpg";
import img19 from "../media/kachra3.jpeg";
import img20 from "../media/kachra4.jpg";

import img21 from "../media/iron.jpg";
import img22 from "../media/iron2.jpg";
import img23 from "../media/iron3.jpg";
import img24 from "../media/iron4.jpg";

import img25 from "../media/cleaner.jpg";
import img26 from "../media/cleaner2.jpg";
import img27 from "../media/cleaner3.jpg";
import img28 from "../media/cleaner4.jpg";

export async function fetchServiceProviders(service) {
    const providers = {
      plumber: [
        { id: 1, name: 'Pal Plumbing Services', phoneNo: '98204 73544', rating: 4.9, photo: img1 },
        { id: 2, name: 'Modern Plumber', phoneNo: '99728 15677', rating: 4.6, photo: 'https://t3.ftcdn.net/jpg/00/54/34/54/360_F_54345414_dETkGQ7zMBUgbB8Le9b9oYf9DJ4cYZH2.jpg' },
        { id: 3, name: 'Mohan Plumbers', phoneNo: '99728 15677', rating: 3.5, photo: img3 },
        { id: 4, name: 'Arzaan Pluming Solution', phoneNo: '969941 4710', rating: 4.7, photo: img4 },
      ],
         electrician: [
        { id: 1, name: 'Sagar Electrician', phoneNo: '93241 4797', rating: 4.9, photo: img5},
        { id: 2, name: 'Mansi Electricals', phoneNo: '93241 4797', rating: 3.8, photo: img6 },
        { id: 3, name: 'Rajendra Electrician', phoneNo: '94586 08103', rating: 4.6, photo: 'https://www.aselectricals.com/wp-content/uploads/2022/11/electrician.webp' },
        { id: 4, name: 'RK Electrical Works', phoneNo: '98672 27971', rating: 5.0, photo: img8 },
            ],
      maid: [
        { id: 1, name: 'SM Maid Services', phoneNo: '77189 08569', rating: 4.9, photo: img9},
        { id: 2, name: '24/7 Maid Solutions', phoneNo: '82911 38009', rating: 4.1, photo: img10 },
        { id: 3, name: 'Maids Dekho', phoneNo: '93247 50118', rating: 4.9, photo: img11 },
        { id: 4, name: 'Aradhya Maid Service', phoneNo: '99672 77035', rating: 4.7, photo: img12 },
      ],
      wifiProvider: [
        { id: 1, name: 'My Jio Store', phoneNo: '90827 13817', rating: 3.6, photo: img13},
        { id: 2, name: 'Airtel Fiber', phoneNo: '89762 39472', rating: 4.1, photo: img14 },
        { id: 3, name: 'Idea Mini Store', phoneNo: '99303 73030', rating: 3.5, photo: img15 },
        { id: 4, name: 'Hathway wifi', phoneNo: '72087 29937', rating: 4.8, photo: img16 },
      ],
      kachrawala: [
        { id: 1, name: 'Kunal', phoneNo: '96325 87410', rating: 4.5, photo: 'https://kachra.in/hero.jpg'},
        { id: 2, name: 'Rahul', phoneNo: '98765 43210', rating: 3.8, photo: img18 },
        { id: 3, name: 'Digambar', phoneNo: '98745 63210', rating: 4.2, photo: img19 },
        { id: 4, name: 'Vitthal', phoneNo: '98765 43210', rating: 3.6, photo: img20 },
      ],
      ironingMan: [
        { id: 1, name: 'Feel and Shine', phoneNo: '87881 31386', rating: 5.0, photo: img21},
        { id: 2, name: 'Mycleaners', phoneNo: '70211 12858', rating: 4.7, photo: img22 },
        { id: 3, name: 'UClean Laundry', phoneNo: '99997 59911', rating: 4.7, photo: img23 },
        { id: 4, name: 'Power Laundry and Ironers', phoneNo: '98765 43210', rating: 3.8, photo: img24 },
      ],
      cleaner: [
        { id: 1, name: 'Poonam Cares-Home Cleaning', phoneNo: '98928 80019', rating: 4.8, photo: img25},
        { id: 2, name: 'Rashmi Cleaning Services', phoneNo: '98765 43210', rating: 4.9, photo: img26 },
        { id: 3, name: 'A Dust Away House Keeping', phoneNo: '99673 94194', rating: 4.9, photo: img27 },
        { id: 4, name: 'Home Urban Services', phoneNo: '98765 43210', rating: 4.8, photo: img28},
      ],
    };
  
    return providers[service] || [];
  }