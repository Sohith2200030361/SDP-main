import image1 from '../Pictures_for_project/Image1.png'; // Assuming image1's file extension is .jpg
import image2 from '../Pictures_for_project/image2.png'; // Assuming logo's file extension is .jpeg
import image3 from '../Pictures_for_project/img.png';
import image4 from '../Pictures_for_project/imge.png';
import image5 from '../Pictures_for_project/ima.png';
import image6 from '../Pictures_for_project/imag.png';

const products = [
    {
        
        name: 'Reliance Industries',
        description: 'Reliance Group has five listed companies, Reliance Power, Reliance Infrastructure, Reliance Home Finance, and Reliance Health. The group provides financial services, construction, entertainment, power, health care, manufacturing, defence, aviation, and transportation services.',
        price: 34.93,
        image: image1, // Use imported image variable
    },
    {
        
        name: 'Graph Of Stocks In Reliance Industries',
        description: 'You can buy Reliance Industries Ltd shares through a brokerage firm. ICICIdirect is a registered broker through which you can place orders to buy Reliance Industries Ltd Share.',
        price: 34.93,
        image: image3, // Use imported image variable
    },
    {
        name: 'Infosis',
        description: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
        price: 17.20,
        image: image2, // Use imported image variable
        
    },
    {
        name: 'Graph Of Stocks In Infosis',
        description: 'It is forecast to grow earnings and revenue by 9.9% and 7.1% per annum respectively. EPS is expected to grow by 10.2% per annum. Return on equity is forecast to be 32.5% in 3 years.',
        price: 17.20,
        image: image4, // Use imported image variable
        
    },
    {
        name: 'Axis Bank',
        description: 'Stock price target for Axis Bank Limited AXISBANK are 1059.63 on downside and 1072.58 on upside.',
        price: 13.58,
        image: image5, // Use imported image variable
        
    },
    {
        name: 'Graph Of Stocks In Axis Bank',
        description: 'There are 21 analysts who have given it a strong buy rating & 15 analysts have given it a buy rating.',
        price: 13.58,
        image: image6, // Use imported image variable
        
    },
    // Add more products as needed
];

export default products;