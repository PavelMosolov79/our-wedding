import './App.css';
import LineUp from "./assets/images/LineOne.svg";
import Flower from "./assets/images/Flower.png";
import PlayButton from "./assets/images/PlayButton.png";
import CurrentDay from "./assets/images/CurrentDay.png";
import LineTwo from "./assets/images/LineTwo.png";
import Place from "./assets/images/Place.png";
import OneYear from "./assets/images/OneYear.png";
import Moscow from "./assets/images/Moscow.png";
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    attendance: '',
    alcohol: [],
    allergies: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newAlcohol = checked
          ? [...prev.alcohol, value]
          : prev.alcohol.filter((item) => item !== value);
        return { ...prev, alcohol: newAlcohol };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlEncodedData = new URLSearchParams({
      name: formData.name,
      partnerName: formData.partnerName,
      attendance: formData.attendance,
      alcohol: formData.alcohol.join(','),
      allergies: formData.allergies,
    });

    try {
      const data = new URLSearchParams({
        name: formData.name,
        partnerName: formData.partnerName,
        attendance: formData.attendance,
        alcohol: formData.alcohol.join(','),
        allergies: formData.allergies,
      });

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxbqlB3Z87xRlqOXNTO1qW7Z23GdFvrzwG4pldMQZ3a4ZjbSM6UoDEdtb0uD-cBw2bj/exec',
        {
        method: 'POST',
        body: data,
      });

      const text = await response.text();
      
      alert('Анкета отправлена!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось отправить анкету');
    }
  };

  return (
    <div className="app-weading">
      <div className='weadding-list'>
        <div className='images-block-up'>
          <img className='line-up' src={LineUp} />
          <img className='flower' src={Flower} />
        </div>
        <div className='our-photo'>
          <h1>Яна<br /> Паша</h1>
          <img className='one-year' src={OneYear}/>
          <div className='image-bottom'>
            <img className='play-button' src={PlayButton} />
          </div>
        </div>
        <div className='guest-block'>
          <h2>Дорогие гости</h2>
        </div>
        <div className='about-guest-block'>
          <p>Мы приглашаем вас разделить<br />с нами радостный день, в который мы станем семьей!</p>
        </div>
        <div className="wedding-day">
          <div className="wedding-day-block">
            <div className='day'>
              <p>ПН</p>
            </div>
            <div className='day'>
              <p>ВТ</p>
            </div>
            <div className='day'>
              <p>СР</p>
            </div>
            <div className='day'>
              <p>ЧТ</p>
            </div>
            <div className='day'>
              <p>ПТ</p>
            </div>
            <div className='day'>
              <p>СБ</p>
            </div>
            <div className='day'>
              <p>ВС</p>
            </div>
          </div>
          <div className="wedding-day-block">
            <div className='num'>
              <p>25</p>
            </div>
            <div className='num'>
              <p>26</p>
            </div>
            <div className='num'>
              <p>27</p>
            </div>
            <div className='num'>
              <p>28</p>
            </div>
            <div className='num'>
              <p>29</p>
            </div>
            <div className='num current-day'>
              <p>30</p>
              <img src={CurrentDay} />
            </div>
            <div className='num'>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className='about-day'>
          <img src={LineTwo} />
          <div className='about-day-one'>
            <a>15:30</a>
            <h2>Сбор гостей</h2>
            <p>Время пролетит незаметно<br />за игристым и общением с другими гостями</p>
          </div>
          <div className='about-day-two'>
            <div className='about-day-two-content'>
              <a>16:00</a>
              <h2>Церемония</h2>
              <p>Будет много трогательных моментов, поздравление и, конечно, любви</p>
            </div>
          </div>
          <div className='about-day-three'>
            <a>23:00</a>
            <h2>Окончание вечера</h2>
            <p>Вы станете свидетелями создания новой семьи - нашей семьи</p>
          </div>
        </div>
        <div className='place-photo'>
          <div className='red-sphere-block'>
            <div className='red-sphere'></div>
          </div>
          <img src={Place} />
        </div>
        <div className='place-about'>
          <div className='place-about-name'>
            <h2>Локация</h2>
          </div>
          <div className='place-name'>
            <p>Хвоя - Морская Сфера</p>
          </div>
          <div className='place-text'>
            <p>​Микрорайон Речкуновская Зона Отдыха, 6а</p>
          </div>
          <a href='https://2gis.ru/berdsk/geo/141373143678588' target='_blank'>Открыть карту</a>
        </div>
        <div className='love-story'>
          <div className='love-story-block'>
            <div className='love-story-text'>
              <h2>История любви</h2>
              <h2>История любви</h2>
              <h2>История любви</h2>
            </div>
          </div>
          <div className='place-photo'>
            <div className='red-sphere-block'>
              <div className='red-sphere'></div>
            </div>
            <img src={Moscow} />
          </div>
          <div className='our-love-story'>
            <p>Апрель... Москва... После прогулки по городу он пригласил ее в ресторан. После пары волнительных минут он задал тот самый вопрос и она сказала - Да!</p>
          </div>
          {/* <div className='file-about'>
            <div className='white-sphere-block'>
              <div className='white-sphere'></div>
            </div>
            <h2>Дресс-код</h2>
            <p>Для нас главное - Ваше присутствие!<br />Будем благодарны если вы воздержитесь от ярких тонов.</p>
          </div>
          <div className='file-about'>
            <div className='white-sphere-block'>
              <div className='white-sphere'></div>
            </div>
            <h2>Подарки</h2>
            <p>Подарки - по любви.<br />Лучше в конверте</p>
          </div> */}
        </div>
        <div className='google-form'>
          <h2>Анкета гостя</h2>
        </div>
        <div className='form-block'>
          <form onSubmit={handleSubmit}>
            <div className='form-fio'>
              <label>Имя и Фамилия</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Иванов Иван"
                required
              />
            </div>
            <div className='form-fio'>
              <label>Имя и Фамилия второй половинки</label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                placeholder="Иванова Анна"
              />
            </div>
            <div className='form-yes'>
              <p>Планируете ли Вы присутствовать на свадьбе?</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="Да"
                    checked={formData.attendance === 'Да'}
                    onChange={handleChange}
                  /> да
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="Нет"
                    checked={formData.attendance === 'Нет'}
                    onChange={handleChange}
                  /> нет
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="attendance"
                    value="Отвечу позже"
                    checked={formData.attendance === 'Отвечу позже'}
                    onChange={handleChange}
                  /> отвечу позже
                </label>
              </div>
            </div>
            <div className='form-drink'>
              <p>Уточните Ваши предпочтения в алкоголе, выбрав один или несколько вариантов</p>
              {[
                'шампанское',
                'вино красное',
                'вино белое',
                'водка',
                'виски',
                'коньяк',
                'мартини',
                'безалкогольные напитки',
              ].map((drink) => (
                <div key={drink}>
                  <label>
                    <input
                      type="checkbox"
                      value={drink}
                      checked={formData.alcohol.includes(drink)}
                      onChange={handleChange}
                    /> {drink}
                  </label>
                </div>
              ))}
            </div>
            <div className='form-sick'>
              <label>
                Есть ли у вас аллергия на какие-либо продукты? (Если да - укажите какие)
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="Молочные продукты, соя и т.д."
                />
              </label>
            </div>

            <button
              type="submit"
              className='form-button'
            >
              Отправить
            </button>
          </form>
        </div>
        <div className='goodbye'>
          <h2>До встречи в этот особенный день!</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
