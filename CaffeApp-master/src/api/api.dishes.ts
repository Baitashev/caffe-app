import { Dishes } from '../types/types';
import { categoriesObj } from './api.categoriesObj';

export const dishes: Dishes[] = [
    {
        id: "aks3459123jjcv",
        name: "Сковородочка с курицей",
        img: "https://ekaterininsky-garden.ru/images/sampledata/meal/001.jpg",
        price: 450,
        description: "Курица",
        weight: "229 грамм",
        category: categoriesObj.hotDishes
    },
    {
        id: "aks34591789j12",
        name: "Стейк из семги",
        img: "https://ekaterininsky-garden.ru/images/sampledata/meal/004m.jpg",
        price: 219,
        description: "Рыбный стейк",
        weight: "250 грамм",
        category: categoriesObj.hotDishes
    },


    {
        id: "a3s5idg213g23od",
        name: "Свекольник",
        img: "https://ekaterininsky-garden.ru/images/sampledata/meal/004m.jpg",
        price: 245,
        description: "Свекольный суп",
        weight: "460 грамм",
        category: categoriesObj.soups
    },
    {
        id: "pcv34345civj1",
        name: "Плов",
        img: "https://too.kg/wp-content/uploads/Plov-1.jpg",
        price: 659,
        description: "Говядина, свинина, лук, соль, перец.",
        weight: "400 грамм",
        category: categoriesObj.traditionsDishes
    },

    {
        id: "ao12ibk50spv812",
        name: "Крабовый",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/33c40203-3576-5f5e-98ff-2cffd9bcd0e8.jpg",
        price: 150,
        description: "Свежие огурцы, капуста пекинская, краб. палочки, яйцо, кукуруза, майонез.",
        weight: "160 грамм",
        category: categoriesObj.salats
    },


    {
        id: "a321412ibk5asd12",
        name: "Цезарь",
        img: "https://ce6e1bcc-e329-4500-b965-54d06a22bcc8.selstorage.ru/3661277/961a59e2-09c2-4fae-844c-fe197c0c43ea.png",
        price: 200,
        description: "Курица, лист салата, соус, помидоры черри, гренки. 180 г.",
        weight: "210 грамм",
        category: categoriesObj.salats
    },

    {
        id: "vic34a259ijdfj",
        name: "Морс брусничный",
        img: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/mors.jpg",
        price: 40,
        description: "Брусника, вода, сахар",
        weight: "250 мл",
        category: categoriesObj.drinks
    },
    {
        id: "235вc34a25345j",
        name: "Компот из сухофруктов",
        img: "https://kulinarnia.ru/wp-content/uploads/2019/10/kompot-iz-suhofruktov.jpg",
        price: 40,
        description: "Сухофрукты, вода, сахар",
        weight: "250 мл",
        category: categoriesObj.drinks
    },
    {
        id: "sadi29jgo19a",
        name: "Чай черный/зеленый",
        img: "https://miychay.com/upload/iblock/7c6/7c664063ba5e6215cb3567de3330c187.jpg",
        price: 20,
        description: "Чай черный или зеленый на выбор",
        weight: "250 мл",
        category: categoriesObj.drinks
    },
    {
        id: "99427yshsh17asdb",
        name: "Блины",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/23564a0c-19ba-5686-b439-3f3401ff7013.jpg",
        price: 80,
        description: "Мука, молоко, сахар, яйцо",
        weight: "130 грамм",
        category: categoriesObj.other
    },


    {
        id: "9nlokh456g34sdb",
        name: "Хлеб черный",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/9455adbe-3b5c-57c4-ae01-873649fbdcdc.jpg",
        price: 5,
        description: "Мука ржаная, мука пшеничная, дрожжи, сахар, вода, соль",
        weight: "25 грамм",
        category: categoriesObj.other
    },
    {
        id: "jhg27yshfg34sdb",
        name: "Хлеб белый",
        img: "https://s3.smartofood.ru/ayan_cafe_ru/menu/715df36a-7718-5039-b70e-daf92f86b848.jpg",
        price: 5,
        description: "Мука пшеничная, дрожжи, сахар, вода, соль",
        weight: "25 грамм",
        category: categoriesObj.other
    },
];

export const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(dishes);
        }, 5000);
    });
