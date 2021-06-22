export default function Button ({ classes, content, iconClass }) {
  return (
    <>
      <button type='button' className={'button ' + classes}>
        {content}
        <i className={iconClass} />
      </button>
    </>
  )
}
