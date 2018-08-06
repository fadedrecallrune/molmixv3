import React from "react";
import "./AboutUs.css";
import Header from "../header/Header";

import water from "../images/water.png";
import aboutus1 from '../images/aboutus1.png'
import aboutus2 from '../images/aboutus2.png'
import aboutus3 from '../images/aboutus3.png'
import aboutus4 from '../images/aboutus4.png'
import aboutus5 from '../images/aboutus5.png'
import sixsix from '../images/66.png'



import {AboutUsTable} from './AboutUsTable'


export const AboutUs = () => (
  <div className="aboutus-container">
    <h1 className='margin-left' >О нас</h1>
    {/* <h6 className='margin-left' style={{ fontWeight: "900" }}>
      Очистные сооружения от компании «МОЛМИКС» с Технологией BIO CLEANER®
    </h6> */}

    <div className="aboutus-firstbox">
      <div className='firstbox' >
        <p className='first-box-width'>
        Компания Molmix продает и устанавливает индивидуальные очистные сооружения сточных вод. Мы имеем почти 15-ти летний опыт производства данных сооружений. 
        </p>
        <p >
        Очистные Bio Cleaner® предназначены для очистки стоков от самых маленьких индивидуальных источников загрязнения, таких как частные и многоквартирные дома, пансионаты и т.д. Они полностью заменяют устаревшие септики и емкости, как с точки зрения производительности, так и с точки зрения эксплуатационных затрат. Индивидуальные очистные сооружения сточных вод Bio Cleaner соответствуют требованиям современного образа жизни – очищают воду из душевых, санузлов, кухонь, стиральных машин или посудомоечных машин.
        </p>
        <p >
        Первым преимуществом является первоклассное качество станции очистки сточных вод. Мы производим очистные сооружения только из пластика, который не был переработан. Мы используем только качественный сертифицированный пластик компании Röchling, которая гарантирует высокую механическую стойкость пластиковой ёмкости. Механическая устойчивость ёмкости для воды вычислена статистически. Толщина стены составляет 8 мм.
        </p>
        <p>
          Данная система является новым шагом на пути передовых технологий
          очистки сточных вод.
        </p>
      </div>
      <img  src={water} alt="" />
    </div>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'5%', color:'blue'}}>Индивидуальные очистные станции:</h6>

    <div  style={{display:'flex', justifyContent:'center'}} className=''>
      <img className='aboutusimage' src={aboutus1} alt='' />
    </div>

    <h6 className='margin-left' style={{marginTop:'3%', textAlign:'center'}} >Сочетание уникальной технологии с использованием высококачественных материалов для производства станций и электронного оборудования от лучших японских, швейцарских и немецких производителей делает BIO Cleaner® наиболее востребованными на европейском рынке.</h6>

    <div  style={{display:'flex', justifyContent:'center'}} className=''>
      <img className='aboutusimage' src={sixsix} alt='' />
    </div>

    <div style={{display:'flex', justifyContent:'center', marginTop:'3%'}}>
    <img className='aboutusimage2' src={aboutus2} alt='' />
    </div>
    
    <h6 className='margin-left' style={{marginTop:'3%', textAlign:'center'}} >Индивидуальный «BIO CLEANER» типа «COMFORT DUO» с двух судов является развитием для Германии. Они также сертифицированы в соответствии с немецкими требованиями, стандартами и законами об очистке сточных вод и экологии. Подходит для гостевых домов, офисных зданий, жилищных кооперативов, гостиниц, заводов-изготовителей и других, где трудно контролировать то, что выбрасывается в канал.</h6>

    <h5 className='margin-left' style={{fontWeight:'900', marginTop:'6%', color:'blue'}}>Комплексные водоочистные сооружения:</h5>

    <div style={{display:'flex', justifyContent:'center', marginTop:'4%'}}>
      <img className='aboutusimage' src={aboutus3} alt='' />
    </div>
    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'6%', textAlign:'center'}}>Биологические установки для очистки сточных вод Модели BIO CLEANER ® от BC-30 до BC-150 предназначены для очистки сточных вод от небольших индивидуальных источников. Например, небольшие деревни, отдаленные города, кемпинги, мотели, автозаправочные станции и небольшие промышленные предприятия.</h6>
    <div style={{display:'flex', justifyContent:'center', marginTop:'1%'}}>
      <img className='aboutusimage2' src={aboutus4} alt='' />
    </div>

    <div style={{display:'flex', justifyContent:'center', marginTop:'1%'}}>
      <img className='aboutusimage' src={aboutus5} alt='' />
    </div>


    
    {/* <ul>
      <li>Технология BIO Cleaner® - Чехия (разработана и запатентована компанией «ENVI-PUR»)</li>
      <li>Полипропилен - Германия (Разработан и поставляется по заказу компании REHAU)</li>
      <li>Компрессоры - Япония (Разработаны и поставляются на заказ от компании BIBUS)</li>
      <li>Электроника, контроллеры и др. электрическое оборудование - Швейцария (Разработаны и поставляется по заказу компании ABB)</li>
    </ul> */}

    {/* <div className='list' >
    <p>Водоочистные сооружения BIO Cleaner® производятся на заводе в Чехии. Поставляется в полностью готовом виде заказчику. Неотъемлемой частью поставки является установка на площадке клиента, тестирование, ввод в эксплуатацию, гарантийное и пост гарантийное обслуживание. Официальным поставщиком для Украины является компаниея Молмикс. Благодаря высокому качеству и годам бесперебойной работы, водоочистные сооружения BIO Cleaner® являются бесспорным лидером на европейском рынке!</p>
    </div>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Профиль компании производителя</h6>
    <div className='list'>
      <p>ООО «ENVI-PUR» является ведущей чешской компанией в области проектирования, производства, поставки и монтажа очистных сооружений сточных вод.</p>
      <p style={{marginTop:'2%'}} >Благодаря высокому уровню технического персонала и долгосрочной концептуальной работы:</p>
    </div>

    <ul>
      <li>Производитель сохранила доминирующее положение на европейском рынке, и ее продукция ценится не только в Чехии, но успешно экспортируются на три континента.</li>
      <li>Компания имеет научные коллективы специалистов для развития и работает в тесном сотрудничестве с университетами и признанными экспертами в отрасли очистных сооружений. По этим причинам, многие разработки были запатентованы.</li>
    </ul>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Продукты:</h6>

    <ul>
      <li>очистка сточных вод;</li>
      <li>установки для питьевой воды и бассейна;</li>
      <li>очистные сооружения для промышленных сточных вод;</li>
      <li>пластиковые контейнеры и с нержавеющей стали, металлические и деревянные конструкции для пищевой промышленности, машиностроения и строительства.</li>
    </ul>

    <div className='list'>
    <p>Компания  имеет 110 сотрудников. Из них 46 находятся в управлении и 64 являются техническим, обслуживающим и производящим персоналом. Производство динамично развивается, в прошлом году оборот компании составил более 150 миллионов евро. Основное производство в городе Собеслав - Чехия.</p>

    <p>Чешский производитель имеет более тридцати деловых партнеров в Чехии и странах Европы (в том числе Словакии, Германии, Швейцарии, Литве, Украине, Румынии, Великобритании, Ирландии, Хорватии, Словении, Финляндии, Швеции, Испании, Болгарии, Сербии, Греции и Франции).</p>

    <p>Система управления качеством используемая при производстве ОС сертифицирована по ISO 9001: 2015. Управление окружающей средой в соответствии с ISO 14001, а также охраны здоровья и оценки безопасности в соответствии с ISO 18001.</p>
    </div>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Очистные сооружения для очистки сточных вод BIO Cleaner®</h6>

    <div className='list'>
      <p>Очистные сооружения для сточных вод производимые в Чехии и предлагаемые на Украинском рынке компанией «МОЛМИКС» помечены знаком торговой марки Bio Cleaner®. Эта торговая марка чешского производителя хорошо известна в Украине и Европе. Каждый год они вводят в эксплуатацию более 9,500 очистных сооружений различного калибра. Бренд Bio Cleaner® сохраняется на трех континентах!</p>
    </div>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Применение очистных сооружений - с технологией Bio Cleaner®:</h6>

    <ul>
      <li>Частные дома (эквивалент населения 4-30);</li>
      <li>Отели, базы отдыха, кемпинги, придорожные рестораны и многое другое. (эквивалент населения 20-150);</li>
      <li>Расчетные системы (с эквивалентом населения более 200);</li>
      <li>Промышленность.</li>
    </ul>

    <div className='list'>
      <p>В Чехии  успешно реализованы проекты по реконструкция очистных сооружений, построеные в период 1970-1980 гг. Технология первоначально использования в этих очистных сооружениях не отвечает современным требованиям, главным образом, в отношении удаления элементов азота. Новая технология BIO Cleaner® установлена в исходных структурах и таким образом реализован новый, высокоэффективный завод по очистке сточных вод с меньшими затратами.</p>

      <p>Технология Bio Cleaner® для биологической очистки сточных вод, который использует медленную и постепенную загрузку загрязненной воды, в которой протекает сложный процесс очистки. Этот процесс позволяет достичь очень высоких показателей очищенной воды при низкой стоимости.</p>
    </div>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Очистные станции для питьевой воды (DWTP)</h6>

    <div className='list'>
      <p>В Чехии успешно проведят реконструкции очистных сооружений для питьевой воды, которые были построены в 20-м веке. Технология первоначально использовались в этих учреждениях для питьевой воды не отвечает современным требованиям, предъявляемым к питьевой воде. В частности, в реконструкции следующих блоков: седиментации или осветления, фильтрации песка, хранения и дозирования реагентов для обработки и разделения шлака.</p>

      <p>Компания гарантирует доставку новых разработок технологических элементов для воды, растворенная воздушной флотацией дренажной системы, керамической мембранной системой. Технический департамент подготовит документацию для изготовления и другого оборудования, таких как различные резервуары, трубопроводы, клапаны и другие более сложные продукты, изготовленные из пластмассы и нержавеющей стали для водного сектора.</p>

      <p>В результате высокого уровня профессионализма, чешские специалисты успешно покорили как и европейский рынок так и другие рынки, куда «ENVI-PUR» экспортирует свою продукцию.</p>
    </div> */}

    {/* <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%'}}>Очистные сооружения BIO Cleaner® - дизайн и работа</h6> */}
    <h4 className='margin-left' style={{fontWeight:'900', marginTop:'3%', color:'blue'}}>Очистные сооружения для сточных вод BIO CLEANER®</h4>

    <div className='list'>
      <p>Очистные сооружения сточных вод, производимые чешской компанией и проданные на болгарском рынке фирмой Hg & Sons Ltd, маркируются товарным знаком Bio Cleaner ® . Этот товарный знак чешского производителя хорошо известен как в Чешской Республике, так и во всей Европе с ее продуктовыми линиями. Ежегодно вводятся в эксплуатацию более 9500 различных типов водоочистных сооружений. Марка Bio Cleaner ® сохранилась на трех континентах!
