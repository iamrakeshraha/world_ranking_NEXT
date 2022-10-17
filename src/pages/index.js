import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Lauoyt/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/searchInput/searchInput'

import 'antd/dist/antd.min.css';
import CountriesTable from '../components/CountriesTable/CountriesTable'

export default function Home({ countries }) {
  // console.log(countries)
  return <Layout>
    <div >Found {countries.length} countries</div>
    <SearchInput />
    <CountriesTable countries={countries}/>
  </Layout>
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();
  // console.log("res:", res);
  // console.log("countries:", countries)

  return {
    props: {
      countries,
    },
  }
}
