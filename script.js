
const data = [
    {
        title: "Земля",
        icon: "🌍",
        category: "Наука",
        description: "Наша планета и единственный известный мир с жизнью.",
        sections: [
            {
                heading: "Общая информация",
                text: "Земля — третья планета от Солнца и пятая по размеру среди планет Солнечной системы. Она является домом для миллионов видов живых организмов. Возраст нашей планеты составляет примерно 4,54 миллиарда лет."
            },
            {
                heading: "Строение планеты",
                text: "Внутреннее строение Земли включает земную кору, мантию и ядро. Поверхность покрыта океанами, морями, материками, островами и ледниками. Около 71% поверхности занимает вода."
            },
            {
                heading: "Атмосфера и климат",
                text: "Землю окружает атмосфера, состоящая преимущественно из азота и кислорода. Она защищает поверхность от многих опасных воздействий космоса и помогает поддерживать условия для жизни."
            },
            {
                heading: "Интересные факты",
                text: "Земля вращается вокруг своей оси примерно за 24 часа. Один оборот вокруг Солнца занимает около 365 дней. У планеты есть один естественный спутник — Луна."
            }
        ]
    },
    {
        title: "Марс",
        icon: "🔴",
        category: "Космос",
        description: "Четвёртая планета Солнечной системы.",
        sections: [
            {
                heading: "Описание",
                text: "Марс — четвёртая планета от Солнца. Его часто называют Красной планетой из-за характерного красноватого цвета поверхности. Этот цвет связан с минералами железа в марсианской почве."
            },
            {
                heading: "Поверхность",
                text: "На Марсе находятся огромные вулканы, глубокие долины, кратеры и полярные ледяные шапки. Здесь расположена гора Олимп — один из крупнейших известных вулканов Солнечной системы."
            },
            {
                heading: "Исследования",
                text: "Учёные изучают Марс с помощью орбитальных аппаратов, посадочных станций и автоматических марсоходов. Эти исследования помогают узнать больше об истории планеты и возможности существования древней жизни."
            },
            {
                heading: "Спутники",
                text: "У Марса два небольших естественных спутника — Фобос и Деймос. Они имеют неправильную форму и значительно меньше земной Луны."
            }
        ]
    },
    {
        title: "Интернет",
        icon: "🌐",
        category: "Технологии",
        description: "Глобальная система компьютерных сетей.",
        sections: [
            {
                heading: "Что такое интернет?",
                text: "Интернет — это всемирная система взаимосвязанных компьютерных сетей. Она позволяет людям обмениваться информацией, общаться, учиться и пользоваться различными цифровыми сервисами."
            },
            {
                heading: "История",
                text: "История интернета началась во второй половине XX века. Одной из первых сетей стала ARPANET, созданная в США. Со временем технологии развивались, и интернет стал доступен миллиардам людей."
            },
            {
                heading: "Как он работает?",
                text: "Устройства обмениваются данными через специальные сетевые протоколы. Информация передаётся небольшими частями — пакетами. Для поиска нужных сайтов используются доменные имена и DNS."
            },
            {
                heading: "Использование",
                text: "Сегодня интернет используется в образовании, медицине, науке, бизнесе, развлечениях и повседневной жизни. С его помощью можно получать знания практически из любой точки мира."
            }
        ]
    },
    {
        title: "Древний Египет",
        icon: "🏛️",
        category: "История",
        description: "Одна из величайших цивилизаций древнего мира.",
        sections: [
            {
                heading: "Возникновение",
                text: "Древний Египет сформировался в долине реки Нил на северо-востоке Африки. Река играла важнейшую роль в жизни населения, обеспечивая людей водой и плодородной землёй."
            },
            {
                heading: "Фараоны",
                text: "Египтом управляли фараоны, которые обладали большой политической и религиозной властью. Среди известных правителей были Тутанхамон, Рамсес II и Хатшепсут."
            },
            {
                heading: "Архитектура",
                text: "Египтяне строили храмы, гробницы и знаменитые пирамиды. Пирамиды в Гизе являются одними из самых известных памятников древней архитектуры."
            },
            {
                heading: "Культура",
                text: "Египтяне использовали иероглифическое письмо, развивали математику, медицину и астрономию. Они также создавали произведения искусства и сложные системы календарного счёта."
            }
        ]
    },
    {
        title: "Компьютер",
        icon: "💻",
        category: "Технологии",
        description: "Электронное устройство для обработки информации.",
        sections: [
            {
                heading: "Назначение",
                text: "Компьютер — электронное устройство, которое принимает, обрабатывает, хранит и передаёт информацию. Он может выполнять множество задач благодаря программному обеспечению."
            },
            {
                heading: "Основные компоненты",
                text: "К основным компонентам относятся процессор, оперативная память, накопитель, материнская плата и система питания. Каждый элемент выполняет определённую функцию."
            },
            {
                heading: "История компьютеров",
                text: "Первые электронные вычислительные машины занимали целые помещения. Со временем компьютеры стали меньше, быстрее и доступнее. Появились персональные компьютеры и ноутбуки."
            },
            {
                heading: "Современность",
                text: "Компьютеры используются практически во всех областях деятельности человека: от разработки игр и научных исследований до проектирования зданий и создания фильмов."
            }
        ]
    },
    {
        title: "Вселенная",
        icon: "🌌",
        category: "Космос",
        description: "Всё пространство, время, материя и энергия.",
        sections: [
            {
                heading: "Понятие Вселенной",
                text: "Вселенная включает всё существующее: галактики, звёзды, планеты, космические объекты, пространство и время. Она настолько огромна, что её размеры трудно представить."
            },
            {
                heading: "Большой взрыв",
                text: "Согласно современной космологической модели, Вселенная начала расширяться около 13,8 миллиарда лет назад из очень горячего и плотного состояния. Этот процесс называют Большим взрывом."
            },
            {
                heading: "Галактики",
                text: "Галактики — огромные системы из звёзд, газа, пыли и тёмной материи. Наша Солнечная система находится в галактике Млечный Путь."
            },
            {
                heading: "Исследование космоса",
                text: "Люди исследуют Вселенную при помощи телескопов, спутников, космических станций и автоматических аппаратов. Эти исследования помогают узнавать новые сведения о космосе."
            }
        ]
    },
    {
        title: "Солнечная система",
        icon: "☀️",
        category: "Космос",
        description: "Солнце и все небесные тела, связанные с ним.",
        sections: [
            {
                heading: "Общее описание",
                text: "Солнечная система состоит из Солнца и объектов, которые движутся вокруг него под действием гравитации. Она сформировалась примерно 4,6 миллиарда лет назад."
            },
            {
                heading: "Планеты",
                text: "В Солнечной системе восемь планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун. Они отличаются размерами, составом и условиями на поверхности."
            },
            {
                heading: "Солнце",
                text: "Солнце — центральная звезда нашей системы. Оно обеспечивает Землю светом и теплом. Его энергия образуется в результате термоядерных реакций внутри звезды."
            },
            {
                heading: "Другие объекты",
                text: "Кроме планет, в системе есть карликовые планеты, астероиды, кометы, метеороиды и естественные спутники."
            }
        ]
    },
    {
        title: "Искусственный интеллект",
        icon: "🤖",
        category: "Технологии",
        description: "Технологии, позволяющие компьютерам выполнять интеллектуальные задачи.",
        sections: [
            {
                heading: "Определение",
                text: "Искусственный интеллект — направление информатики, связанное с созданием систем, способных выполнять задачи, для которых обычно требуется человеческий интеллект."
            },
            {
                heading: "Машинное обучение",
                text: "Машинное обучение позволяет компьютерным программам находить закономерности в данных и улучшать результаты выполнения задач на основе примеров."
            },
            {
                heading: "Применение",
                text: "Искусственный интеллект применяется в переводчиках, медицинских исследованиях, системах распознавания изображений, навигации и образовательных инструментах."
            },
            {
                heading: "Будущее",
                text: "Развитие искусственного интеллекта открывает новые возможности, но также требует внимания к безопасности, точности информации и ответственному использованию технологий."
            }
        ]
    }
];

