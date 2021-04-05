import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/home.md';


class etkinlik extends Component {
    render() {
        let { title, cats } = attributes;
        return(
            <>
            <div>
                <ul>
                  {cats.map((cat, k) => (
                    <li key={k}>
                      <h2>{cat.name}</h2>
                      <p>{cat.description}</p>
                    </li>
                  ))}
                </ul>
            </div>
            </>
        )
    }
}

export default etkinlik