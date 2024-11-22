const FlowWrapper = ({children, name, value, unit}) => {
    const handleMouseOver = (event) => {
        const target = event.currentTarget,
              name = target.getAttribute('data-name'),
              value = target.getAttribute('data-value'),
              unit = target.getAttribute('data-unit')
        if (name) {
            console.log(name)
        }
    }

    const handleMouseMove = (event) => {
        event.preventDefault()
    }

    const handleMouseLeave = (event) => {
        event.preventDefault()
    }

    return (
        <g
            data-name={name}
            data-value={value}
            data-unit={unit}
            onMouseEnter={handleMouseOver}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseLeave}
        >
            {children}
        </g>
    )
}

export default FlowWrapper