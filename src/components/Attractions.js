import React from "react";
import centennialhall from "../img/centennialhall.jpg";
import four from "../img/four.jpg";
import hydropolis from "../img/hydropolis.jpg";
import oldtown from "../img/oldtown.jpg";
import ostrowtumski from "../img/ostrowtumski.jpg";
import panoramaraclawicka from "../img/panoramaraclawicka.jpg";
import royalpalace from "../img/royalpalace.jpg";
import szczytnicki from "../img/szczytnicki.jpg";
import wroclawuniversity from "../img/wroclawuniversity.jpg";
import zoo from "../img/zoo.jpg";
import "./Attractions.sass";
import { Link } from "react-router-dom";

const attractions = [
  {
    name: "Ostrów Tumski",
    path: "/attraction/ostrowtumski",
    background: ostrowtumski,
    description:
      "Ostrów Tumski is an island and the oldest part of Wrocław. Surrounded by the River Oder, this former garden, which gave rise to the city of Wrocław, is now featuring a number of impressive monuments. The most prominent monuments include the Cathedral of Saint John the Baptist (restored after World War II), the Holy Cross and Saint Bartholomew's Collegiate, which is a unique two-storey brick basilica. Located on the island is also the Archdiocese Museum, which for more than one hundred years has been collecting sacred art, including the celebrated Book of Henryków. Dated to the 13th–14th centuries, the book is known to feature the first sentence to have ever been recorded in Polish (the document was listed in the UNESCO Memory of the World Register). This is the only place is Wrocław where you can see a lamplighter turning on the gas lamps at dusk.",
  },
  {
    name: "Old Town",
    path: "/attraction/oldtown",
    background: oldtown,
    description:
      "Hustling and bustling both day and night, Rynek, or the Market Square, is the very heart of Wrocław. The centre of the square features the Cloth Hall and the Town Hall, the latter being a unique specimen of Gothic and Renaissance architecture. The Town Hall, which once housed the city authorities, has been converted into the Museum of the Bourgeois Art. In front of its eastern façade stands the faithful copy of the mediaeval Pillory, and in front of the western façade the Aleksander Fredro Monument. The Market Square is surrounded by beautiful town houses. The area is not far from another tourist attractions of Wrocław, the quarter of Nadodrze. This former craftsmen area is now becoming increasingly beautiful and entices the visitors with its unique atmosphere.",
  },
  {
    name: "Four Denominations District",
    path: "/attraction/four",
    background: four,
    description:
      "Four Denominations District is part of the Old Town enclosed by ul. Kazimierza Wielkiego, ul. św. Antoniego, ul. Pawła Włodkowica and ul. św. Mikołaja. In close proximity, the district features four different temples representing four different denominations: an Orthodox church, a Roman Catholic church, a Lutheran church and a synagogue. Two tourist trails run across the district: the culture trail and the historic trail. The area also boasts a number of good hotels, many bars, galleries and music clubs.",
  },
  {
    name: "The Royal Palace",
    path: "/attraction/royalpalace",
    background: royalpalace,
    description:
      "The Royal Palace, together with its Baroque-style garden, now houses the Historical Museum of Wrocław. The Museum showcases the history of the city with exhibitions such as 'Wrocław's Millennium'. Royal apartments are also open to the public.",
  },
  {
    name: "Wrocław University",
    path: "/attraction/wroclawuniversity",
    background: wroclawuniversity,
    description:
      "The main Wrocław University building is part of a larger Baroque-style building complex composed of a former Jesuit college and Jesuit church. The building houses the Wrocław University Museum and the gem of Lower Silesia's Baroque, the Leopoldinum Hall, together with the Oratorium Marianum music hall, which has served as a celebrated concert space for more than two hundred years now. The astronomical observatory in the Mathematical Tower features historic astronomers' equipment, including a 14th-century astrolabe, a 16th-century heavenly globe and a compass date to 1665.",
  },
  {
    name: "Panorama of the Battle of Racławice",
    path: "/attraction/panoramaraclawicka",
    background: panoramaraclawicka,
    description:
      "Painted by Jan Styka and Wojciech Kossak, the Racławice Panorama is a unique representation of the Battle of Racławice (4th April 1794), created to commemorate the centenary of the Kościuszko Uprising. The work, which boasts an impressive size of 15 x 114 m, is open to the public in a specially designed rotund building. The combination of painterly techniques (perspective) and technology (lighting, artificial terrain, darkened and winding entry) provides for a unique and illusionistic spectacle.",
  },
  {
    name: "The Hydropolis",
    path: "/attraction/hydropolis",
    background: hydropolis,
    description:
      "The Hydropolis, or Wrocław's centre for environmental education, is one of the largest centres of this kind in Europe. It is also the only centre in Poland that showcases almost all types of aquatic environment. The visitors can choose from over 70 different interactive features and multimedia installations.",
  },
  {
    name: "The Centennial Hall",
    path: "/attraction/centennialhall",
    background: centennialhall,
    description:
      "The Centennial Hall is one of the most prominent landmarks in the history of 20th-century architecture. Designed by the eminent architect Max Berg, it was created in 1913 to celebrate the international exhibition commemorating the Battle of the Nations. The dome of this early Modernist reinforced concrete structure is 1.5 times larger in diameter than the dome of Rome's Pantheon while weighing only 42% of its bulk. In 2006, the site was enlisted in the UNESCO World Heritage Register. You can find out more about its construction at the Cognitive Centre, a permanent multimedia exhibition. The Centennial Hall complex also features the Four Domes' Pavilion, designed by the eminent architect Hans Poelzig and developed from 1912–1913. The building, which formerly housed the Wrocław Feature Film Studio, has now been restored to serve exhibition purposes. The renovated building features one of Poland's most intriguing and developed collections of Polish contemporary art (the property of the National Museum in Wrocław). The Centennial Hall is surrounded by the Pergola, which boasts one of the largest multimedia fountains in Europe.",
  },
  {
    name: "Szczytnicki Park",
    path: "/attraction/szczytnicki",
    background: szczytnicki,
    description:
      "Szczytnicki Park is the largest park in the city. Established in 1875 as a private garden, it was later transformed into a city park. Set up in 1913, the Japanese Garden remains its key attraction. With its original composition, the garden shows a different face each season, the only permanent feature being Japanese architecture. Szczytnicki Park, with its arboretum, beautiful rhododendron orchards, rose gardens and the Japanese Garden, is heritage listed.",
  },
  {
    name: "The Wrocław Zoo",
    path: "/attraction/zoo",
    background: zoo,
    description:
      "The Wrocław Zoo is the oldest and largest Polish zoo (considering the number of species). The Zoo features both historic facilities, including the bear tower, elephant house and monkey house, and modern pavilions such as the Afrykarium, which is a unique complex showcasing a variety of Africa's aquatic habitats. Everything is closely scrutinised by Wrocław dwarves!",
  },
];

const Attractions = () => {
  const attractionsList = attractions.map((item) => {
    return (
      <li key={item.name} description={item.description}>
        <Link
          to={{
            pathname: item.path,
            state: {
              name: item.name,
              description: item.description,
            },
          }}
        >
          {item.name}
          <img src={item.background} alt={item.name} />
        </Link>
      </li>
    );
  });

  return (
    <main className="attractions">
      <h2>TOP 10 Attractions in Wroclaw</h2>
      <ul>{attractionsList}</ul>
    </main>
  );
};

export default Attractions;
