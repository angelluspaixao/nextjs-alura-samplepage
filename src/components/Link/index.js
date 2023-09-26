import NextLink from 'next/link'
import LinkAlter from '../LinkAlter'

export default function Link({ children, href, ...props }) {
    return(
        <NextLink href={href} {...props} passHref legacyBehavior>
            <LinkAlter  {...props}>
                {children}
            </LinkAlter>
        </NextLink>
    )
}