import { useRef, useEffect, useState } from 'react';


const FlowWrapper = ({children, name, value, unit}) => {
    const ref = useRef(null);
    const [rectProps, setRectProps] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const buffer = 10

    useEffect(() => {
        // Function to calculate bounding box of all elements inside the <g>
        const calculateBoundingBox = () => {
          const group = ref.current
          if (!group) return

          // Get the bounding box of the entire group
          const bbox = group.getBBox();

          // Set the calculated bounding box to state (to be used for the <rect> element)
          setRectProps({
            x: bbox.x,
            y: bbox.y,
            width: bbox.width,
            height: bbox.height,
          });
        };

        calculateBoundingBox(); // Initial calculation

        // Recalculate on window resize or other changes if needed
        window.addEventListener('resize', calculateBoundingBox);
        return () => window.removeEventListener('resize', calculateBoundingBox);
    }, []);

    const handleMouseEnter = (event) => {
        const target = event.currentTarget,
              name = target.getAttribute('data-name'),
              value = target.getAttribute('data-value'),
              unit = target.getAttribute('data-unit')

        const rect = event.target.getBoundingClientRect();
        const tooltip = document.getElementById('overview-sankey-tooltip')
        tooltip.style.visibility = 'visible'
    }

    const handleMouseLeave = (event) => {
        const tooltip = document.getElementById('overview-sankey-tooltip')
        tooltip.style.visibility = 'hidden'
    }

    return (
        <>
            // flow layer
            <g
                ref={ref}
                data-name={name}
                data-value={value}
                data-unit={unit}
            >
                {children}
            </g>

            // interaction layer
            <rect
                x={rectProps.x - buffer}
                y={rectProps.y - buffer}
                width={rectProps.width + buffer * 2}
                height={rectProps.height + buffer * 2}
                fill="transparent"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{cursor: 'pointer', zindex: 1000}}
            />
        </>
    )
}

export default FlowWrapper