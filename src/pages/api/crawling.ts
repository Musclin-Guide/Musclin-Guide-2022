import axios from 'axios';
import cheerio from 'cheerio';
const log = console.log;

const url =
  'https://search.shopping.naver.com/search/all?query=%ED%81%AC%EB%A0%88%EC%95%84%ED%8B%B4&bt=-1&frm=NVSCPRO';

const getHtml = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

getHtml().then((html) => {
  // axios 응답 스키마 `data`는 서버가 제공한 응답(데이터)을 받는다.
  // load()는 인자로 html 문자열을 받아 cheerio 객체 반환
  if (html !== undefined) {
    const $ = cheerio.load(html.data);
    // const number = 1;
    // // const data = {
    // //   mainContents: $(
    // //     `#__next > div > div.style_container__UxP6u > div.style_inner__i4gKy > div.style_content_wrap__Cdqnl > div.style_content__xWg5l > ul > div > div:nth-child(${number}) > li > div > div.basicList_info_area__TWvzp > div.basicList_title__VfX3c > a`
    // //   ).text(),
    // // };
    $('.basicList_link__JLQJf').each((i, elem) => {
      const datas = $(elem).text();
      log(datas);
      return datas;
    });
  }
});
