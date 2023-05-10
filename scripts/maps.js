ymaps.ready(init);
    function init() {
        let myMap = new ymaps.Map("map", {
            center: [53.372924, 83.812594],
            zoom: 10
        });

    let geoObjectCollection = new ymaps.GeoObjectCollection();

    geoObjectCollection.add(new ymaps.Placemark([53.373745, 83.679041], {
        balloonContent: `
            <h3>Ленинский филиал</h3>
            <div class="sel__block">
                <div class="sel__item map__item">
                    <img src="../images/cars/F-Type.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                    <span class="sel__item_title">
                        Jaguar F-Type
                    </span>
                    <span class="sel__item_color">
                        белый
                    </span><br>
                    <span class="sel__item_info">
                        Бензиновый, АКП
                    </span><br>
                    <div class="sel__item_btn">
                        Выбрать
                    </div>
                </div>
                <div class="sel__item map__item">
                    <img src="../images/cars/nsx.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                    <span class="sel__item_title">
                        Honda NSX
                    </span>
                    <span class="sel__item_color">
                        тёмно-серый
                    </span><br>
                    <span class="sel__item_info">
                        Бензиновый, АКП
                    </span><br>
                    <div class="sel__item_btn">
                        Выбрать
                    </div>
                </div>
                <div class="sel__item map__item">
                    <img src="../images/cars/a4y.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                    <span class="sel__item_title">
                        Audi A4
                    </span>
                    <span class="sel__item_color">
                        желтый
                    </span><br>
                    <span class="sel__item_info">
                        Бензиновый, АКП
                    </span><br>
                    <div class="sel__item_btn">
                        Выбрать
                    </div>
                </div>
            </div>
        `
    }));

    geoObjectCollection.add(new ymaps.Placemark([53.361835, 83.764185], {
        balloonContent: `
        <h3>Октябрьский филиал</h3>
        <div class="sel__block">
            <div class="sel__item map__item">
                <img src="../images/cars/creta.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Hyundai Creta
                </span>
                <span class="sel__item_color">
                    оранжевый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/avista.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Buick Avista
                </span>
                <span class="sel__item_color">
                    cиний
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/a4.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Audi A4
                </span>
                <span class="sel__item_color">
                    серый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
        </div>
    `
    }));

    geoObjectCollection.add(new ymaps.Placemark([53.344375, 83.782381], {
        balloonContent: `
        <h3>Центральный филиал</h3>
        <div class="sel__block">
            <div class="sel__item map__item">
                <img src="../images/cars/altima.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Nissan Altima
                </span>
                <span class="sel__item_color">
                    черный
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/polo.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Volkswagen Polo
                </span>
                <span class="sel__item_color">
                    красный
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, МКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/creta.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Hyundai Creta
                </span>
                <span class="sel__item_color">
                    оранжевый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
        </div>
    `
    }));
    
    geoObjectCollection.add(new ymaps.Placemark([53.343142, 83.694491], {
        balloonContent: `
        <h3>Индустриальный филиал</h3>
        <div class="sel__block">
            <div class="sel__item map__item">
                <img src="../images/cars/glk.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Mercedes-Benz GLK
                </span>
                <span class="sel__item_color">
                    серый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, МКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/f12.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Ferrari F12
                </span>
                <span class="sel__item_color">
                    красный
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/altima.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Nissan Altima
                </span>
                <span class="sel__item_color">
                    черный
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
        </div>
    `
    }));
    
    geoObjectCollection.add(new ymaps.Placemark([53.385652, 83.965372], {
        balloonContent: `
        <h3>Новоалтайский филиал</h3>
        <div class="sel__block map__block">
            <div class="sel__item map__item">
                <img src="../images/cars/rav4.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Toyota RAV4
                </span>
                <span class="sel__item_color">
                    cиний
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/clsw219.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Mercedes-Benz C219
                </span>
                <span class="sel__item_color">
                    белый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, АКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
            <div class="sel__item map__item">
                <img src="../images/cars/glk.png" alt="Машина для аренды" class="sel__item_img map__item_img">
                <span class="sel__item_title">
                    Mercedes-Benz GLK
                </span>
                <span class="sel__item_color">
                    серый
                </span><br>
                <span class="sel__item_info">
                    Бензиновый, МКП
                </span><br>
                <div class="sel__item_btn">
                    Выбрать
                </div>
            </div>
        </div>
    `
    }));

    myMap.geoObjects.add(geoObjectCollection);

    myMap.events.add('click', function (e) {
        let target = e.get('target');
        if (target && target.balloon) {
            target.balloon.open();
        }
    });
}