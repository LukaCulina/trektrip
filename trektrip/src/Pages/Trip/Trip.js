import React from 'react';
import './Trip.css'

const trip = {
    image: 'tenerife.jpg',
    title: 'Istraživanje Kanarskih otoka / Tenerife, Španjolska',
    author: 'Emanuel_M',
    rating: 4.5,
    details: [
      {
        day: 1,
        title: 'Dolazak / Santa Cruz de Tenerife / La Laguna',
        description: 'Izlaskom iz aviona topli zagrljaj Tenerife ljubazno nas je dočekao. Nakon brze vožnje taksijem do zračne luke do našeg hotela u Santa Cruz de Tenerife, zaputili smo se u srce grada. Živahne ulice La Lagune mamile su svojim kolonijalnim šarmom i povijesnom privlačnošću. Časo de los Capitanes i veličanstvena katedrala La Laguna stajale su kao čuvari vremena, pozivajući nas da zaronimo u bogatu prošlost otoka. Šetnja urbanim avenijama dovela nas je do otkrivanja skrivenih dragulja, poput divnog #CaféLaVila, gdje je miris svježe skuhane kave ispunjavao zrak. Za večeru smo se prepustili tradicionalnoj Kanarskoj kuhinji u #ElMilagro, uživajući u svakom zalogaju sočnog Papas Arrugadas i Mojo umaka.',
      },
      {
        day: 2,
        title: 'Nacionalni park Teide / selo Masca / Los Gigantes',
        description: 'Dok je svitanje bojalo nebo u narančaste i zlatne nijanse, krenuli smo na putovanje u srce divljine Tenerife. Zavojita vožnja kroz neravan teren dovela nas je do nacionalnog parka Teide koji je izazivao strahopoštovanje, gdje se veličanstvena planina Teide uzdizala nad krajolikom poput tihog čuvara. Pješačke ture krajolike nalik na Mjesec, divili smo se surovoj ljepoti prirode. U nastavku naše avanture, uputili smo se u slikovito selo Masca, smješteno usred dramatičnih litica i zelenih dolina. Putovanje je završeno prekrasnim spektaklom zalaska sunca u Los Gigantesu, gdje su visoke litice uranjale u azurno plavu vodu ispod, što je dokaz izuzetne ljepote otoka.',
      },
      {
        day: 3,
        title: 'La Orotava / Puerto de la Cruz / Loro Parque',
        description: 'Naš posljednji dan je osvanuo s obećanjem novih otkrića. U očaravajućem gradiću La Orotava, lutali smo kamenim ulicama ukrašenim šarenim fasadama i zamršenim balkonima, od kojih je svaka pričala priču o prošlim stoljećima. Bujni botanički vrtovi Šitio Litre pružali su mirno utočište, gdje su egzotični cvjetovi šaputali priče o dalekim zemljama. Nastavljajući naše istraživanje, uputili smo se do živahnog obalnog grada Puerto de la Cruz, gdje je živahno šetalište mamilo svojim nizom trgovina i kafića. Naše je putovanje kulminiralo posjetom Loro Parquu, utočištu egzotičnih divljih životinja, gdje su nas očarale razigrane udarije dupina, veličanstvena ljepota orka i živopisno perje tropskih ptica.',
      },
    ],
    summary: {
      country: 'Španjolska',
      destination: 'Tenerife',
      month: 'Travanj',
      duration: '3 dana',
      price: '$$',
    },
    comments: [
      {
        author: 'Mirta_28',
        text: 'Izgleda kao da ste imali nevjerojatno iskustvo! Tenerife je zaista čaroban otok, a vaša avantura zvuči kao san svakog putnika. Nadam se da ste uživali u svakom trenutku i da ćete se uskoro vratiti kako biste stvorili još više nezaboravnih uspomena.',
      },
    ],
  };
  

const Trip = () => {
  return (   
    <div className="trip-page">
        <div className="main-image" style={{ backgroundImage: `url(${trip.image})` }}>
          <div className="overlay"></div>
        </div>
        <div className="trip-info">
          <h1>{trip.title}</h1>
          <p className="author">Autor: {trip.author}</p>
          <div className="rating">⭐ {trip.rating}/5</div>
          <div className="trip-summary">
            <p><strong>Država:</strong> {trip.summary.country}</p>
            <p><strong>Odredište:</strong> {trip.summary.destination}</p>
            <p><strong>Mjesec:</strong> {trip.summary.month}</p>
            <p><strong>Trajanje:</strong> {trip.summary.duration}</p>
            <p><strong>Cijena:</strong> {trip.summary.price}</p>
          </div>
          {trip.details.map(detail => (
            <div key={detail.day} className="trip-detail">
              <h2>{detail.day}. dan: {detail.title}</h2>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
        <div className="comments-section">
          <h2>Komentari</h2>
          {trip.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Trip