import { Component } from 'react'
import Layout from "../components/layout/index"
import Slider from '../components/homeslider';
import Etkinlik from '../components/etkinlik'
import About from '../components/about'
import Hizmetler from '../components/hizmetler';

export default class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <Slider />
          <Hizmetler />
          <Etkinlik />
          <About />
        </Layout>
      </>
    )
  }
}
