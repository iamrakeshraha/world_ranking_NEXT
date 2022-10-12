import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Lauoyt/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/searchInput/searchInput'

import 'antd/dist/antd.min.css';

export default function Home( {countries}) {
  console.log(countries)
  return <Layout>
    Found {countries.length} countries
    <SearchInput/>
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
