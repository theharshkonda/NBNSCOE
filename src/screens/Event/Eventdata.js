import { IMGS } from "../../constants";
const eventData = [
    {
      id: '1',
      description: 'Best College Award by Punyashlok Ahilyadevi Holkar Solapur University during the 19th Vardhapan Din on 1st August 2023.',
      uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Best%20CollegeAward.png', // Replace with actual image source
    },
    {
      id: '2',
      description: 'Best Principal Award by Punyashlok Ahilyadevi Holkar Solapur University during the 19th Vardhapan Din on 1st August 2023.',
      uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Bestprincipal.png', // Replace with actual image source
    },
    {
      id: '3',
      description: '',
      uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/bestCollege.png', // Replace with actual image source
    },
    {
        id: '4',
        description: 'First prize in Skillathon 2k23 organised by Solapur University. Total Prize won by Team is 10 Thousand Rupees. Congratulations to the team 💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2023/06/Skillathon-2-2K23.jpeg', // Replace with actual image source
      },
      {
        id: '5',
        description: 'Our Final Year Student of Mechanical Department while receiving the cash prize won in the Skillathon Project Competition organized by Solapur University.💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2023/06/Skillathon-2K23.jpeg', // Replace with actual image source
      },
      {
        id: '6',
        description: 'Very happy to inform you all our team Next Innovation has won first prize with a prize amount worth 1 lakh rupees at Smart India Hackathon 2022, Coimbatore.💐💐💐💐💐 ',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/WhatsApp-Image-2022-08-27-at-8.06.00-AM.jpeg', // Replace with actual image source
      },
      {
        id: '7',
        description: 'Heartiest Congratulations to the team, mentor and all faculty members and to the whole Department. 💐💐💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/WhatsApp-Image-2022-08-27-at-8.19.00-AM.jpeg', // Replace with actual image source
      },
      {
        id: '8',
        description: 'Our Team from CSE Departement participated in the Smart India Hackathon 2022, while receiving the Certificate in the Grand Finale at Jaipur 💐💐.  Congratulations to the Team and Wishing them Best of Luck For their Future 💐💐',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/11.jpg', // Replace with actual image source
      },
      {
        id: '9',
        description: '',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/WhatsApp-Image-2022-08-31-at-8.59.19-AM.jpeg', // Replace with actual image source
      },
      {
        id: '10',
        description: 'Our TY CSE team has won first prize with Rs.25000/- in Startup competition organised by PAH Solapur University. Many Congratulations to the team 🎉🎉',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Startupp.jpg', // Replace with actual image source
      },
      {
        id: '11',
        description: 'Students from SY Electrical team has won Second prize with Rs.10000/- in Startup Idea Presentation competition organised by PAH Solapur University. Many Congratulations to the team 🎉🎉',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/Start-Up-Yatra-2022-Second-Winner_CIVIL.jpeg', // Replace with actual image source
      },
      {
        id: '12',
        description: '',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/Start-Up-Yatra-2022-First-Second-Winner-Tarun-bharat-news.jpeg', // Replace with actual image source
      },
      {
        id: '13',
        description: 'Our Students from CSE Department while receiving the cash prize by Hon. Milind Shambharkar, the Team won in Startup Yatra Idea Presentation Competition organized by Solapur University.💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/Start-Up-Yatra-2022-First-Winner-768x553.jpeg', // Replace with actual image source
      },
      {
        id: '14',
        description: 'TYCSE students have bagged First Prize in Hackathon at RIT. Many Congratulations to team💐💐',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230617-WA0005.jpg', // Replace with actual image source
      },
      {
        id: '15',
        description: 'TYCSE students have bagged First Prize in Hackathon at RIT. Many Congratulations to team💐💐',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230617-WA0003.jpg', // Replace with actual image source
      },
      {
        id: '16',
        description: 'DISTA 2k23',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/IMG-20230403-WA0016.jpg', // Replace with actual image source
      },
      {
        id: '17',
        description: 'Avishkar Event Poster Presentation in College.',
        uri: 'https://theharshkonda.github.io/r0e9p8o7s6i5t4o3r2y1/watchmanconfig/Avishkar3.jpg', // Replace with actual image source
      },
      {
        id: '27',
        description: 'Our placed Students fron 2022-2023 Batch in 1st Month. Wishing Best of Luck for their Future 💐💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/22-23.jpeg', // Replace with actual image source
      },
      {
        id: '18',
        description: 'Our Placed Student of 2021-2022 Batch.  Wishing Best of Luck for their Future 💐💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/21-222.jpeg', // Replace with actual image source
      },
      {
        id: '19',
        description: 'Our Placed Student of 2021-2022 Batch.  Wishing Best of Luck for their Future 💐💐💐',
        uri: 'http://sinhgadsolapur.org/EdSite/wp-content/uploads/2022/11/21-22.jpeg', // Replace with actual image source
      },
  ];
export default eventData;  