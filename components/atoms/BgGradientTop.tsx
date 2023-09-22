const BgGradientTop = ({ position }: { position?: 'bottom' }) => {
  return (
    <div className={`${position || ''} ellipse-container`}>
      <div className='ellipse'></div>
    </div>
  )
}

export default BgGradientTop
