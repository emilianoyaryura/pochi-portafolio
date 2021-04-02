import ReactMarkdown, { Renderers } from 'react-markdown'
import Link from 'next/link'

import styles from './markdown.module.css'

type Props = {
  children: string
  renderers?: Renderers
}

const Markdown = ({ children, renderers }: Props) => {
  return (
    <ReactMarkdown
      escapeHtml={false}
      className={styles.markdown}
      renderers={{
        // text - Text rendered inside of other elements, such as paragraphs
        // break - Hard-break (<br>)
        // paragraph - Paragraph (<p>)
        // emphasis - Emphasis (<em>)
        // strong - Strong/bold (<strong>)
        // thematicBreak - Horizontal rule / thematic break (<hr>)
        // blockquote - Block quote (<blockquote>)
        // delete - Deleted/strike-through (<del>)
        // link - Link (<a>)
        // image - Image (<img>)
        // linkReference - Link (through a reference) (<a>)
        // imageReference - Image (through a reference) (<img>)
        // table - Table (<table>)
        // tableHead - Table head (<thead>)
        // tableBody - Table body (<tbody>)
        // tableRow - Table row (<tr>)
        // tableCell - Table cell (<td>/<th>)
        // list - List (<ul>/<ol>)
        // listItem - List item (<li>)
        // definition - Definition (not rendered by default)
        // heading - Heading (<h1>-<h6>)
        // inlineCode - Inline code (<code>)
        // code - Block of code (<pre><code>)
        heading: (props) => {
          return <p {...props} className="" />
        },
        strong: (props) => {
          return <b {...props} />
        },
        paragraph: (props) => {
          return <p {...props} className="" />
        },
        link: (props) => <Link {...props} />,
        ...renderers
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
