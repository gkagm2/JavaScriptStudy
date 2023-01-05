const ajax = new XMLHttpRequest(); // 네트워크 너머에 있는 도구를 가져온다.

const news_url = 'https://api.hnpwa.com/v0/news/1.json';
const content_url = "https://api.hnpwa.com/v0/item/@id.json";
const container_tg = document.getElementById("root");
let template = `
    <div class="container mx_auto p-4">
        <h1>News!</h1>
        <ul>
            {{__news_feed__}}
        </ul> 
        <div>
            <a href="#/page/{{__prev_page__}}">이전 페이지</a>
            <a href="#/page/{{__next_page__}}">다음 페이지</a>
        </div>
    </div>
`;


const store = { 
    iCurrentPage : 1
};


function GetData(_url){
    ajax.open('GET', _url, false); // false : 동기적
    ajax.send() // 데이터 가져오기
    return JSON.parse(ajax.response); // JSON 형태로 변환
}

function NewsFead_code(){
    const MAX_PAGE_LIST_CNT = 10;
    const newsFead = GetData(news_url);
    const newsList = [];
    
    for (let i = (store.iCurrentPage - 1) * MAX_PAGE_LIST_CNT; i < store.iCurrentPage * MAX_PAGE_LIST_CNT; ++i) {
        newsList.push(`
    <li>
        <a href="#/show/${newsFead[i].id}">
            ${newsFead[i].title}(${newsFead[i].comments_count})
        </a>
    </li>
    `);
    };

    template = template.replace("{{__news_feed__}}", newsList.join(''));
    template = template.replace("{{__prev_page__}}", store.iCurrentPage > 1 ? store.iCurrentPage - 1 : 1);
    template = template.replace("{{__next_page__}}", store.iCurrentPage + 1);

    container_tg.innerHTML = template;
};

function NewsDetail() {
    const id = location.hash.substr(7); // 1부터 마지막 인덱스 영역까지 자르기
    const newsContent = GetData(content_url.replace("@id", id));
    container_tg.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href="#/page/${store.iCurrentPage}">목록으로</a>
        </div>
    `;
};

function Router(){
    const routePath = location.hash;
    if ('' === routePath){
        NewsFead_code();
    }
    else if(routePath.indexOf("#/page/") >= 0){
        store.iCurrentPage = Number(routePath.substr(7));
        NewsFead_code();
    }
    else{
        NewsDetail();
    }
}

// location 객체는 브라우저가 기본으로 제공해주는 객체 : 주소와 관련된 다양한 정보를 제공함.

window.addEventListener('hashchange', Router);

Router();

//a_tg.addEventListener('click', function() {});