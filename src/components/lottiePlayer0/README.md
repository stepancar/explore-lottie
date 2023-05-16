
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



```
https://lottiefiles.github.io/lottie-docs/
```


```
https://lottiefiles.github.io/lottie-docs/schema/lottie.schema.json
```

добавить в .vscode/settings.json
```
{
    "json.schemas": [

        {
            "fileMatch": [
                "src/animations/*.json"
            ],
            "url": "https://lottiefiles.github.io/lottie-docs/schema/lottie.schema.json"
        }
    ]
}
```


```
https://github.com/fancy-lottie/lottie-schema


https://github.com/marcusstenbeck/lottie-types
```


https://www.notion.so/lumen5/New-transition-System-b1bef69d4d554e48b800ba7e4a0eef1f