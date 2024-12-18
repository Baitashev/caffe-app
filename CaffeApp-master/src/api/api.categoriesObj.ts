export interface CategoriesObj {
    [key:string] : {
        id: string,
        name: string,
        img: string,
        url: string
    }
};

export const categoriesObj: CategoriesObj = {
    hotDishes: {
        id: "asdgh991237dfgh",
        name: "Горячее",
        img: "https://ekaterininsky-garden.ru/images/sampledata/meal/001m.jpg",
        url: "/hot_dishes"
    },
    soups: {
        id: "asdghfghfghfgh",
        name: "Супы",
        img: "https://ce6e1bcc-e329-4500-b965-54d06a22bcc8.selstorage.ru/3661277/73c329db-ed26-4e5e-bfa2-65e994bd226e.png",
        url: "/soups"
    },
    traditionsDishes: {
        id: "asd12351237dfgh",
        name: "Традиционная кухня",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/30d15236-9fed-51e8-87d3-609a0490bc48.jpg",
        url: "/buryat_cuisine"
    },
   salats: {
        id: "as324534567dfgh",
        name: "Салаты",
        img: "https://ce6e1bcc-e329-4500-b965-54d06a22bcc8.selstorage.ru/3661277/ff4194eb-fad8-44ff-8650-82de34e3e6c4.png",
        url: "/salats"
    },
    drinks: {
        id: "asdg234`1237dfgh",
        name: "Напитки",
        img: "https://rg.ru/uploads/attachments/article/165/90/15/4p_bru.jpg",
        url: "/drinks"
    },
    other: {
        id: "asd23451237dfgh",
        name: "Хлеб/десерты",
        img: "https://ekaterininsky-garden.ru/images/sampledata/meal/025.jpg",
        url: "/other"
    }
};


export const fetchCategories = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(categoriesObj);
    }, 2000);
});
