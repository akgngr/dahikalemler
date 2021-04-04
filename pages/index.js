import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from "../components/layout/index"

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Layout>
          <article>
            <h1>{title}</h1>
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </Layout>
      </>
    )
  }
}