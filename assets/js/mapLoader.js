let frame = document.getElementById("map")

let maps = {
    "Moscow City": "https://yandex.ru/map-widget/v1/?um=constructor%3A8f7e2a5d1874ccfeff785a04b99d229e1cee3b1c69e20d9c77918f118d0687db&amp;source=constructor",
    "Красная площадь":"https://yandex.ru/map-widget/v1/?um=constructor%3A9ef060ebb336861677e56be25f0ab72219702a21483fbe7a028665c3d344c0b7&amp;source=constructor",
    "Храм Василия Блаженного":"https://yandex.ru/map-widget/v1/?um=constructor%3A8fdd2a9a1ac63324e7ad6e0223849a5efd19675f4ea29ad89c931254a7dba11c&amp;source=constructor",
    "Hyatt": "https://yandex.ru/map-widget/v1/?um=constructor%3A3a2422f8df89b797dfac7093c4e6306d3f0e26d0676f1ea6872b5fd3b6a0c11a&amp;source=constructor",
    "Marriott":"https://yandex.ru/map-widget/v1/?um=constructor%3A15a4ca82f06d56cb6b7c8330165cf270439647ff263121c2549054a3d5095f1a&amp;source=constructor",
    "Radisson":"https://yandex.ru/map-widget/v1/?um=constructor%3A947a94b666a1277530498c8a1e35a034cb31de1d0509cb8d528bd461ffdee54f&amp;source=constructor",
    "Seasons": "https://yandex.ru/map-widget/v1/?um=constructor%3A210e9561fc1f7216391942c2dbe487983e709d30e5a89b9350b663d067c546b4&amp;source=constructor",
    "National": "https://yandex.ru/map-widget/v1/?um=constructor%3A6d42b2da500ee4a17367c2882530c9598d7e4b7a432267a49507647a50fae818&amp;source=constructor"
}

export function loadMap(place) {
    frame.src = maps[place]
}