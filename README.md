# scroll-with-animation
I have been curious for a long time about how to make an animated scroll. I decided to pursue this curiosity and find a solution. This is done in two ways, which I will explain below:

# Ways:
simple way : just add this part to your css file :)
 ```shell
html {
  scroll-behavior : smooth;
}
```

## Usage
I did this through requestAnimationFrame.
The scrollAnim class has the properties and methods that I will explain below:

part | type | Description 
--- | --- | --- | 
current | property <Number> | Maintains the current scroll and offsetY value of the window | 
requestAnimId | property <Number> | Maintains the current requestAnimationFrame id | 
scrollDiff | property <Number> | Maintains the length of the scroll increase or decrease in each frame | 
regHref | property <Object RegExp> | regExp object for href
reset | method | This method is called when the scroll reaches the target 
scrollDown | method | This method is called when the target position is below the current position
scrollUp | method | This method is called when the target position is above the current position
checkHref | method | check href attribute , return true?<Array match>:NULL  
  
create a instace of ScrollAnim class : 
  
 ```shell
  //argument -> scrollDiff
  let scrollAnim = new ScrollAnim(50)
```  

## Contributing
As I use this for my own projects, I know this might not be the perfect approach
for all the projects out there. If you have any ideas, just
[open an issue](https://github.com/Miladxsar23/scroll-with-animation/issues/new) and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing
This project is licensed under MIT license.

## Contact
* email: milad.xsar72@gmail.com
