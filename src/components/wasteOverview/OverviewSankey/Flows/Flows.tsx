import FlowWrapper from './FlowWrapper'
import { flows } from '../../flows'


const Flows = ({data, svgRef}) => {
    return (
        <>
            {Object.entries(flows).map(([type, flow]) => {
                const Component = flow.comp,
                      compData = data?.[type]
                return (
                    <FlowWrapper
                        svgRef={svgRef}
                        key={`flow-${flow?.key}`}
                        name={`${flow?.key}. ${flow?.name}`}
                        info={flow?.info}
                        value={compData?.value}
                        unit={compData?.unit}
                    >
                        <Component />
                    </FlowWrapper>
                )
            })}
        </>
    )
}

export default Flows