const articles = document.getElementById("articles");
const content = document.getElementById("content");
const searchInput = document.getElementById("search");
const articleCount = document.getElementById("articleCount");

let currentCategory = "Все";
let currentArticle = null;

function showArticles() {
    content.style.display = "none";
    document.querySelector(".articles-section").style.display = "block";

    const query = searchInput.value.toLowerCase().trim();

    const filtered = data.filter(item => {
        const fullText = [
            item.title,
            item.description,
            item.category,
            ...item.sections.map(s => s.heading + " " + s.text)
        ].join(" ").toLowerCase();

        return (currentCategory === "Все" ||
            item.category === currentCategory) &&
            fullText.includes(query);
    });

    articles.replaceChildren();
    articleCount.textContent = filtered.length + " статей";

    document.getElementById("sectionTitle").textContent =
        query ? "Результаты поиска" :
        currentCategory === "Все" ? "Популярные статьи" :
        currentCategory;

    if (!filtered.length) {
        articles.textContent = "😕 Статьи не найдены. Попробуй другой запрос.";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("article");
        card.className = "article";

        const icon = document.createElement("div");
        icon.className = "article-icon";
        icon.textContent = item.icon;

        const title = document.createElement("h3");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        const tag = document.createElement("span");
        tag.className = "category-tag";
        tag.textContent = item.category;

        card.append(icon, title, description, tag);
        card.addEventListener("click", () => openArticle(item));

        articles.appendChild(card);
    });
}

