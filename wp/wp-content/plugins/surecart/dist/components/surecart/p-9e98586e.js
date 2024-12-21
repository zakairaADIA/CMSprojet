const a=[{value:"ACT",label:"Australian Capital Territory"},{value:"NSW",label:"New South Wales"},{value:"NT",label:"Northern Territory"},{value:"QLD",label:"Queensland"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"VIC",label:"Victoria"},{value:"WA",label:"Western Australia"}],l=[{value:"AC",label:"Acre"},{value:"AL",label:"Alagoas"},{value:"AM",label:"Amazonas"},{value:"AP",label:"Amapá"},{value:"BA",label:"Bahia"},{value:"CE",label:"Ceará"},{value:"DF",label:"Distrito Federal"},{value:"ES",label:"Espírito Santo"},{value:"GO",label:"Goiás"},{value:"MA",label:"Maranhão"},{value:"MG",label:"Minas Gerais"},{value:"MS",label:"Mato Grosso do Sul"},{value:"MT",label:"Mato Grosso"},{value:"PA",label:"Pará"},{value:"PB",label:"Paraíba"},{value:"PE",label:"Pernambuco"},{value:"PI",label:"Piauí"},{value:"PR",label:"Paraná"},{value:"RJ",label:"Rio de Janeiro"},{value:"RN",label:"Rio Grande do Norte"},{value:"RO",label:"Rondônia"},{value:"RR",label:"Roraima"},{value:"RS",label:"Rio Grande do Sul"},{value:"SC",label:"Santa Catarina"},{value:"SE",label:"Sergipe"},{value:"SP",label:"São Paulo"},{value:"TO",label:"Tocantins"}],e=[{value:"AB",label:"Alberta"},{value:"BC",label:"British Columbia"},{value:"MB",label:"Manitoba"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"NS",label:"Nova Scotia"},{value:"NT",label:"Northwest Territories"},{value:"NU",label:"Nunavut"},{value:"ON",label:"Ontario"},{value:"PE",label:"Prince Edward Island"},{value:"QC",label:"Quebec"},{value:"SK",label:"Saskatchewan"},{value:"YT",label:"Yukon"}],u=[{value:"AG",label:"Aargau (de)"},{value:"AI",label:"Appenzell Innerrhoden (de)"},{value:"AR",label:"Appenzell Ausserrhoden (de)"},{value:"BE",label:"Bern (de)"},{value:"BL",label:"Basel-Landschaft (de)"},{value:"BS",label:"Basel-Stadt (de)"},{value:"FR",label:"Fribourg (fr)"},{value:"GE",label:"Genève (fr)"},{value:"GL",label:"Glarus (de)"},{value:"GR",label:"Graubünden (de)"},{value:"JU",label:"Jura (fr)"},{value:"LU",label:"Luzern (de)"},{value:"NE",label:"Neuchâtel (fr)"},{value:"NW",label:"Nidwalden (de)"},{value:"OW",label:"Obwalden (de)"},{value:"SG",label:"Sankt Gallen (de)"},{value:"SH",label:"Schaffhausen (de)"},{value:"SO",label:"Solothurn (de)"},{value:"SZ",label:"Schwyz (de)"},{value:"TG",label:"Thurgau (de)"},{value:"TI",label:"Ticino (it)"},{value:"UR",label:"Uri (de)"},{value:"VD",label:"Vaud (fr)"},{value:"VS",label:"Valais (fr)"},{value:"ZG",label:"Zug (de)"},{value:"ZH",label:"Zürich (de)"}],b=[{value:"A",label:"Alicante/Alacant"},{value:"AB",label:"Albacete"},{value:"AL",label:"Almería"},{value:"AV",label:"Ávila"},{value:"B",label:"Barcelona"},{value:"BA",label:"Badajoz"},{value:"BI",label:"Bizkaia"},{value:"BU",label:"Burgos"},{value:"C",label:"Coruña, A"},{value:"CA",label:"Cádiz"},{value:"CC",label:"Cáceres"},{value:"CE",label:"Ceuta"},{value:"CO",label:"Córdoba"},{value:"CR",label:"Ciudad Real"},{value:"CS",label:"Castellón/Castelló"},{value:"CU",label:"Cuenca"},{value:"GC",label:"Palmas, Las"},{value:"GI",label:"Girona"},{value:"GR",label:"Granada"},{value:"GU",label:"Guadalajara"},{value:"H",label:"Huelva"},{value:"HU",label:"Huesca"},{value:"J",label:"Jaén"},{value:"L",label:"Lleida"},{value:"LE",label:"León"},{value:"LO",label:"Rioja, La"},{value:"LU",label:"Lugo"},{value:"M",label:"Madrid"},{value:"MA",label:"Málaga"},{value:"ML",label:"Melilla"},{value:"MU",label:"Murcia"},{value:"NA",label:"Navarra"},{value:"O",label:"Asturias"},{value:"OR",label:"Ourense"},{value:"P",label:"Palencia"},{value:"PM",label:"Balears, Illes"},{value:"PO",label:"Pontevedra"},{value:"S",label:"Cantabria"},{value:"SA",label:"Salamanca"},{value:"SE",label:"Sevilla"},{value:"SG",label:"Segovia"},{value:"SO",label:"Soria"},{value:"SS",label:"Gipuzkoa"},{value:"T",label:"Tarragona"},{value:"TE",label:"Teruel"},{value:"TF",label:"Santa Cruz de Tenerife"},{value:"TO",label:"Toledo"},{value:"V",label:"Valencia/València"},{value:"VA",label:"Valladolid"},{value:"VI",label:"Araba/Álava"},{value:"Z",label:"Zaragoza"},{value:"ZA",label:"Zamora"}],v=[{value:"HCW",label:"Central and Western District"},{value:"HEA",label:"Eastern"},{value:"HSO",label:"Southern"},{value:"HWC",label:"Wan Chai"},{value:"KSS",label:"Sham Shui Po"},{value:"KKC",label:"Kowloon City"},{value:"KKT",label:"Kwun Tong"},{value:"KWT",label:"Wong Tai Sin"},{value:"KYT",label:"Yau Tsim Mong"},{value:"NIS",label:"Islands District"},{value:"NKT",label:"Kwai Tsing"},{value:"NNO",label:"North"},{value:"NSK",label:"Sai Kung District"},{value:"NST",label:"Sha Tin"},{value:"NTM",label:"Tuen Mun"},{value:"NTP",label:"Tai Po District"},{value:"NTW",label:"Tsuen Wan District"},{value:"NYL",label:"Yuen Long District"}],i=[{value:"C",label:"Connacht"},{value:"CE",label:"Clare"},{value:"CN",label:"Cavan"},{value:"CW",label:"Carlow"},{value:"D",label:"Dublin"},{value:"DL",label:"Donegal"},{value:"G",label:"Galway"},{value:"KE",label:"Kildare"},{value:"KK",label:"Kilkenny"},{value:"KY",label:"Kerry"},{value:"LD",label:"Longford"},{value:"LH",label:"Louth"},{value:"LK",label:"Limerick"},{value:"LM",label:"Leitrim"},{value:"LS",label:"Laois"},{value:"MH",label:"Meath"},{value:"MN",label:"Monaghan"},{value:"MO",label:"Mayo"},{value:"OY",label:"Offaly"},{value:"RN",label:"Roscommon"},{value:"SO",label:"Sligo"},{value:"TA",label:"Tipperary"},{value:"WD",label:"Waterford"},{value:"WH",label:"Westmeath"},{value:"WW",label:"Wicklow"},{value:"WX",label:"Wexford"},{value:"CO",label:"Cork"}],o=[{value:"AN",label:"Andaman and Nicobar Islands"},{value:"AP",label:"Andhra Pradesh"},{value:"AR",label:"Arunachal Pradesh"},{value:"AS",label:"Assam"},{value:"BR",label:"Bihar"},{value:"CH",label:"Chandigarh"},{value:"CT",label:"Chhattisgarh"},{value:"DD",label:"Daman and Diu"},{value:"DL",label:"Delhi"},{value:"DN",label:"Dadra and Nagar Haveli"},{value:"GA",label:"Goa"},{value:"GJ",label:"Gujarat"},{value:"HP",label:"Himachal Pradesh"},{value:"HR",label:"Haryana"},{value:"JH",label:"Jharkhand"},{value:"JK",label:"Jammu and Kashmir"},{value:"KA",label:"Karnataka"},{value:"KL",label:"Kerala"},{value:"LD",label:"Lakshadweep"},{value:"MH",label:"Maharashtra"},{value:"ML",label:"Meghalaya"},{value:"MN",label:"Manipur"},{value:"MP",label:"Madhya Pradesh"},{value:"MZ",label:"Mizoram"},{value:"NL",label:"Nagaland"},{value:"OR",label:"Orissa"},{value:"PB",label:"Punjab"},{value:"PY",label:"Pondicherry"},{value:"RJ",label:"Rajasthan"},{value:"SK",label:"Sikkim"},{value:"TN",label:"Tamil Nadu"},{value:"TR",label:"Tripura"},{value:"TS",label:"Telangana"},{value:"UL",label:"Uttaranchal"},{value:"UP",label:"Uttar Pradesh"},{value:"WB",label:"West Bengal"}],n=[{value:"AG",label:"Agrigento"},{value:"AL",label:"Alessandria"},{value:"AN",label:"Ancona"},{value:"AO",label:"Aosta"},{value:"AP",label:"Ascoli Piceno"},{value:"AQ",label:"L&#39;Aquila"},{value:"AR",label:"Arezzo"},{value:"AT",label:"Asti"},{value:"AV",label:"Avellino"},{value:"BA",label:"Bari"},{value:"BG",label:"Bergamo"},{value:"BI",label:"Biella"},{value:"BL",label:"Belluno"},{value:"BN",label:"Benevento"},{value:"BO",label:"Bologna"},{value:"BR",label:"Brindisi"},{value:"BS",label:"Brescia"},{value:"BT",label:"Barletta-Andria-Trani"},{value:"BZ",label:"Bolzano"},{value:"CA",label:"Cagliari"},{value:"CB",label:"Campobasso"},{value:"CE",label:"Caserta"},{value:"CH",label:"Chieti"},{value:"CI",label:"Carbonia-Iglesias"},{value:"CL",label:"Caltanissetta"},{value:"CN",label:"Cuneo"},{value:"CO",label:"Como"},{value:"CR",label:"Cremona"},{value:"CS",label:"Cosenza"},{value:"CT",label:"Catania"},{value:"CZ",label:"Catanzaro"},{value:"EN",label:"Enna"},{value:"FE",label:"Ferrara"},{value:"FG",label:"Foggia"},{value:"FI",label:"Firenze"},{value:"FC",label:"Forlì-Cesena"},{value:"FM",label:"Fermo"},{value:"FR",label:"Frosinone"},{value:"GE",label:"Genova"},{value:"GO",label:"Gorizia"},{value:"GR",label:"Grosseto"},{value:"IM",label:"Imperia"},{value:"IS",label:"Isernia"},{value:"KR",label:"Crotone"},{value:"LC",label:"Lecco"},{value:"LE",label:"Lecce"},{value:"LI",label:"Livorno"},{value:"LO",label:"Lodi"},{value:"LT",label:"Latina"},{value:"LU",label:"Lucca"},{value:"MB",label:"Monza e Brianza"},{value:"MC",label:"Macerata"},{value:"ME",label:"Messina"},{value:"MI",label:"Milano"},{value:"MN",label:"Mantova"},{value:"MO",label:"Modena"},{value:"MS",label:"Massa-Carrara"},{value:"MT",label:"Matera"},{value:"NA",label:"Napoli"},{value:"NO",label:"Novara"},{value:"NU",label:"Nuoro"},{value:"OG",label:"Ogliastra"},{value:"OR",label:"Oristano"},{value:"OT",label:"Olbia-Tempio"},{value:"PA",label:"Palermo"},{value:"PC",label:"Piacenza"},{value:"PD",label:"Padova"},{value:"PE",label:"Pescara"},{value:"PG",label:"Perugia"},{value:"PI",label:"Pisa"},{value:"PN",label:"Pordenone"},{value:"PO",label:"Prato"},{value:"PR",label:"Parma"},{value:"PU",label:"Pesaro e Urbino"},{value:"PT",label:"Pistoia"},{value:"PV",label:"Pavia"},{value:"PZ",label:"Potenza"},{value:"RA",label:"Ravenna"},{value:"RC",label:"Reggio Calabria"},{value:"RE",label:"Reggio Emilia"},{value:"RG",label:"Ragusa"},{value:"RI",label:"Rieti"},{value:"RM",label:"Roma"},{value:"RN",label:"Rimini"},{value:"RO",label:"Rovigo"},{value:"SA",label:"Salerno"},{value:"SI",label:"Siena"},{value:"SO",label:"Sondrio"},{value:"SP",label:"La Spezia"},{value:"SR",label:"Siracusa"},{value:"SS",label:"Sassari"},{value:"SV",label:"Savona"},{value:"TA",label:"Taranto"},{value:"TE",label:"Teramo"},{value:"TN",label:"Trento"},{value:"TO",label:"Torino"},{value:"TP",label:"Trapani"},{value:"TR",label:"Terni"},{value:"TS",label:"Trieste"},{value:"TV",label:"Treviso"},{value:"UD",label:"Udine"},{value:"VA",label:"Varese"},{value:"VB",label:"Verbano-Cusio-Ossola"},{value:"VC",label:"Vercelli"},{value:"VE",label:"Venezia"},{value:"VI",label:"Vicenza"},{value:"VR",label:"Verona"},{value:"VS",label:"Medio Campidano"},{value:"VT",label:"Viterbo"},{value:"VV",label:"Vibo Valentia"}],r=[{value:"01",label:"Hokkaido"},{value:"02",label:"Aomori"},{value:"03",label:"Iwate"},{value:"04",label:"Miyagi"},{value:"05",label:"Akita"},{value:"06",label:"Yamagata"},{value:"07",label:"Fukushima"},{value:"08",label:"Ibaraki"},{value:"09",label:"Tochigi"},{value:"10",label:"Gunma"},{value:"11",label:"Saitama"},{value:"12",label:"Chiba"},{value:"13",label:"Tokyo"},{value:"14",label:"Kanagawa"},{value:"15",label:"Niigata"},{value:"16",label:"Toyama"},{value:"17",label:"Ishikawa"},{value:"18",label:"Fukui"},{value:"19",label:"Yamanashi"},{value:"20",label:"Nagano"},{value:"21",label:"Gifu"},{value:"22",label:"Shizuoka"},{value:"23",label:"Aichi"},{value:"24",label:"Mie"},{value:"25",label:"Shiga"},{value:"26",label:"Kyoto"},{value:"27",label:"Osaka"},{value:"28",label:"Hyogo"},{value:"29",label:"Nara"},{value:"30",label:"Wakayama"},{value:"31",label:"Tottori"},{value:"32",label:"Shimane"},{value:"33",label:"Okayama"},{value:"34",label:"Hiroshima"},{value:"35",label:"Yamaguchi"},{value:"36",label:"Tokushima"},{value:"37",label:"Kagawa"},{value:"38",label:"Ehime"},{value:"39",label:"Kochi"},{value:"40",label:"Fukuoka"},{value:"41",label:"Saga"},{value:"42",label:"Nagasaki"},{value:"43",label:"Kumamoto"},{value:"44",label:"Oita"},{value:"45",label:"Miyazaki"},{value:"46",label:"Kagoshima"},{value:"47",label:"Okinawa"}],s=[{value:"AGU",label:"Aguascalientes"},{value:"BCN",label:"Baja California"},{value:"BCS",label:"Baja California Sur"},{value:"CAM",label:"Campeche"},{value:"CHH",label:"Chihuahua"},{value:"CHP",label:"Chiapas"},{value:"CMX",label:"Ciudad de México"},{value:"COA",label:"Coahuila"},{value:"COL",label:"Colima"},{value:"DUR",label:"Durango"},{value:"GRO",label:"Guerrero"},{value:"GUA",label:"Guanajuato"},{value:"HID",label:"Hidalgo"},{value:"JAL",label:"Jalisco"},{value:"MEX",label:"México"},{value:"MIC",label:"Michoacán"},{value:"MOR",label:"Morelos"},{value:"NAY",label:"Nayarit"},{value:"NLE",label:"Nuevo León"},{value:"OAX",label:"Oaxaca"},{value:"PUE",label:"Puebla"},{value:"QUE",label:"Querétaro"},{value:"ROO",label:"Quintana Roo"},{value:"SIN",label:"Sinaloa"},{value:"SLP",label:"San Luis Potosí"},{value:"SON",label:"Sonora"},{value:"TAB",label:"Tabasco"},{value:"TAM",label:"Tamaulipas"},{value:"TLA",label:"Tlaxcala"},{value:"VER",label:"Veracruz"},{value:"YUC",label:"Yucatán"},{value:"ZAC",label:"Zacatecas"}],t=[{value:"01",label:"Johor"},{value:"02",label:"Kedah"},{value:"03",label:"Kelantan"},{value:"04",label:"Melaka"},{value:"05",label:"Negeri Sembilan"},{value:"06",label:"Pahang"},{value:"07",label:"Pulau Pinang"},{value:"08",label:"Perak"},{value:"09",label:"Perlis"},{value:"10",label:"Selangor"},{value:"11",label:"Terengganu"},{value:"12",label:"Sabah"},{value:"13",label:"Sarawak"},{value:"14",label:"Wilayah Persekutuan Kuala Lumpur"},{value:"15",label:"Wilayah Persekutuan Labuan"},{value:"16",label:"Wilayah Persekutuan Putrajaya"}],C=[{value:"AK",label:"Alaska"},{value:"AL",label:"Alabama"},{value:"AR",label:"Arkansas"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DC",label:"District of Columbia"},{value:"DE",label:"Delaware"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"IA",label:"Iowa"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"MA",label:"Massachusetts"},{value:"MD",label:"Maryland"},{value:"ME",label:"Maine"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MO",label:"Missouri"},{value:"MP",label:"Northern Mariana Islands"},{value:"MS",label:"Mississippi"},{value:"MT",label:"Montana"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"NE",label:"Nebraska"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NV",label:"Nevada"},{value:"NY",label:"New York"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UM",label:"United States Minor Outlying Islands"},{value:"UT",label:"Utah"},{value:"VA",label:"Virginia"},{value:"VI",label:"Virgin Islands, U.S."},{value:"VT",label:"Vermont"},{value:"WA",label:"Washington"},{value:"WI",label:"Wisconsin"},{value:"WV",label:"West Virginia"},{value:"WY",label:"Wyoming"}],A={AU:a,BR:l,CA:e,CH:u,ES:b,HK:v,IE:i,IN:o,IT:n,JP:r,MX:s,MY:t,US:C};export{a as AU,l as BR,e as CA,u as CH,b as ES,v as HK,i as IE,o as IN,n as IT,r as JP,s as MX,t as MY,C as US,A as default};