function menuContent(content){
    const logo=document.createElement('div');
    logo.className='logo';
    
    const drinks=document.createElement('div');
    drinks.className='drinks';

    const drinksParagraphs=[
        'Drinks',
        'Beer',
        '0.50$',
        'Whiskey',
        '1.00$'
    ];

    drinksParagraphs.forEach(text => {
        const drinksPara=document.createElement('p');
        drinksPara.textContent=text;
        drinks.appendChild(drinksPara);
    });

    const food=document.createElement('div');
    food.className='food';

    const foodParagraphs=[
        'Food',
        'Lobster Bisque',
        '3.00$',
        'Prime Rib',
        '5.00$'
    ];

    foodParagraphs.forEach(text=>{
        const foodPara=document.createElement('p');
        foodPara.textContent=text;
        food.appendChild(foodPara);
    });

    const lodging=document.createElement('div');
    lodging.className='lodging';

    const lodgingParagraphs=[
        'Lodging',
        'Room Rent',
        '1.00$',
        'Bath',
        '0.50$'
    ];

    lodgingParagraphs.forEach(text=>{
        const lodgingPara=document.createElement('p');
        lodgingPara.textContent=text;
        lodging.appendChild(lodgingPara);
    });

    const menuImg=document.createElement('div');
    menuImg.className='menuImg';

    content.appendChild(logo);
    content.appendChild(drinks);
    content.appendChild(food);
    content.appendChild(lodging);
    content.appendChild(menuImg);
}

export{menuContent};