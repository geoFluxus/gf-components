import { useRef, useEffect, useState } from 'react';


const FlowWrapper = (props) => {
    const ref = useRef(null);
    const [rectProps, setRectProps] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const buffer = 0
    const offset = 5

    useEffect(() => {
        // bounding box of <g>
        const calculateBoundingBox = () => {
          const group = ref.current
          if (!group) return

          // get bounding box of entire group
          const bbox = group.getBBox();

          // set calculated bounding box to state
          // (to be used for the <rect> element)
          setRectProps({
            x: bbox.x,
            y: bbox.y,
            width: bbox.width,
            height: bbox.height,
          });
        };

        calculateBoundingBox(); // Initial calculation

        // recalculate on window resize or other changes if needed
        window.addEventListener('resize', calculateBoundingBox);
        return () => window.removeEventListener('resize', calculateBoundingBox);
    }, []);

    const handleMouseOver = (event) => {
        const { target } = event
        const tooltip = document.getElementById('overview-sankey-tooltip')
        const name = target.getAttribute('data-name'),
              info = target.getAttribute('data-info'),
              value = target.getAttribute('data-value'),
              unit = target.getAttribute('data-unit')

        tooltip.innerHTML = `
            <div>
                <div><b>${name}</b></div>
                <div style="color: var(--gf-color-text-secondary);">${info}</div>
                <div><b>Gewicht: ${value} ${unit}</b></div>
            </div>
        `
        tooltip.style.visibility = 'visible'
    }

    const handleMouseMove = (event) => {
        const { pageX: X, pageY: Y, target } = event
        const tooltip = document.getElementById('overview-sankey-tooltip')
        tooltip.style.top = `${Y - offset}px`
        tooltip.style.left = `${X}px`
        tooltip.style.transform = 'translate(-50%, -100%)'
    }

    const handleMouseOut = (event) => {
        const tooltip = document.getElementById('overview-sankey-tooltip')
        tooltip.innerHTML = ''
        tooltip.style.visibility = 'hidden'
    }

    return (
        <>
            // flow layer
            <g ref={ref}>
                {props.children}
            </g>

            // interaction layer
            <rect
                x={rectProps.x - buffer}
                y={rectProps.y - buffer}
                width={rectProps.width + buffer * 2}
                height={rectProps.height + buffer * 2}
                fill="transparent"
                onMouseOver={handleMouseOver}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
                style={{cursor: 'pointer', zindex: 1000}}
                data-name={props.name}
                data-info={props.info}
                data-value={props.value}
                data-unit={props.unit}
            />
        </>
    )
}

export default FlowWrapper