type message = {
  isUser: boolean;
  message: string;
};

export const realTestConvo: message[] = [
  {
    isUser: false,
    message: "Hi there! I noticed we share a love for hiking. Any favorite trails?",
  },
  {
    isUser: true,
    message: "Hey! Absolutely, I love hiking too. One of my favorites is the Johnson trail. How about you?",
  },
  {
    isUser: false,
    message: "Oh, I've heard great things about the Johnson trail! I've actually been meaning to check it out. Any other recommendations?",
  },
  {
    isUser: true,
    message: "Definitely! Another amazing trail is the Smith trail. It offers stunning views and a challenging hike. Have you tried it?",
  },
  {
    isUser: false,
    message: "I haven't, but it sounds fantastic! I'll have to add that to my list. Do you enjoy any other outdoor activities besides hiking?",
  },
  {
    isUser: true,
    message: " Absolutely! I also enjoy camping, biking, and exploring new places. How about you? Any other outdoor activities you're into?",
  },
  {
    isUser: false,
    message: "Hiking, camping, and biking are right up my alley! I find solace in nature and love the sense of adventure that outdoor activities bring. Exploring new trails and experiencing the beauty of our surroundings is so invigorating. I've been itching to plan a camping trip to a nearby national park. It would be great to have someone to share those experiences with. What about you? Any particular adventures or trips you've been wanting to embark on?",
  },
  {
    isUser: true,
    message: "I couldn't agree more! There's something magical about being surrounded by nature and disconnecting from the daily hustle. As for trips, I've been dreaming of backpacking through Europe, exploring different cultures and cuisines along the way. The idea of visiting historical landmarks, tasting authentic foods, and immersing myself in diverse traditions excites me. Of course, having a travel partner would make the journey even more memorable. How about we continue this conversation over a cup of coffee? I know this great local café where we can meet up. What do you think?",
  },{
    isUser: false,
    message: "I couldn't agree more! There's something magical about being surrounded by nature and disconnecting from the daily hustle. As for trips, I've been dreaming of backpacking through Europe, exploring different cultures and cuisines along the way. The idea of visiting historical landmarks, tasting authentic foods, and immersing myself in diverse traditions excites me. Of course, having a travel partner would make the journey even more memorable. How about we continue this conversation over a cup of coffee? I know this great local café where we can meet up. What do you think?",
  },
  {
    isUser: true,
    message: "Backpacking through Europe sounds like an incredible adventure! The thought of experiencing different cultures firsthand and indulging in delicious food is enticing. I'd love to hear more about your travel plans and maybe share some of my own stories too. Meeting up for coffee sounds perfect! I'm always up for good conversation and getting to know someone new. Let's meet at the café you mentioned. How about this Saturday afternoon?",
  },
  {
    isUser: false,
    message: "Saturday afternoon works for me! I'll mark it on my calendar. Looking forward to meeting you in person and sharing travel stories. If you have any specific preferences for coffee or any dietary restrictions, let me know so I can make the arrangements accordingly. Can't wait to continue our conversation face to face!",
  },
];
