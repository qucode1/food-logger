import React from "react";
import Layout from "../components/Layout";
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  
  if (loading) return <div>loading...</div>;
  if(error) {
      console.log(error);
  return <div>Error: {error}</div>
  }

  return (
    <Layout>
        <div>
            <div className='hero'>
                <h1 className='title'>{data && data.sayHello}</h1>
            </div>

            <style jsx>{`
                .hero {
                    width: 100%;
                    color: #333;
                }
                .title {
                    margin: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                }
                .title {
                    text-align: center;
                }
            `}</style>
        </div>
    </Layout>
)};

export default withApollo(Home);
