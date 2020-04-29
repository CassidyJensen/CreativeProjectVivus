# Vivus Creative Project

This project is an about me page with little svg animations that relate to the topics at hand. 

## Resources

About [Vivus](http://maxwellito.github.io/vivus/)

Vivus [Github](https://github.com/maxwellito/vivus)


## Advice
 
Here are some of the things I learned while using vivus.js. 
Note: I added all of the svg code into the html file rather than importing it in. I had issues connecting in a separate file. 

### Paths / Brush Strokes

The sample generator provided for vivus does not recognize brush strokes as a type of path. If you are using that to generate your svg code, it will only animate the straight lines & objects. It will ignore your brush strokes. To fix this issue you will have to edit the svg code and add the following line to each path tag you want to animate.  

```html
data-async data-start="0" data-duration="200" class="st0"
```
It should look something like this: 

```html
<g>
      <path data-async data-start="0" data-duration="200"
    class="st5" d="M116.3,74c-0.5,8,3.2,16.4,7.9,22.8c4.9,6.6,13.1,9.8,17.6,16.8c1.8,2.7,6.1,0.2,4.3-2.5c-3.9-5.9-9.6-9.1-14.7-13.7
        c-6-5.5-10.7-15-10.2-23.2C121.5,70.8,116.5,70.8,116.3,74L116.3,74z"/>
</g>
```

Data-start, data-duration, and class are all changable for the specific context. 

### Styling

If you are exporting your svg and it has multiple types of strokes (varying size, color, etc), the svg will have styling code. If you are using multiple svgs, the most recent svg code will overwrite the styling of the other ones. I recommend removing all of the styling code and controlling it through your css. The classes are a good way of changing the sizes across the board, but you will have to go through and carefully select which paths should be which size. I recommend using the ids (which are used for the js), to change the color of paths. 

If you have a lot of paths in one svg, I would recommend adding comments to keep track of what each path represents in your image to help for editing the classes of each path. It will take some patience. 

### Read The Documentation & Look at the Example

There are a lot of good notes about how to apply the functions available. The documentation will help you understand what is going on. However, you will also need the examples in order to understand how to implement it in your code. You can find the links to both in the Resources section above. 