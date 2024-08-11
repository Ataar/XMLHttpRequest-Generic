let cl = console.log;

const blogs = [
    {
        title: 'Impotrance Of Agriculture',
        content: `The uptake of artificial intelligence (AI) in business is accelerating at pace. Through business acquisitions, in-house AI development and the creation of new AI brands, companies have access to a multitude `,
         images:'assets/images/Ai photo.webp'
         
    },
    {
        title: "Today's Technology",
        content: `Modern technology has paved the way for multi-functional devices like the smartwatch and the smartphone. Computers are increasingly faster, more portable, and higher-powered than ever before.`,
        images: './assets/images/426e09d1704e8e8c10f82df8eb3905ca.jpg'
    },

      {title: 'The Healthy Black Coffee',
      content: `Coffee is a morning staple that many people drink to give them the energy to get through the day. Whether you head to Starbucks or Dunkin' cup of joe or make it at home black coffee has several health benefits.`,
      images:'./assets/images/coffee-cup-coffee-beans-aroma-wallpaper-preview.jpg'
     },
   
    {
        title: 'Jack and the Beanstalk',
        content: `Jack is a poor boy who trades his cow for magic beans. The beans grow into a giant beanstalk reaching up to the sky. Jack climbs the beanstalk and discovers a giant's castle with treasures.`,
        images: './assets/images/jack-beanstalk.jpg'
    },
     
  
    {
        title: 'jack-th-giant-slayer-poster',
        content: `Mango is the King of fruits whereas  Litchi is the Queen. This very sweet, pulpy aromatic, and musky is also loaded with many health benefits like boosting the immune system, regulating blood health.`,
        images: './assets/images/kisan.jpg'
     },

     {
        title:'cinnamon-hot-chocolate-glasses',
        content:`Cinnamon Hot Chocolate is a wholesome but utterly luxurious healthy hot cocoa drink. Sweetened naturally using dates and with a hint of spice this healthy hot chocolate.`,
        images:'./assets/images/cinnamon-hot-chocolate-glasses.jpg'

     }


    
];

function createBlog(blog,blog2,blog3) {
    setTimeout(() => {
        blogs.push(blog,blog2,blog3);
        PNotify.success({
            title: `<span class='color' style='display: flex; align-items: center;'>
                     Success
                     <img class='imG' src='assets/images/boy-removebg-preview.png' alt='Success Icon' >
                     </span>`,
                     titleTrusted: true,
                     text: `<span style="color: white;"><strong class='text'>Blog is created successfully</strong></span>`,
                     textTrusted: true,
                     maxTextHeight: null,
                     delay: 200 // Adjust the delay as needed
                    });
                    getBlog(blogs);
    }, 1000);
}

function getBlog(arr) {
    setTimeout(() => {
        cl(arr);
        temp(arr); // Pass the correct array dc
    }, 1500);
        
      

}

createBlog(
    {
        title: 'The Ugly Duckling',
        content: `A mother duck's eggs hatch and among the ducklings, one is larger and different from the rest. The mother duck is disappointed, but as time passes, the ugly duckling grows into a beautiful swan.`,
        images: './assets/images/ugly duck.jpg'
    },
   {
    title: 'jack-th-giant-slayer-poster',
    content: `A Lion was once caught in the toils of a hunter's net. Unable to free himself, he lay roaring for help. A little Mouse came upon him, and, seeing the plight of the Lion, gnawed the net to pieces and set him free.`,
    images: './assets/images/jack-th-giant-slayer-poster.jpg'
},

 {
    title: 'Yummy Corp feeds',
    content: `In 2016, Mario Suntanu was a general partner at venture capital firm SMDV, but he saw a shift in the food and beverages industry. “Restaurants would not survive if they only have offline services.`,
    images: './assets/images/Yummy-Corp-RD-Team.png'
 },


);

let data = document.getElementById('data');


const temp = () => {
    let result = '';
   blogs.forEach((add) => {


        result += `
            <div class="col-md-4 mb-0">
                <div class="card h-4">
                <div class="card-body">
                <h5 class="card-title text-center p-3">${add.title}</h5>
                <img src="${add.images}" class="card-img-top" alt="Card image">
                <p class="card-text">${add.content}</p>
                    </div>
                </div>
            </div>
            
        `;
        
    });
    data.innerHTML = result;
};
