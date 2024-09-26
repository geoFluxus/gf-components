import React from 'react'
import Link, { Props } from './Link'
import { PhoneIcon } from '../../images/icons'

const PhoneLink: React.FC<Props> = ({
  label,
  href,
  icon=<PhoneIcon />,
  type='light',
  placement='left',
  ...props
}) => <Link label={label} icon={icon} href={href} type={type} {...props} />

export default PhoneLink