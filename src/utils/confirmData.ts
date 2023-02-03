export const hasEmail = (
  list: string,
  comparison: string,
  targetDom: string
) => {
  if (comparison.length > 1 && list.match(comparison)) {
    alert('이미 가입된 이메일입니다. 다른 이메일을 입력해주세요.');
    return;
  }
  if (
    comparison.length <= 1 ||
    !comparison.matchAll(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/g)
  )
    return;
  if (!list.match(comparison)) {
    document.querySelector(targetDom)?.setAttribute('disabled', '');
  }
  return () => {
    document.querySelector(targetDom)?.setAttribute('disabled', 'false');
  };
};
