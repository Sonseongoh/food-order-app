export default function Button({ children, textOnly, className, ...props }) {
  //cssClasses 의 true false로 속성 주기
  let cssClasses = textOnly ? `text-button` : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
