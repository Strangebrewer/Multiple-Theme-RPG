# Multiple-Theme-RPG

This is the second jQuery project for my coding bootcamp. The project was actually to create one RPG with a prescribed mechanic, but I noticed along the way that if I were to use generic class, id, and variable names, I could add as many more themes (or skins) as I wanted. So, after getting the original game working, I started adding themes.

The majority of the js code comes from either defining objects for the various themes, or in manipulating the DOM to achieve the look I wanted. The code for the actual game mechanic is minimal by comparison.

When you click a theme button, the game loads with the corresponding images. Then, you choose your character, and the rest of the avatars become defenders. You fight the defenders one-by-one in the order of your choosing until either your character or all defenders reach 0 health.

This was a fun project. I learned more about jQuery DOM manipulation, and a lot of the concepts were further cemented by the large amount of repetition required to write this. I gained some experience using flag variables to set conditions for different functionality, and I started to dip my toe into using objects rather than simple variables. I also gained more experience in seeing how the order of things in the script affects the overall logic and can often be the reason something works or doesn't work, or the difference between working as intended, or having unintended consequences.

I tried to use 'this' to distill multiple on-clicks into one, but found that 'this' didn't seem to work with accessing objects within objects. I tried it by giving each button a value equal to the name of the object, and then setting this.value as the beginning of a chain to access object properties. It didn't work. It always returned a string that looked like the object name, but js wouldn't treat it like an object name. In other words:
<ul>
  <li>if:</li>
    <ul>
      <li>the object name is "starWars", and a property of that object is "heading: 'Star Wars'"</li>
      <li>the value assigned to the button is "value='starWars'"</li>
    </ul>
  <li>then:</li>
    <ul>
      <li> "console.log(this.value);" returns "starWars"</li>
      <li>"console.log(this.value.heading);" returns "undefined"</li>
      <li>whereas "console.log(starWars.heading);" returns "Star Wars"</li>
    </ul>
</ul>

So it seems clear that accessing the html element value of 'starWars' is not at all the same as naming it directly in javascript.

I don't know if I'm trying to misuse either "this" or the html element value attribute, or if they just don't work that way. I found something on Google about parsing object properties as JSON, but nothing I tried seemed to have any effect. So, I have an on-click function for each button rather than one on-click function differentiated by "this". If I had been successful, it might have reduced my js code by as much as 75 lines (probably less, since I  likely would have had to add code elsewhere to accommodate simplifying the buttons). Not an insignificant amount, but not enough to justify further time investment when I don't know if what I'm after is even possible.
