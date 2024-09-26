import React from 'react'
import Link, { Props } from './Link'
import { MailIcon } from '../../images/icons'

const EmailLink: React.FC<Props> = ({
  label,
  href,
  icon=<MailIcon />,
  type='light',
  placement='left',
  ...props
}) => <Link label={label} icon={icon} href={href} type={type} {...props} />

export default EmailLink