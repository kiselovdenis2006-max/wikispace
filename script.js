
const data = [
    {
        title: "Земля",
        icon: "🌍",
        category: "Наука",
        description: "Наша планета",
        text: "Земля — третья планета от Солнца. На ней существует жизнь. Возраст планеты составляет около 4,54 миллиарда лет."
    },
    {
        title: "Марс",
        icon: "🔴",
        category: "Космос",
        description: "Красная планета",
        text: "Марс — четвёртая планета от Солнца. Его поверхность имеет красноватый цвет."
    },
    {
        title: "Интернет",
        icon: "🌐",
        category: "Технологии",
        description: "Всемирная сеть",
        text: "Интернет — глобальная система компьютерных сетей, которая позволяет обмениваться информацией."
    },
    {
        title: "Древний Египет",
        icon: "🏛️",
        category: "История",
        description: "Древняя цивилизация",
        text: "Древний Египет — одна из самых известных древних цивилизаций. Египтяне строили пирамиды и использовали иероглифы."
    },
    {
        title: "Компьютер",
        icon: "💻",
        category: "Технологии",
        description: "Электронное устройство",
        text: "Компьютер — устройство для обработки, хранения и передачи информации."
    },
    {
        title: "Вселенная",
        icon: "🌌",
        category: "Космос",
        description: "Всё существующее",
        text: "Вселенная включает пространство, время, материю и энергию."
    }
];

const articles = document.getElementById("articles");
const content = document.getElementById("content");

function showArticles(list) {
    articles.innerHTML = "";

    if (list.length === 0) {
        articles.innerHTML = "<p>Статьи не найдены.</p>";
        return;
    }

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "article";

        const title = document.createElement("h3");
        title.textContent = item.icon + " " + item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(title, description);

        card.onclick = () => openArticle(item);

        articles.appendChild(card);
    });
}

function openArticle(item) {
    content.innerHTML = "";

    const back = document.createElement("button");
    back.textContent = "← Назад";
    back.onclick = () => {
        content.innerHTML = "";
        showArticles(data);
    };

    const title = document.createElement("h1");
    title.textContent = item.icon + " " + item.title;

    const category = document.createElement("p");
    category.textContent = "Категория: " + item.category;

    const text = document.createElement("p");
    text.textContent = item.text;

    content.append(back, title, category, text);
}

function searchArticles() {
    const query = document.getElementById("search")
        .value.toLowerCase().trim();

    const filtered = data.filter(item =>
        (item.title + " " + item.description + " " +
        item.text + " " + item.category)
        .toLowerCase().includes(query)
    );

    content.innerHTML = "";
    showArticles(filtered);
}

document.getElementById("search")
    .addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchArticles();
        }
    });

showArticles(data);
