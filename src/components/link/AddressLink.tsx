import React from 'react'
import Link, { Props } from './Link'
import { LocationIcon } from '../../images/icons'

const AddressLink: React.FC<Props> = ({
  label,
  href,
  icon=<LocationIcon />,
  type='light',
  placement='left',
  ...props
}) => <Link label={label} icon={icon} href={href} type={type} {...props} />

export default AddressLink