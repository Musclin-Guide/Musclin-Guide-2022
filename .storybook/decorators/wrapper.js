export const wrapperDecorator = (Story) => (
  <div className="bg-slate-100 p-4">
    <Story />
  </div>
);
