import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <Link href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
                <a>Click here</a>
              </Link>               
              {' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <Link href={`${EXAMPLE_PATH}`} className="underline hover:text-success duration-200 transition-colors">
                <a>available on GitHub</a>
              </Link>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
