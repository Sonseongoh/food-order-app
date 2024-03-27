export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      {/* htmlFor는 className과 같은 역할 */}
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
