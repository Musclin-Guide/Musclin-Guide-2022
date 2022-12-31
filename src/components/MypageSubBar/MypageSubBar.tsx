import clsx from 'clsx';
import { atom, useRecoilState } from 'recoil';
import styles from '@components/MypageSubBar/MypageSubBar.module.css';

const colorState = atom({
  key: 'color',
  default: 1,
});

export function MyPagSubBar() {
  const [color, setcolor] = useRecoilState(colorState);

  const Dummydata = [
    {
      id: 1,
      title: '전체 리뷰',
      description:
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    },
    {
      id: 2,
      title: '전체 칵테일',
      description:
        'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    },
    {
      id: 3,
      title: '댓글 목록',
      description:
        'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
    },
    {
      id: 4,
      title: '찜 목록',
      description: '말도 안되는 독감 콜록콜록',
    },
  ];
  return (
    <section>
      <ul className="inline-flex">
        {Dummydata.map((item) => (
          <li
            key={item.id}
            className={clsx(
              styles.li,
              color === item.id ? styles.liActive : null
            )}
            onClick={() => setcolor(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {Dummydata.filter((item) => item.id === color).map((item) => {
        return (
          <div key={item.id} className="m-4">
            {item.description}
          </div>
        );
      })}
    </section>
  );
}
