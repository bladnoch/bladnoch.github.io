/**
 * quotes.js: has quotes(quote:author), and displays it
 * @author DoungukKim
 * @since 7/21/2023
 * @version v0.0.1
 */

const quotes =[
    {
        quote: "나도 몰라요 어떻게 살지 뭔 말을 해요? /",
        author: "이말년",
    },
    {
        quote: "- 여봐요. 누구시길래 그리 바쁘게 가십니까? - 너의 20대. /",
        author: "털보",
    },
    {
        quote: "억지로라도 즐기면 최소한 지진 않는다. /",
        author: "궤도",
    },
    {
        quote: "뚝배기 깨버립니다. /",
        author: "침착맨",
    },
    {
        quote: "약속시간에 늦었다고 지각이란 것도 고정관념이 아닐까요? /",
        author: "애새끼맨",
    },
    {
        quote: "경고 (1회) 드립니다. /",
        author: "일찐맨",
    },
    {
        quote: "배성재, 매직박, 김풍, 김성회, 빡세 /",
        author: "최악의 세대",
    },
    {
        quote: "어랍쇼? 이것 봐라? /",
        author: "안산83",
    },
    {
        quote: "오락가락끼릭까락 /",
        author: "침 카다시안",
    },
    {
        quote: "5/5 도발 왜 하냐고!! /",
        author: "프레임맨",
    },
    {
        quote: "어떻게 된겨~!? /",
        author: "고기동 산악지대 주민",
    },
    {
        quote: "아, 나 이제 알았어 /",
        author: "양말아저씨",
    }
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
