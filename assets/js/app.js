let cl = console.log;

const blogData = [
  
    {
        link: 'https://youtu.be/ygTmV3K57_8?si=WeqH1s_l8QaWFDml',
        content: `The Monkey King or Sun Wukong (simplified Chinese: 孙悟空; traditional Chinese: 孫悟空; pinyin: Sūn Wù Kōng) is a literary and religious figure best known as one of the main players in the 16th-century Chinese novel Journey to the West (traditional Chinese: 西遊記; simplified Chinese: 西游记).[1] In the novel, Sun Wukong is a monkey born from a stone who acquires supernatural powers through Taoist practices.`,
        id: generateUUID()
    },
    {
        link: 'https://youtu.be/kcFeV2bKkTM?si=YX7qKdUCxu_L6qKA',
        content: `निर्देशक 'हेराल्ड ज़्वार्ट' द्वारा वर्ष 2010 में रिलीज़ की गई कराटे किड फिल्म जिसमें जैकी चैन, जेडन स्मिथ, ताराजी पी. हेंसन ने अभिनय किया है।
यह फिल्म 1984 में इसी नाम की क्लासिक की रीमेक है। यह ड्रे पार्कर (जेडन स्मिथ) की कहानी बताती है, जो एक युवा लड़का है जो अपनी मां के साथ चीन चला जाता है। अपने नए स्कूल में फिट होने और धमकाए जाने के लिए संघर्ष करते हुए, ड्रे को श्री हान (जैकी चैन) में सांत्वना और सलाह मिलती है, जो एक रखरखाव आदमी है जो गुप्त रूप से कुंग फू का अभ्यास करता है। मिस्टर हान ड्रे के गुरु बन जाते हैं और उनकी चुनौतियों पर काबू पाने और मार्शल आर्ट के माध्यम से जीवन के मूल्यवान सबक सीखने में उनकी मदद करते हैं।`,
        id: generateUUID(),
    },

    {
      link:'https://youtu.be/lahIVJj9v-E?si=LIRVB5J2ho2QHNQf',
      content:'1. समस्त संसार को बनाने वाला एक ही मालिक अल्लाह हैं। वह निहायत मेहरबान और रहम करने वाला है। उसी की ईबादत (पूजा) करो और उसी का हुक्म मानो। 2. अल्लाह ने इन्सान पर अनगिनत उपकार किए हैं। धरती और आकाश की सारी शक्तियॉ इन्सानों की सेवा मे लगा दी हैं। वही धरती और आकाश का मालिक हैं, वही तुम्हारा पालनहार हैं। 3.सारे मानव एक मालिक(अल्लाह) के पैदा किए हुए है, एक मॉ-बाप ( आदम-हव्वा ) की संतान हैं। उनके बीच रंग-नस्ल जाति, भाषा, क्षेत्रीयता आदि का भेद भाव घोर अन्याय है। सारे लोग आदम की सन्तान है, उनसे प्यार करो घृणा न करो। उन्हे आशावान बनाओं निराश मत करो।',
      id:generateUUID
    },

    {
        link:"https://youtu.be/WbdPSL64WPw?si=p0Ce1kPbZxolSqwO",
        content:"Kung Fu Hustle (Chinese: 功夫; lit. Kung Fu) is a 2004 martial arts action comedy film directed, produced and co-written by Stephen Chow, who also stars in the leading role, alongside Huang Shengyi, Yuen Wah, Yuen Qiu, Danny Chan Kwok-kwan and Leung Siu-lung in prominent roles. The story revolves around a murderous neighbourhood gang, a poor village with unlikely heroes and an aspiring gangster's fierce journey to find his true self.", 
        id : generateUUID
    },



    {
        link: 'https://youtu.be/UDpuAi5hGr4?si=4BDwCTVuADCOAvBA',
        content: `The Jungle Book is an 1894 collection of stories by the English author Rudyard Kipling. Most of the characters are animals such as Shere Khan the tiger and Baloo the bear, though a principal character is the boy or "man-cub" Mowgli, who is raised in the jungle by wolves. Most stories are set in a forest in India; one place mentioned repeatedly is "Seeonee" (Seoni), in the central state of Madhya Pradesh`,
        id: generateUUID(),
    
    },



    {
        link:'https://youtu.be/jyBUXwHTVK4?si=XPIUjg3CeOQewE0n',
        content:'हेरा फेरी ( अनुवाद:  फाउल प्ले ) 2000 में बनी भारतीय हिंदी भाषा की कॉमेडी फिल्म है, जो प्रियदर्शन द्वारा निर्देशितऔर नीरज वोरा द्वारा लिखित है , जिसमें अक्षय कुमार , सुनील शेट्टी , परेश रावल , तब्बू , ओम पुरी और गुलशन ग्रोवर ने अभिनय किया है । [ ३ ] यह फिल्म १९८९ की मलयालम फिल्म रामजी राव स्पीकिंग की रीमेक है, जो स्वयं १९७१ की अमेरिकी टीवी फिल्म सी द मैन रन से प्रेरित थी । [ ४ ] [ ५ ] [ ६ ] यह हेरा फेरी फ्रैंचाइज़ी की पहली किस्त है । कहानी दो किरायेदारों, राजू और श्याम और उनके मकान मालिक बाबूराव गणपतराव आप्टे के इर्द-गिर्द घूमती है, जिन्हें पैसों की सख्त जरूरत है। उन्हें एक क्रॉस-कनेक्शन के जरिए फिरौती की कॉल आती है और वे अपने लिए फिरौती लेने की योजना बनाते हैं।',
        id:generateUUID()
    },

    {
        link:'https://youtu.be/8ATlJgy6fTE?si=c1oSXUEG95S3mJas',
        content:``
    }
    

];

function createBlogdata(blog) {
    setTimeout(() => {
        let error = false;

        if (!error) {
            blogData.push(blog);
            localStorage.setItem('blogsArr', JSON.stringify(blogData));
            readBlogs(blogData);

        } 
    }, 1000);
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function readBlogs(arr) {
    setTimeout(() => {
        cl(arr);
        temp();
    }, 2000);
}

createBlogdata({
    
    
        link:'https://youtu.be/Wy6-3INVR7M?si=8Sqyko6qnNACXj1q',
        content:'',
        id:generateUUID()
    
}

);



let data01 = document.getElementById('data01');

const temp = () => {
    let result = '';
    blogData.forEach((add) => {



        // Extract the video ID from the link
        const videoId = new URL(add.link).pathname.split('/').pop();  
        // new URL get whole url from add.link and pathname property will get pathname of url /ygTmV3K57_8 and /UDpuAi5hGr4 are the
        // path of links url then split() will remove / character and then pop() retrives last item form link id i.e ygTmV3K57_8 and UDpuAi5hGr4

        cl(videoId)
        const iframeSrc = `https://www.youtube.com/embed/${videoId}`;

        result += `
            <div class="col-md-6 mb-4" id ='${add.id}'>
                <div class="card h-30">
                    <div class="card-body">
                        <div class='iframe-container text-center'>
                            <iframe width="100%" height="360" src="${iframeSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p class="card-text mt-2">${add.content}</p>
                    </div>
                </div>
                </div>
                `;
                
                
    });
    data01.innerHTML = result;
};




