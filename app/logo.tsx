const logo = () => {
  // Transforms SVG to React Component-- Allows us to use css variables & colors on logo.
  // Source: https://react-svgr.com/
  return (
    <>
      <style jsx>{`
      .square {
        height: 24.5px;
        width: 25px;
        border: 2.5px solid var(--color-shade-1);
      }
    `}
      </style>
      <span className="flex items-center text-xl">
        <div className="square inline-block mr-2"></div> CodeSandbox
      </span>
    </>
  )
}

export default logo