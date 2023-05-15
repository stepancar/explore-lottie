
Добавляем import
```javascript
import Lottie, { AnimationItem } from 'lottie-web';
```

Загружаем анимацию из интернета
```javascript
Lottie.loadAnimation({
    container: containerRef.current,
    path: 'https://assets10.lottiefiles.com/packages/lf20_yyhcf6hn.json'
});
```

Загружаем анимацию из файловой системы


```javascript
import squareAnimation from '../../animations/square.json';

Lottie.loadAnimation({
    container: containerRef.current,
    animationData: squareAnimation,
});
```

Исправляем для react 18

```javascript
const animationItem = Lottie.loadAnimation({
    container: containerRef.current,
    animationData: squareAnimation,
});

return () => animationItem.destroy()
```

Сохраняем animationItem в state

```javascript
const [animationItem, setAnimationItem] = useState<AnimationItem | null>(null);

setAnimationItem(animationItem);
```


Обрабатываем клики

```javascript
const handleNextClick = () => {
    animationItem?.goToAndStop(animationItem.currentFrame + 10, true);
}
```

Смотрим output, это svg
Врубаем html, canvas

Замерить перформанс