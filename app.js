const germanDishes = [
  {
    region: 'Bayern',
    title: 'Weißwurst mit Brezel',
    description: 'Die Weißwurst ist eine weiße Wurst aus Bayern. Man isst sie mit süßem Senf und einer Brezel. Das ist ein traditionelles Frühstück in München. Die Wurst ist sehr weich und schmeckt mild.',
    icon: '🥨',
    image: 'assets/img/Weißwurst_mit_Brezel.jpg',
    ingredients: 'Kalbfleisch, Schweinefleisch, Petersilie, Zitrone, Zwiebeln, Salz, Pfeffer, Laugenbrezeln, süßer Senf',
    gradient: 'linear-gradient(230deg, #e3f3fa -26%, #5da8c9 40%, #257ca3 145%)'
  },
  {
    region: 'Rheinland',
    title: 'Sauerbraten',
    description: 'Sauerbraten ist ein traditionelles Fleischgericht aus dem Rheinland. Das Fleisch wird drei Tage in Essig mariniert. Dann wird es langsam gekocht. Man serviert es mit Rotkohl und Klößen.',
    icon: '🍖',
    image: 'assets/img/Sauerbraten.jpg',
    ingredients: 'Rindfleisch, Rotweinessig, Zwiebeln, Karotten, Lorbeerblätter, Wacholderbeeren, Rotkohl, Kartoffelklöße, Lebkuchen',
    gradient: 'linear-gradient(215.32deg, #c9b29a -1%, #876044 40%, #4a2e13 124%)'
  },
  {
    region: 'Norddeutschland',
    title: 'Fischbrötchen',
    description: 'Ein Fischbrötchen ist ein Sandwich mit Fisch. Es kommt aus Norddeutschland. Der Fisch ist oft Hering oder Lachs. Man isst es mit Zwiebeln und Gurken am Hafen.',
    icon: '🐟',
    image: 'assets/img/Fischbrötchen.jpg',
    ingredients: 'Brötchen, Matjeshering oder Lachs, Zwiebeln, saure Gurken, Remouladensoße, Salat, Tomaten',
    gradient: 'linear-gradient(215.32deg, #e6eaea -1%, #A6ADAE 40%, #5a6467 124%)'
  },
  {
    region: 'Sachsen',
    title: 'Dresdner Stollen',
    description: 'Dresdner Stollen ist ein süßes Brot aus Dresden. Man isst es zu Weihnachten. Es hat Rosinen, Nüsse und Marzipan. Oben ist viel Puderzucker.',
    icon: '🍰',
    image: 'assets/img/Dresdner_Stollen.jpg',
    ingredients: 'Mehl, Butter, Hefe, Milch, Rosinen, Mandeln, Walnüsse, Marzipan, Puderzucker, Rum, Gewürze',
    gradient: 'linear-gradient(215.32deg, #c89f7b -1%, #663814 40%, #2d1607 124%)'
  },
  {
    region: 'Schwaben',
    title: 'Schwäbische Maultaschen',
    description: 'Maultaschen sind große Nudeltaschen aus Schwaben. Sie sind mit Fleisch, Spinat und Brot gefüllt. Man kann sie kochen oder braten. Sie schmecken sehr gut.',
    icon: '🥟',
    image: 'assets/img/Schwäbische_Maultaschen.jpg',
    ingredients: 'Nudelteig, Hackfleisch, Spinat, Zwiebeln, Semmelbrösel, Eier, Petersilie, Muskatnuss, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #f7e7a3 -1%, #CFAF30 40%, #8a6c13 124%)'
  },
  {
    region: 'Thüringen',
    title: 'Thüringer Rostbratwurst',
    description: 'Die Thüringer Rostbratwurst ist eine bekannte Bratwurst aus Thüringen. Sie ist lang und dünn. Man grillt sie über Holz. Man isst sie mit Senf und Brot.',
    icon: '🌭',
    image: 'assets/img/Thüringer_Rostbratwurst.jpg',
    ingredients: 'Schweinefleisch, Rindfleisch, Salz, Pfeffer, Kümmel, Majoran, Knoblauch, Darm, Senf, Brot',
    gradient: 'linear-gradient(215.32deg, #a6d6b8 -1%, #42755A 40%, #1d3a2a 124%)'
  },
  {
    region: 'Westfalen',
    title: 'Westfälischer Schinken mit Pumpernickel',
    description: 'Westfälischer Schinken ist ein geräucherter Schinken aus Westfalen. Er ist sehr dünn geschnitten. Man isst ihn mit dunklem Pumpernickel-Brot und Butter.',
    icon: '🥓',
    image: 'assets/img/Westfälischer_Schinken_mit_Pumpernickel.jpg',
    ingredients: 'Schweinekeule, Salz, Roggenmehl, Roggenschrot, Hefe, Wasser, Butter',
    gradient: 'linear-gradient(215.32deg, #f2d8d5 -1%, #7d443e 124%)'
  },
  {
    region: 'Hessen',
    title: 'Frankfurter Grüne Soße',
    description: 'Grüne Soße ist eine kalte Soße aus Frankfurt. Sie ist aus sieben Kräutern gemacht. Man isst sie mit gekochten Eiern und Kartoffeln. Sie ist sehr gesund.',
    icon: '🌿',
    image: 'assets/img/Frankfurter_Grüne_Soße.jpg',
    ingredients: 'Petersilie, Schnittlauch, Kresse, Borretsch, Kerbel, Pimpinelle, Sauerampfer, Eier, Öl, Essig, Salz',
    gradient: 'linear-gradient(215.32deg, #a4cc32 -1%, #314402 124%)'
  },
  {
    region: 'Brandenburg',
    title: 'Eisbein mit Sauerkraut',
    description: 'Eisbein ist ein großes Stück Schweinefleisch mit Knochen. Es wird lange gekocht. Man serviert es mit Sauerkraut und Kartoffeln. Es ist sehr deftig.',
    icon: '🍖',
    image: 'assets/img/Eisbein_mit_Sauerkraut.jpg',
    ingredients: 'Schweinehaxe, Weiß- oder Rotkohl, Kartoffeln, Zwiebeln, Lorbeerblätter, Pfeffer, Salz, Essig',
    gradient: 'linear-gradient(215.32deg, #ffb46a -1%, #7a3e0f 124%)'
  },
  {
    region: 'Baden',
    title: 'Schwarzwälder Kirschtorte',
    description: 'Die Schwarzwälder Kirschtorte kommt aus dem Schwarzwald. Sie hat Schokolade, Kirschen und Sahne. Oben sind Schokoladenraspel. Sie ist sehr süß.',
    icon: '🍒',
    image: 'assets/img/Schwarzwälder_Kirschtorte.jpg',
    ingredients: 'Biskuitteig, Kirschen, Sahne, Schokolade, Kirschbranntwein, Zucker, Eier, Mehl',
    gradient: 'linear-gradient(215.32deg,rgb(124, 33, 33) -1%, #3b0002 124%)'
  },
  {
    region: 'Pfalz',
    title: 'Saumagen',
    description: 'Saumagen ist ein traditionelles Gericht aus der Pfalz. Es ist Fleisch und Kartoffeln in einem Schweinemagen. Es schmeckt besser als es aussieht!',
    icon: '🍽️',
    image: 'assets/img/Saumagen.jpg',
    ingredients: 'Schweinemagen, Schweinefleisch, Kartoffeln, Zwiebeln, Karotten, Gewürze, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #4d261a -1%, #150905 124%)'
  },
  {
    region: 'Schleswig-Holstein',
    title: 'Labskaus',
    description: 'Labskaus ist ein altes Seefahrer-Essen aus Norddeutschland. Es ist aus Kartoffeln, Fleisch und roter Bete gemacht. Es sieht rosa aus und schmeckt salzig.',
    icon: '🥔',
    image: 'assets/img/Labskaus.jpg',
    ingredients: 'Kartoffeln, Corned Beef, Rote Bete, Zwiebeln, Matjeshering, Spiegelei, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #ff9ca0 -1%,rgb(179, 71, 94) 40%, #5e0303 124%)'
  },
  {
    region: 'Franken',
    title: 'Nürnberger Rostbratwurst',
    description: 'Nürnberger Rostbratwurst sind sehr kleine Bratwürste aus Nürnberg. Sie sind nur so groß wie ein Finger. Man isst sechs oder mehr auf einmal.',
    icon: '🌭',
    image: 'assets/img/Nürnberger_Rostbratwurst.jpg',
    ingredients: 'Schweinefleisch, Salz, Pfeffer, Majoran, Zitronen, Darm, Gewürze',
    gradient: 'linear-gradient(215.32deg, #9b958c -1%, #4e4a43 124%)'
  },
  {
    region: 'Mecklenburg',
    title: 'Mecklenburger Rippenbraten',
    description: 'Rippenbraten ist ein großes Stück Schweinefleisch mit Rippen. Es wird im Ofen gebraten. Man serviert es mit Rotkohl und Klößen. Es ist sehr lecker.',
    icon: '🥩',
    image: 'assets/img/Mecklenburger_Rippenbraten.jpg',
    ingredients: 'Schweinerippenstück, Rotkohl, Kartoffeln, Zwiebeln, Äpfel, Gewürze, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #f7d9ec -1%, #A61071 40%,rgb(97, 20, 62) 124%)'
  },
  {
    region: 'Ruhrgebiet',
    title: 'Himmel un Ääd',
    description: '"Himmel un Ääd" bedeutet "Himmel und Erde". Es ist Kartoffelpüree mit Apfelmus. Dazu gibt es Blutwurst und Zwiebeln. Es ist ein einfaches, aber gutes Essen.',
    icon: '🍎',
    image: 'assets/img/Himmel_un_Ääd.jpg',
    ingredients: 'Kartoffeln, Äpfel, Blutwurst, Zwiebeln, Butter, Milch, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #F0EFE9 -1%, #7F6852 40%, #4D3F33 124%);'
  },
  {
    region: 'Hamburg',
    title: 'Aalsuppe',
    description: 'Aalsuppe ist eine traditionelle Suppe aus Hamburg. Sie hat Aal (einen Fisch), Gemüse und Kräuter. Früher haben die Hamburger sie oft gegessen.',
    icon: '🐟',
    image: 'assets/img/Aalsuppe.jpg',
    ingredients: 'Aal, Kartoffeln, Karotten, Lauch, Petersilie, Dill, Fleischbrühe, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #995F2F -1%, #4F2E12 124%)'
  },
  {
    region: 'Münsterland',
    title: 'Töttchen',
    description: 'Töttchen ist ein Ragout aus dem Münsterland. Es ist aus Kalbfleisch, Nieren und Pilzen gemacht. Man isst es mit Brot oder Kartoffeln.',
    icon: '🍲',
    image: 'assets/img/Töttchen.jpg',
    ingredients: 'Kalbfleisch, Kalbsnieren, Champignons, Zwiebeln, Sahne, Weißwein, Butter, Gewürze',
    gradient: 'linear-gradient(215.32deg, #3d1f11 -1%, #100806 124%)'
  },
  {
    region: 'Schweiz',
    title: 'Fondue',
    description: 'Fondue ist ein traditionelles Schweizer Gericht. Man schmilzt Käse in einem Topf und taucht Brot hinein. Es ist perfekt für kalte Winterabende mit Freunden.',
    icon: '🧀',
    image: 'assets/img/Fondue.jpg',
    ingredients: 'Gruyère-Käse, Emmentaler, Weißwein, Knoblauch, Brot, Kirschbranntwein, Muskatnuss, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #C2D9EE -1%, #457B9D 124%)'
  },
  {
    region: 'Schweiz',
    title: 'Raclette',
    description: 'Raclette ist ein Schweizer Käsegericht. Man schmilzt den Käse und serviert ihn mit Kartoffeln, Essiggurken und Zwiebeln. Sehr gemütlich und lecker.',
    icon: '🧀',
    image: 'assets/img/Raclette.jpg',
    ingredients: 'Raclette-Käse, Kartoffeln, Essiggurken, Zwiebeln, Schinken, getrocknetes Fleisch, Senf',
    gradient: 'linear-gradient(215.32deg, #d49f6b -1%, #4e2e12 124%)'
  },
  {
    region: 'Schweiz',
    title: 'Rösti',
    description: 'Rösti ist ein Schweizer Kartoffelgericht. Die Kartoffeln werden gerieben und in der Pfanne gebraten. Es ist knusprig außen und weich innen.',
    icon: '🥔',
    image: 'assets/img/Rösti.jpg',
    ingredients: 'Kartoffeln, Butter, Salz, Pfeffer, optional: Speck, Zwiebeln, Eier',
    gradient: 'linear-gradient(215.32deg,rgb(117, 143, 31) -1%, #3a4704 124%)'
  },
  {
    region: 'Schweiz',
    title: 'Zürcher Geschnetzeltes',
    description: 'Zürcher Geschnetzeltes ist ein Kalbfleischgericht aus Zürich. Das Fleisch wird in Streifen geschnitten und in Sahnesauce gekocht. Man serviert es mit Rösti.',
    icon: '🥩',
    image: 'assets/img/Zürcher_Geschnetzeltes.jpg',
    ingredients: 'Kalbfleisch, Zwiebeln, Weißwein, Sahne, Champignons, Butter, Petersilie, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #ffe19c -1%, #a87204 124%)'
  },
  {
    region: 'Schweiz',
    title: 'Älplermagronen',
    description: 'Älplermagronen ist ein einfaches Schweizer Gericht. Es sind Nudeln mit Kartoffeln, Käse und Zwiebeln. Dazu gibt es Apfelmus. Es ist das Schweizer "Mac and Cheese".',
    icon: '🍝',
    image: 'assets/img/Älplermagronen.jpg',
    ingredients: 'Makkaroni, Kartoffeln, Käse, Zwiebeln, Butter, Apfelmus, Sahne, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #8C4717 -1%, #2B1605 124%)'
  },
  {
    region: 'Österreich',
    title: 'Wiener Schnitzel',
    description: 'Wiener Schnitzel ist ein dünnes Stück Kalbfleisch. Es ist paniert und in Butter gebraten. Man serviert es mit Zitrone und Kartoffelsalat.',
    icon: '🍽️',
    image: 'assets/img/Wiener_Schnitzel.jpg',
    ingredients: 'Kalbfleisch, Eier, Mehl, Semmelbrösel, Butter, Zitrone, Kartoffeln, Salz, Pfeffer',
    gradient: 'linear-gradient(215.32deg, #F0B86C -1%, #A0522D 124%)'
  },
  {
    region: 'Österreich',
    title: 'Wiener Tafelspitz',
    description: 'Tafelspitz ist ein klassisches österreichisches Gericht. Es ist gekochtes Rindfleisch mit Gemüse und Brühe. Kaiser Franz Joseph hat es sehr gern gegessen.',
    icon: '🍖',
    image: 'assets/img/Wiener_Tafelspitz.jpg',
    ingredients: 'Rindfleisch (Tafelspitz), Karotten, Lauch, Sellerie, Petersilie, Meerrettich, Zwiebeln, Lorbeerblätter, Pfefferkörner',
    gradient: 'linear-gradient(215.32deg, #8C2C02 -1%, #4B1800 124%)'
  },
  {
    region: 'Österreich',
    title: 'Sachertorte',
    description: 'Die Sachertorte ist eine berühmte Schokoladentorte aus Wien. Sie hat Aprikosenmarmelade zwischen den Schichten und eine glänzende Schokoladenglasur. Ein Meisterwerk der österreichischen Konditorkunst.',
    icon: '🍫',
    image: 'assets/img/Sachertorte.jpg',
    ingredients: 'Schokolade, Eier, Zucker, Butter, Mehl, Aprikosenmarmelade, Schokoladenglasur, Vanille',
    gradient: 'linear-gradient(215.32deg,rgb(99, 60, 41) -1%, #2B1810 124%)'
  },
  {
    region: 'Österreich',
    title: 'Apfelstrudel',
    description: 'Apfelstrudel ist ein traditioneller österreichischer Strudel. Der Teig ist sehr dünn und wird mit Äpfeln, Rosinen und Zimt gefüllt. Man serviert ihn warm mit Vanillesauce.',
    icon: '🍎',
    image: 'assets/img/Apfelstrudel.jpg',
    ingredients: 'Strudelteig, Äpfel, Rosinen, Zimt, Zucker, Butter, Semmelbrösel, Vanillesauce, Puderzucker',
    gradient: 'linear-gradient(215.32deg, #F2D2AE -1%, #7C3C0A 124%)'
  },
  {
    region: 'Österreich',
    title: 'Goulash',
    description: 'Goulash ist ein herzhaftes Fleischgericht aus Österreich und Ungarn. Es wird lange gekocht mit Paprika und Zwiebeln. Man serviert es mit Knödeln oder Brot.',
    icon: '🍲',
    image: 'assets/img/Goulash.jpg',
    ingredients: 'Rindfleisch, Zwiebeln, Paprika, Tomaten, Kümmel, Majoran, Knoblauch, Rotwein, Semmelknödel',
    gradient: 'linear-gradient(215.32deg,rgb(100, 37, 9) -1%, #4B1800 124%)'
  },
  {
    region: 'Österreich',
    title: 'Kaiserschmarrn',
    description: 'Kaiserschmarrn ist ein süßes österreichisches Gericht. Es ist ein zerrissener Pfannkuchen mit Rosinen und Puderzucker. Kaiser Franz Joseph hat es erfunden - daher der Name.',
    icon: '🥞',
    image: 'assets/img/Kaiserschmarrn.jpg',
    ingredients: 'Eier, Milch, Mehl, Zucker, Butter, Rosinen, Puderzucker, Zwetschgenröster, Vanille, Salz',
    gradient: 'linear-gradient(215.32deg, #FDF7EC -1%, #A88F60 124%)'
  }
];

