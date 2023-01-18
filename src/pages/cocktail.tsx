import { Header, ImagedListItem, TabBar } from '@components/index';
import { Widget } from '@components/index';
import { Layout } from '@components/Layout/Layout';
import Head from 'next/head';

export default function Cocktail() {
  return (
    <>
      <Head>
        <title>Musclin Guide</title>
        <link
          rel="icon"
          href="https://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2023-01-02/b4dd2dc59fb2bd725e162d2d104a3a24.ico.png"
          sizes="16x16"
        />
      </Head>

      <Layout className="s-center">
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
        <ImagedListItem imgWrapper={'Row'} listWrapper={'Row'} />
      </Layout>
    </>
  );
}
