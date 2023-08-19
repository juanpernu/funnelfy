import Image from 'next/image'
import logoImage from '@/images/funnelfy-logo.svg'

export function Logo(props) {
  return <Image src={logoImage} alt="Funnelfy Logo" {...props} />
}