// Функция для генерации HTML слайда
function generateSlideHTML(slide, index) {
    return `
        <div style="background: ${slide.gradient};">
            <h2>${slide.region}</h2>
            <h1>${slide.title} ${slide.icon}</h1>
            <p class="description">${slide.description}</p>
            <div class="ingredients">
                <h4>Zutaten:</h4>
                <p>${slide.ingredients}</p>
            </div>
        </div>
    `;
}

// Функция для генерации HTML изображения
function generateImageHTML(slide) {
    return `
        <div style="background-image: url('${slide.image}');"></div>
    `;
}

// Функция для инициализации слайдера
function initSlider() {
    const upBtn = document.querySelector(".up-button");
    const downBtn = document.querySelector(".down-button");
    const sidebar = document.querySelector(".sidebar");
    const mainSlide = document.querySelector(".main-slide");
    const slidesCount = mainSlide.querySelectorAll("div").length;
    const container = document.querySelector(".container");

    let activeSlideIndex = 0;

    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

    upBtn.addEventListener("click", () => {
        changeSlide("up");
    });

    downBtn.addEventListener("click", () => {
        changeSlide("down");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            changeSlide("up");
        } else if (event.key === "ArrowDown") {
            changeSlide("down");
        }
    });

    function changeSlide(direction) {
        if (direction === "up") {
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            }
        } else if (direction === "down") {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1;
            }
        }

        const height = container.clientHeight;
        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    }
}

// Функция для инициализации слайдера
function initializeSlider() {
    const sidebar = document.querySelector('.sidebar');
    const mainSlide = document.querySelector('.main-slide');
    
    // Очищаем существующий контент
    sidebar.innerHTML = '';
    mainSlide.innerHTML = '';
    
    // Генерируем слайды в правильном порядке
    // Главный слайд - в обычном порядке
    germanDishes.forEach((slide, index) => {
        mainSlide.innerHTML += generateImageHTML(slide);
    });
    
    // Сайдбар - в обратном порядке (с конца массива)
    for (let i = germanDishes.length - 1; i >= 0; i--) {
        const slide = germanDishes[i];
        sidebar.innerHTML += generateSlideHTML(slide, i);
    }
    
    // Инициализируем слайдер после генерации HTML
    initSlider();
}

// Запускаем генерацию при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeSlider);
