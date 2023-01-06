let boxShadow='';
for(let i=0;i<=2000;i++){
    px=Math.random()<0.5?'-':'';
    py=Math.random()<0.5?'-':'';
    x=Math.floor((Math.random()*window.innerWidth)+1)
    y=Math.floor((Math.random()*window.innerHeight)+1)
    s=Math.floor((Math.random()* 2)-1)
}
boxShadow+=px+x+"px"+py+y+"px 0"+s+"px #fff,";
boxShadow=boxShadow.slice(0,-1)
stars.style.boxShadow=boxShadow;
//=================================
let priz=document.querySelector('#container div:last-child')
let box=document.querySelectorAll('#container div img')
for(let i=0;i<box.length;i++){
    console.log(box[i].src)
    box[i].onclick=function(){
    if(box[i].src==='file:///C:/%D0%9F%D0%B0%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%BE/2023/YGsukz7PLlQhTt2SHFoQg.jpg')  
      priz.innerHTML=`От всего сердца поздравляю с Новым годом!
       Желаю, всего самого доброго, светлого и прекрасного.
        Пусть исполняются самые заветные желания.
         Пусть Новый 2023 год станет самым ярким,
          успешным и счастливым!
        От Кролкуса!!!
      `
      if(box[i].src==='file:///C:/%D0%9F%D0%B0%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%BE/2023/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg')  
      priz.innerHTML=`Поздравляю с Новым годом!
       От всей души желаю только лучшего и нужного!
       Пусть праздничная вьюга подарит тебе массу надежд,
       ярких огней, елочных игрушек
       и сказочного бархата новогодней ночи!
       Желаю исполнения заветных желаний,
       финансового благополучия
       и целого снегопада подарков!
       С праздником!
      От Анонимуса
      `
      if(box[i].src==='file:///C:/%D0%9F%D0%B0%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%BE/2023/3-69.jpg')  
      priz.innerHTML=`С Новым годом!
       Искренне желаю простого человеческого счастья
       – родных людей рядом, крепкого здоровья
       и мирного неба над головой.
       Именно о таких маленьких радостях 
       люди забывают в предпраздничной суете,
       а ведь эти моменты бесценны!
       Пусть в наступающем году
       исполнятся самые заветные желания,
       а дедушка Мороз подарит то,
       о чем мечтается.
       Успехов, вдохновения 
       и праздничного настроения!
     От Двух Пингвинусов
      `

        console.log('++++++++++++++++++++++++++++')
    }
}
