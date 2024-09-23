function contactContent(content){
    const logo=document.createElement('div');
    logo.className='logo';
    
    const contact=document.createElement('div');
    contact.className='contact';

    const contactParagraphs=[
        'Contact Us',
        'For reservations or inquiries, please reach us by telephone at: (555) 123-4567',
        'Note: Our telephone line is open during business hours.'
    ];

    contactParagraphs.forEach(text=>{
        const contactPara=document.createElement('p');
        contactPara.textContent=text;
        contact.appendChild(contactPara);
    });

    content.appendChild(logo);
    content.appendChild(contact);
}

export {contactContent};