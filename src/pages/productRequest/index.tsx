import { NoFooterLayout } from '@components/Layout/NoFooterLayout';
import dynamic from 'next/dynamic';

const TextArea = dynamic(() =>
  import('@components/TextArea/index').then((module) => module.TextArea)
);
const TextInput = dynamic(() =>
  import('@components/TextInput/index').then((module) => module.TextInput)
);
const ImageInputList = dynamic(() =>
  import('@components/ImageInputList/ImageInputList').then(
    (module) => module.ImageInputList
  )
);
const Button = dynamic(() =>
  import('@components/Button/index').then((module) => module.Button)
);

export default function ProductRequest() {
  return (
    <NoFooterLayout subject={'칵테일 게시물 작성 페이지입니다.'}>
      <div className=" text-neutral-700 text-2xl mb-4 leading-9 font-semibold">
        새 칵테일 제조하기
      </div>
      <form>
        <TextInput
          // register={register}
          placeHolder="제목은 필수입니다"
          labelName="제목"
          name={'subject'}
        />
        <TextArea
          // register={register}
          // ref={(e) => ref(e)}
          rows={10}
          readOnly={false}
          name={'article'}
          htmlFor={'article'}
        />
        <cite className="text-sm not-italic">
          &#8727; 사진은
          <strong className="text-primary-default">
            &nbsp;총 6장까지&nbsp;
          </strong>
          업로드 가능합니다
          <br /> &#8727; 사진은 한 장당
          <strong className="text-primary-default">&nbsp;5MB</strong>를 넘을 수
          없습니다
        </cite>

        {/* <ImageInputList name={'image'} remit={6} /> */}
        <Button size="l" className="w-full mt-8" type="submit">
          작성 완료
        </Button>
      </form>
    </NoFooterLayout>
  );
}
