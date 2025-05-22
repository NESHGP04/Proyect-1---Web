export default function Button ({label, onClick, className = '', style = {}}) {
  return (
    <button className={className} style={style} onClick={onClick}>
      {label}
    </button>
  )
}
