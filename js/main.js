const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-nav');
const featuredContainer = document.querySelector('.featured-container');

const featuredObj = [
  {
    featuredPic: 'speakers/speaker_01.png',
    name: 'Pedro Suarez',
    ocupation: 'Google Developer',
    description: 'I was in the last year conference and I can tell it was awesome, they gave me the opportunity I have now to work for Google',
  },
  {
    featuredPic: 'speakers/speaker_02.png',
    name: 'Juan Ramirez',
    ocupation: 'Xbox Developer',
    description: "I was present in the previous conference, they were very cheerful and without them I couldn't have make it to work in Xbox/Microsoft",
  },
  {
    featuredPic: 'speakers/speaker_03.png',
    name: 'Yuji Nakamoto',
    ocupation: 'Epic Games Developer',
    description: "I can't tell you how grateful I am for have been part of the one of the GD program, and now, I have the job of my dreams",
  },
  {
    featuredPic: 'speakers/speaker_04.png',
    name: 'Karen Smith',
    ocupation: 'Professional Spekaer',
    description: 'I was there to see how professional they were about the conference and, I just got delighted, they are awesome, you will learn and participate in something unique',
  },
  {
    featuredPic: 'speakers/speaker_05.png',
    name: 'Sabrina Green',
    ocupation: 'Facebook Developer',
    description: "I'm delighted for such wonderful work, they are very a huge team, focused in their goals, and always wanting for more, they will get to be a bigger company",
  },
  {
    featuredPic: 'speakers/speaker_06.png',
    name: 'Pablo Johnson',
    ocupation: 'Unity Developer',
    description: "I got the job I have now, with the help of GD, I've been grateful all thi time, without their help I couldn't have done it",
  },
];

function createCard(index) {
  const {
    featuredPic, name, ocupation, description,
  } = featuredObj[index];
  const featuredCard = document.createElement('div');
  const featuredImg = document.createElement('img');
  const featuredContent = document.createElement('div');
  const personName = document.createElement('p');
  const personOcupation = document.createElement('p');
  const featuredDivisor = document.createElement('div');
  const personDescription = document.createElement('p');

  featuredCard.classList.add('featured-card');
  featuredContent.classList.add('featured-content');
  personName.classList.add('person-name');
  personOcupation.classList.add('person-ocupation');
  featuredDivisor.classList.add('featured-divisor');
  personDescription.classList.add('person-feedback');

  featuredImg.setAttribute('src', featuredPic);

  personName.textContent = name;
  personOcupation.textContent = ocupation;
  personDescription.textContent = description;

  featuredContent.append(personName, personOcupation, featuredDivisor, personDescription);
  featuredCard.append(featuredImg, featuredContent);

  return featuredCard;
}

const displayCard = () => {
  featuredObj.forEach((_, index) => {
    featuredContainer.append(createCard(index));
  });
};

displayCard();

openMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  openMenuBtn.style.display = 'none';
});

closeMenuBtn.addEventListener('click', () => {
  openMenuBtn.style.display = 'block';
  mobileMenu.style.display = 'none';
});
