function homeContent(content) {
    const logo=document.createElement('div');
    logo.className='logo';
    
    const about = document.createElement('div');
    about.className = 'about';

    const aboutParagraphs = [
        'About Bastille Saloon',
        'Welcome to the Bastille Saloon – the finest establishment in the heart of Saint Denis. Whether you’re a local seeking a refined drink or a traveler looking for an unforgettable night, the Bastille offers an unparalleled experience.',
        'Step inside and be transported to a world of elegance and grandeur. Our mahogany bar, imported chandeliers, and hand-painted murals evoke the grandeur of European sophistication, while our premium selection of spirits, cigars, and live entertainment channels the lively spirit of America’s frontier.',
        'At the Bastille, we offer not only exceptional food and drinks but also unique services for our guests. Indulge in our luxurious bath services, providing a relaxing retreat from the rigors of travel and a chance to rejuvenate. Additionally, inquire about our room rental services for private gatherings and special events. Our elegant rooms are designed to provide a charming and intimate atmosphere for any occasion.',
        'You’ll find yourself surrounded by Saint Denis’ finest: business magnates, lawmen, and notorious outlaws alike. Join us for an evening of revelry, where the music is always playing, the drinks are always flowing, and the night is full of possibilities.'
    ];

    aboutParagraphs.forEach(text => {
        const aboutPara = document.createElement('p');
        aboutPara.textContent = text;
        about.appendChild(aboutPara);
    });

    const hours=document.createElement('div');
    hours.className='hours';

    const hoursParagraphs=[
        'Hours',
        'Monday to Thursday: 4 PM - 12 AM',
        'Friday to Sunday: 12 PM - 2 AM',
    ];

    hoursParagraphs.forEach(text => {
        const hoursPara=document.createElement('p');
        hoursPara.textContent=text;
        hours.appendChild(hoursPara);
    });

    const location=document.createElement('div');
    location.className='location';

    const locationParagraphs=[
        'Location',
        '123 Main Street',
        'Saint Denis, Bayou NWA, LE',
    ];

    locationParagraphs.forEach(text=>{
        const locationPara=document.createElement('p');
        locationPara.textContent=text;
        location.appendChild(locationPara);
    });

    const map=document.createElement('div');
    map.className='map';
    location.appendChild(map);



    content.appendChild(logo);
    content.appendChild(about);
    content.appendChild(hours);
    content.appendChild(location);
}


export {homeContent};