</p>
      {/* <p>Очистные сооружения BIO Cleaner® предназначены для очистки сточных вод от отдельных источников, жилых домов, туристических объектов, зданий, общежитий и многое другое. Новая система заменяет устаревшие септики. Эффективность в технологическом и финансовом плане не вызывает сомнений.</p>

      <p>BIO Cleaner® совершенные объекты с высокой производительностью и легко управляемые. Простота и практичность конструкции этих станций, которые не включают в себя вращающиеся компоненты обеспечивают низкие эксплуатационные расходы и минимальное энергопотребление. Очистные сооружения BIO Cleaner® могут быть установлены как над, так и под землей, а также в септиках, которые полностью отвечают пожеланиям клиентов.</p>

      <p>Параметры качества обработанной воды из этих очистных сооружений, позволяют использовать данную воду для тушения пожаров, очистки улиц и дорог, полива парков, овощей, фруктов. Обработанная вода может быть направлена в поглощающие колодцы, дренажные системы и водные приемники II-го класса. Станции очистки сточных вод BIO Cleaner® очень выгодные, особенно в районах, где нет канализации или она децентрализованная.</p>

      <p>Станции, предлагаемые компанией «МОЛМИКС» не требуют загрузки активного ила, любых бактерий, порошков, таблеток и других активаторов. Эти сооружения имеют более низкий порог получения сточных вод. Они работают так же эффективно, как при минимальной и при максимальной нагрузке сточных вод. Это означает, что даже если нет поступления сточных вод в течение некоторого времени в очистные сооружения BIO Cleaner®, то процесс очистки сохраняется без необходимости какой-либо дополнительной активации. Процесс очистки BIO Cleaner® запускается автоматически после возобновления потока сточных вод.</p>

      <p>Благодаря своему высокому качеству обработанной воды, воду можно вывести в канал или реку.</p>

      <p>Станции очистки сточных вод BIO Cleaner® изготовлены из чрезвычайно прочного, высококачественного и однородного полипропилена. Толщина полипропилена в моделях «ВС-4» до «ВС-20» составляет от 8  до 10 мм, а толщина моделей «ВС-25» до «ВС-150» составляет  до 100 мм, в зависимости от модели. Форма, дизайн, конфигурация, прочность материала и уникальная технология без каких-либо насосов и вращающихся элементов делают эти очистные сооружения практически вечными.</p>

      <p>Дополнительная информация об уникальности предлагаемых очистных сооружений поставляемых компанией «МОЛМИКС» можно найти в разделе «Технологии».</p>

      <p>В «Галерее» представлены детальные фотографии, чтобы вы убедились наглядно в уникальности BIO Cleaner®!</p> */}
    </div>

    <h5 className='margin-left' style={{fontWeight:'900', marginTop:'3%', color:'blue'}}>Биологические очистные установки BIO CLEANER ® поставляются в виде полностью готового продукта, и их ввод в эксплуатацию является частью поставки.</h5>

    <h4 className='margin-left' style={{fontWeight:'900', marginTop:'0%'}}>Гарантийный срок: 24 месяцев ПОЛНОЙ ГАРАНТИИ!</h4>

    <h6 className='margin-left' style={{fontWeight:'900', marginTop:'3%', textAlign:'center'}}>СРАВНИТЕЛЬНАЯ ТАБЛИЦА действия очистных сооружений BIO Cleaner®</h6>


    <div className='aboutus-table'>
      <AboutUsTable />
    </div>



  </div>
);