function openArticle(item) {
    currentArticle = item;

    document.querySelector(".articles-section").style.display = "none";
    content.style.display = "block";
    content.replaceChildren();

    const back = document.createElement("button");
    back.className = "back-btn";
    back.textContent = "← Назад к статьям";
    back.addEventListener("click", showArticles);

    const title = document.createElement("h1");
    title.textContent = item.icon + " " + item.title;

    const tag = document.createElement("span");
    tag.className = "category-tag";
    tag.textContent = item.category;

    const description = document.createElement("p");
    description.textContent = item.description;

    content.append(back, title, tag, description);

    const fact = document.createElement("div");
    fact.className = "fact";
    fact.textContent = "📚 Категория: " + item.category +
        " | Разделов: " + item.sections.length;
    content.appendChild(fact);

    item.sections.forEach(section => {
        const heading = document.createElement("h2");
        heading.textContent = section.heading;

        const paragraph = document.createElement("p");
        paragraph.textContent = section.text;

        content.append(heading, paragraph);
    });

    addComments(item);

    content.scrollIntoView({ behavior: "smooth" });
}

function addComments(item) {
    const section = document.createElement("div");
    section.className = "comments";

    const heading = document.createElement("h2");
    heading.textContent = "💬 Обсуждение статьи";

    const note = document.createElement("p");
    note.textContent =
        "Демонстрационные комментарии сохраняются только в этом браузере.";

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Напиши свой комментарий...";

    const button = document.createElement("button");
    button.className = "comment-btn";
    button.textContent = "Добавить комментарий";

    const list = document.createElement("div");

    const storageKey = "wikispaces-comments-" + item.title;

    function renderComments() {
        list.replaceChildren();

        let comments = [];

        try {
            comments = JSON.parse(localStorage.getItem(storageKey)) || [];
        } catch (error) {
            comments = [];
        }

        comments.forEach(comment => {
            const element = document.createElement("div");
            element.className = "comment-item";
            element.textContent = comment;
            list.appendChild(element);
        });
    }

    button.addEventListener("click", () => {
        const value = textarea.value.trim();

        if (!value) {
            alert("Сначала напиши комментарий!");
            return;
        }

        let comments = [];

        try {
            comments = JSON.parse(localStorage.getItem(storageKey)) || [];
        } catch (error) {
            comments = [];
        }

        comments.push(value);

        try {
            localStorage.setItem(storageKey, JSON.stringify(comments));
            textarea.value = "";
            renderComments();
        } catch (error) {
            alert("Не удалось сохранить комментарий.");
        }
    });

    section.append(heading, note, textarea, button, list);
    content.appendChild(section);

    renderComments();
}

// Поиск
document.getElementById("searchBtn")
    .addEventListener("click", showArticles);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        showArticles();
    }
});

// Категории
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;

        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        showArticles();
    });
});

// Переключение темы
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("wikispaces-theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const light = document.body.classList.contains("light");

    themeToggle.textContent = light ? "🌙" : "☀️";

    localStorage.setItem(
        "wikispaces-theme",
        light ? "light" : "dark"
    );
});

// Запуск сайта
showArticles();
