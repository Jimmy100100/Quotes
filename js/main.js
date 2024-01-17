quotes = [
    {quote:'“Be yourself; everyone else is already taken.”',
    auther:'― Oscar Wilde',
    },
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther:"― Marilyn Monroe"
    },
    {quote:"“So many books, so little time.”",
    auther:"― Frank Zappa",
    },
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther:"― Albert Einstein",
    },
    {quote:"“A room without books is like a body without a soul.”",
    auther:"― Marcus Tullius Cicero",
    },
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther:"― Bernard M. Baruch",
    },
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther:"― Dr. Seuss",
    },
    {quote:" “You only live once, but if you do it right, once is enough.”",
    auther:"― Mae West",
    },
    {quote:"“Be the change that you wish to see in the world.”",
    auther:"― Mahatma Gandhi",
    },

]

function getQuotes(){

   var que =Math.floor(Math.random()*quotes.length)

document.getElementById('quote').innerHTML=quotes[que].quote
document.getElementById('author').innerHTML=quotes[que].auther

}