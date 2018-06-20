$( document ).ready(function() {
// if(navigator.language != "it"){
//   switch_lang("en");
// }
var trans = [];
var trans_en = {"menu_home":"Home",
               "menu_chisono":"Who I Am",
               "menu_chefaccio":"What I Do",
               "menu_contatti":"Contacts",
               "main_text":"Hi, I Am Nico and I love",
               "main_quote":"Experience is simply the name we give our mistakes. (Oscar Wilde)",
               "main_button":"Know me better",
               "chisono_title":"Who I am",
               "chisono_text_p1":"Hi, I'm Nico aka Nicomil and my life is like a rainbow because full of different colors!<br> Actually I work as full stack web developer and trainer in private and public courses regarding technologies and digital innovation. My Aim is to pass all the values and principles that made me a better person and professional to the students I teach! I feel so close to the Agile Manifest and sure that the Computational Thinking helps a lot in life and at work!",
               "chisono_text_p2":"I'm JuJitsu and Self Defense instructor, martial arts are my life! Since few years I live with a board under my feet like surf, stand up paddle, skate, snowboard etc.. doesn't matter which one!",
               "chisono_text_p3":"My life headquarter is in Bari but I alway find occasion to leave and go away learning new stuff about life, work and my passions. Roots are important in our lives, but we humans have legs, not roots, and legs are made for walking away!",
               "chisono_card":"This website is like my business card, stop wasting paper!",
               "cosafaccio_title":"Currently doing!",
               "cosafaccio_text":"In every context I often work to rise the people awareness of some ideal, concept and practice.<br> I love teaching because it's the best way to learn and grow up.",
               "cosafaccio_1_title":"Hack-Ademy by auLAB",
               "cosafaccio_1_text":"Web Development Coding Bootcamp",
               "cosafaccio_2_title":"Professione Autodifesa",
               "cosafaccio_2_text":"Self defense professional school",
               "cosafaccio_3_title":"Sup On The Beach",
               "cosafaccio_3_text":"Water Sport events and excursions",
               "cosafaccio_4_title":"School/Work Alternate Training",
               "cosafaccio_4_text":"Tech and business mentoring to young high-school students",
               "cosafaccio_5_title":"Tech Summer Campus",
               "cosafaccio_5_text":"Coding Bootcamp Summer Edition by Randstad Technologies",
               "cosafaccio_story_title":"A little history",
               "cosafaccio_story_text":"Master degree in Computer Science to University of Bari in 2013, I started working since 2012 as winner of an European grant in the fantastic Coworking Space, Impact Hub Bari. Amazing period of my life during the which I grew up as a person and as a professional. A lot of it is credited to 'the coach' Giancarlo Valente who supported me and my team to better develope our technical projects by using Agile Methodologies such as Scrum and Extreme Programming, now I've the pleasure to work with Him in our coding bootcamp! In the maintime I became trainer and examinator for Eipass organisation, holding courses in schools and training centers around my region. Martial arts have been my light in life since early childhood. I learnt not only to fight but how to better approach life, people and work. I started with Judo, then Karate and at the end JuJitsu. I've been the first JuJitsu Wjjko Black Belt in Bari in 2002  through the examination chaired by the international commission led by the World President Soke Robert Clark, recognized as the father of modern JuJitsu, passed away prematurely in 2012.  To this day, though being Instructor and 4th Dan Black Belt with more than 20 years of experience, I continue humbly to practice and forward this great passion.",
               "cosafaccio_cv":"I don't like cv but I have one too",
               "cosafaccio_cv_button":"Take a look",
               "possofare_title":"How may I help you?",
               "possofare_text":"In my life I have gained various skills in various fields <br> and I'm always ready to get into the game.",
               "possofare_1_title":"Web Development",
               "possofare_1_text":"Development of web apps, platforms and landing pages",
               "possofare_2_title":"Technical Advice",
               "possofare_2_text":"Support and menthoring to existing projects",
               "possofare_3_title":"Self Defense",
               "possofare_3_text":"Discover the real self defense for your safety",
               "possofare_4_title":"Martial Arts",
               "possofare_4_text":"Courses and private lessons of JuJitsu",
               "possofare_5_title":"Water Sports",
               "possofare_5_text":"Event and excursions by Stand Up Paddle",
               "possofare_6_title":"Something I'll learn",
               "possofare_6_text":"I'm so curious and ready to start new activities",
               "contatti_title":"Now you know me much better",
               "contatti_quote":'"The essential is invisible to the social networks."',
               "contatti_text":"Have an idea, request, problem or just want to talk with me? Please contact me, it's a pleasure!"
               };

  // Object.keys(trans_en).forEach(key => {
  //   build_trans(key,trans_en[key]);
      
  // });

  for(key in trans_en){
    build_trans(key,trans_en[key]);
  }

  function build_trans(k,elem){
    
    var a = { "it":"<span id='"+k+"'>"+$('#'+k).text()+"</span>",
                  "en":"<span id='"+k+"'>"+elem+"</span>"
                };

    trans[k] = a;
    
  }

  function switch_lang(lang){

    // Object.keys(trans_en).forEach(key => {
    //   $('#'+key).replaceWith(trans[key][lang]);
    // });

    for(key in trans_en){
      $('#'+key).replaceWith(trans[key][lang]);
      
    }

    $("#lang").attr("lang",lang);

    if(lang == "en"){
     $("#cv_link").attr("href","CV_nicola_milella_EN.pdf");
     $("#lang").html("<img src='images/it.png' alt='' style='width: 30px;'>");
    }
    else{
     $("#cv_link").attr("href","CV_nicola_milella_IT.pdf");

     $("#lang").html("<img src='images/en.png' alt='' style='width: 30px;'>");
    }

   }

  //evento click sulla bandiera
  $("#lang").on("click",function(){
    if($(this).attr("lang") == "it"){
      //switch to en
     switch_lang("en");
    }else{
      //switch to it
     switch_lang("it");
    }
  });


  
});